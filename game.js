// game.js — shared game logic
// Requires: GRADE_NAME, USE_RUBY, QUESTIONS (from questions_*.js)

var questions = [];
var board = Array(9).fill(null);
var currentPlayer = 1; // 1=red, 2=blue
var wrongAnswers = [];
var pendingCell = -1;

var WIN_PATTERNS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function loadQuestions() {
  var stored = localStorage.getItem('bouhan_q_' + GRADE_NAME);
  if (stored) {
    try { questions = JSON.parse(stored); return; } catch(e) {}
  }
  questions = QUESTIONS.slice();
}

function initGame() {
  loadQuestions();
  board = Array(9).fill(null);
  wrongAnswers = [];
  currentPlayer = 1;
  renderPlayerBar();
  renderBoard();
}

function renderPlayerBar() {
  var r = document.getElementById('redSide');
  var b = document.getElementById('blueSide');
  if (currentPlayer === 1) {
    r.classList.remove('inactive');
    b.classList.add('inactive');
  } else {
    b.classList.remove('inactive');
    r.classList.add('inactive');
  }
}

function renderBoard() {
  var boardEl = document.getElementById('board');
  boardEl.innerHTML = '';
  for (var i = 0; i < 9; i++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    if (board[i] === 1) {
      cell.classList.add('red', 'taken');
      cell.textContent = '●';
    } else if (board[i] === 2) {
      cell.classList.add('blue', 'taken');
      cell.textContent = '●';
    } else {
      var num = document.createElement('span');
      num.className = 'cellNum';
      num.textContent = i + 1;
      cell.appendChild(num);
      cell.addEventListener('click', (function(idx){ return function(){ onCellClick(idx); }; })(i));
    }
    boardEl.appendChild(cell);
  }
}

function onCellClick(idx) {
  if (board[idx] !== null) return;
  pendingCell = idx;
  showQuestion();
}

function showQuestion() {
  if (questions.length === 0) loadQuestions();
  var q = shuffle(questions)[0];
  // remove used question temporarily to avoid repeats
  var shuffled = shuffle(questions);
  q = shuffled[0];

  var qOverlay = document.getElementById('qOverlay');
  var qText = document.getElementById('qText');
  var choicesEl = document.getElementById('choices');

  if (USE_RUBY && q.q_html) {
    qText.innerHTML = q.q_html;
  } else {
    qText.textContent = q.q;
  }

  choicesEl.innerHTML = '';
  var shuffledChoices = shuffle(q.choices);
  var nums = ['①','②','③','④','⑤'];

  var correctCount = q.choices.filter(function(c){ return c.c === true; }).length;
  var isMulti = correctCount > 1;

  if (isMulti) {
    shuffledChoices.forEach(function(choice, i) {
      var label = document.createElement('label');
      label.className = 'choiceLabel';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'choiceCb';
      cb.dataset.correct = choice.c ? '1' : '0';
      var span = document.createElement('span');
      if (USE_RUBY && choice.t_html) {
        span.innerHTML = nums[i] + ' ' + choice.t_html;
      } else {
        span.textContent = nums[i] + ' ' + choice.t;
      }
      label.appendChild(cb);
      label.appendChild(span);
      choicesEl.appendChild(label);
    });
    var submitBtn = document.createElement('button');
    submitBtn.className = 'submitBtn';
    submitBtn.textContent = '答えを決定する';
    submitBtn.addEventListener('click', function(){
      handleMultiAnswer(q, shuffledChoices, correctCount);
    });
    choicesEl.appendChild(submitBtn);
  } else {
    shuffledChoices.forEach(function(choice, i) {
      var btn = document.createElement('button');
      btn.className = 'choiceBtn';
      if (USE_RUBY && choice.t_html) {
        btn.innerHTML = nums[i] + ' ' + choice.t_html;
      } else {
        btn.textContent = nums[i] + ' ' + choice.t;
      }
      btn.addEventListener('click', function(){ handleSingleAnswer(q, choice); });
      choicesEl.appendChild(btn);
    });
  }

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  qOverlay.classList.add('show');
}

function handleSingleAnswer(q, chosenChoice) {
  var correct = chosenChoice.c === true;
  showFeedback(correct, q, correct ? [] : q.choices.filter(function(c){ return c.c; }));
  afterAnswer(correct, q);
}

function handleMultiAnswer(q, shuffledChoices, correctCount) {
  var checkboxes = document.querySelectorAll('#choices .choiceCb');
  var checkedTexts = [];
  var correctTexts = q.choices.filter(function(c){ return c.c; }).map(function(c){ return c.t; });
  checkboxes.forEach(function(cb, i){
    if (cb.checked) checkedTexts.push(shuffledChoices[i].t);
  });
  var allSelected = correctTexts.every(function(ct){ return checkedTexts.indexOf(ct) !== -1; });
  var noExtra = checkedTexts.every(function(ct){ return correctTexts.indexOf(ct) !== -1; });
  var correct = allSelected && noExtra;
  showFeedback(correct, q, correct ? [] : q.choices.filter(function(c){ return c.c; }));
  afterAnswer(correct, q);
}

function showFeedback(correct, q, correctChoices) {
  var fb = document.getElementById('feedback');
  fb.className = 'feedback ' + (correct ? 'ok' : 'ng');
  fb.textContent = correct ? '⭕ 正解！' : '❌ 不正解';
  // disable buttons
  document.querySelectorAll('#choices .choiceBtn, #choices .submitBtn').forEach(function(b){ b.disabled = true; });
  document.querySelectorAll('#choices .choiceCb').forEach(function(cb){ cb.disabled = true; });
  if (!correct) {
    wrongAnswers.push({ q: q.q, correct: correctChoices.map(function(c){ return c.t; }) });
  }
}

function afterAnswer(correct, q) {
  setTimeout(function(){
    document.getElementById('qOverlay').classList.remove('show');
    if (correct) {
      board[pendingCell] = currentPlayer;
    }
    renderBoard();
    var win = checkWin();
    var full = board.every(function(c){ return c !== null; });
    if (win || full) {
      showResult(win);
      return;
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    renderPlayerBar();
  }, 1600);
}

function checkWin() {
  for (var i = 0; i < WIN_PATTERNS.length; i++) {
    var p = WIN_PATTERNS[i];
    if (board[p[0]] && board[p[0]] === board[p[1]] && board[p[1]] === board[p[2]]) {
      return board[p[0]];
    }
  }
  return null;
}

function countCells(player) {
  return board.filter(function(c){ return c === player; }).length;
}

function showResult(winner) {
  var titleEl = document.getElementById('resultTitle');
  var r = countCells(1), b = countCells(2);
  if (winner) {
    var name = winner === 1 ? '赤チーム' : '青チーム';
    titleEl.innerHTML = '<span style="color:'+(winner===1?'#ef4444':'#3b82f6')+'">'+name+'の勝ち！</span>';
  } else {
    // draw — decide by count
    if (r > b) titleEl.innerHTML = '<span style="color:#ef4444">赤チームの勝ち！</span><br><small style="font-size:14px;color:#64748b">（マス数 赤'+r+' 対 青'+b+'）</small>';
    else if (b > r) titleEl.innerHTML = '<span style="color:#3b82f6">青チームの勝ち！</span><br><small style="font-size:14px;color:#64748b">（マス数 赤'+r+' 対 青'+b+'）</small>';
    else titleEl.innerHTML = '<span style="color:#64748b">引き分け！</span>';
  }
  var wl = document.getElementById('wrongList');
  wl.innerHTML = '';
  if (wrongAnswers.length > 0) {
    var h = '<p style="font-weight:bold;margin-bottom:6px">間違えた問題：</p>';
    wrongAnswers.forEach(function(w){
      h += '<div class="wrongItem"><b>Q：</b>'+w.q+'<br><b>正解：</b>'+w.correct.join('、')+'</div>';
    });
    wl.innerHTML = h;
  }
  document.getElementById('resultOverlay').classList.add('show');
}

window.addEventListener('DOMContentLoaded', function(){
  initGame();
  document.getElementById('resetBtn').addEventListener('click', function(){
    document.getElementById('resultOverlay').classList.remove('show');
    initGame();
  });
});
