var GRADE_NAME = "レベル１";
var USE_RUBY = true;
var QUESTIONS = [
  {
    q: "公園で知らない人に「お菓子あげるよ」と言われた。どうする？",
    q_html: "<ruby>公園<rt>こうえん</rt></ruby>で<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に「お<ruby>菓子<rt>かし</rt></ruby>あげるよ」と<ruby>言<rt>い</rt></ruby>われた。どうする？",
    choices: [
      { t: "ついていかず大人に知らせる", t_html: "ついていかず<ruby>大人<rt>おとな</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせる", c: true },
      { t: "少しだけならもらう", t_html: "<ruby>少<rt>すこ</rt></ruby>しだけならもらう", c: false },
      { t: "友達と一緒ならもらう", t_html: "<ruby>友達<rt>ともだち</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>ならもらう", c: false }
    ]
  },
  {
    q: "一人で歩いていたら、知らない車がゆっくりついてきた。どうする？",
    q_html: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>歩<rt>ある</rt></ruby>いていたら、<ruby>知<rt>し</rt></ruby>らない<ruby>車<rt>くるま</rt></ruby>がゆっくりついてきた。どうする？",
    choices: [
      { t: "すぐに人のいる場所や建物に逃げ込む", t_html: "すぐに<ruby>人<rt>ひと</rt></ruby>のいる<ruby>場所<rt>ばしょ</rt></ruby>や<ruby>建物<rt>たてもの</rt></ruby>に<ruby>逃<rt>に</rt></ruby>げ<ruby>込<rt>こ</rt></ruby>む", c: true },
      { t: "車のそばに寄って話を聞く", t_html: "<ruby>車<rt>くるま</rt></ruby>のそばに<ruby>寄<rt>よ</rt></ruby>って<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く", c: false },
      { t: "走って車を追いかける", t_html: "<ruby>走<rt>はし</rt></ruby>って<ruby>車<rt>くるま</rt></ruby>を<ruby>追<rt>お</rt></ruby>いかける", c: false }
    ]
  },
  {
    q: "「いかのおすし」の「い」は何を意味する？",
    q_html: "「いかのおすし」の「い」は<ruby>何<rt>なに</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する？",
    choices: [
      { t: "知らない人についていかない", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>についていかない", c: true },
      { t: "行かないで家にいる", t_html: "<ruby>行<rt>い</rt></ruby>かないで<ruby>家<rt>いえ</rt></ruby>にいる", c: false },
      { t: "急いで走る", t_html: "<ruby>急<rt>いそ</rt></ruby>いで<ruby>走<rt>はし</rt></ruby>る", c: false }
    ]
  },
  {
    q: "「いかのおすし」の「か」は何を意味する？",
    q_html: "「いかのおすし」の「か」は<ruby>何<rt>なに</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する？",
    choices: [
      { t: "知らない人の車に乗らない", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>の<ruby>車<rt>くるま</rt></ruby>に<ruby>乗<rt>の</rt></ruby>らない", c: true },
      { t: "帰り道を覚える", t_html: "<ruby>帰<rt>かえ</rt></ruby>り<ruby>道<rt>みち</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>える", c: false },
      { t: "体を鍛える", t_html: "<ruby>体<rt>からだ</rt></ruby>を<ruby>鍛<rt>きた</rt></ruby>える", c: false }
    ]
  },
  {
    q: "「いかのおすし」の「お」は何を意味する？",
    q_html: "「いかのおすし」の「お」は<ruby>何<rt>なに</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する？",
    choices: [
      { t: "おおごえで助けを呼ぶ", t_html: "おおごえで<ruby>助<rt>たす</rt></ruby>けを<ruby>呼<rt>よ</rt></ruby>ぶ", c: true },
      { t: "おとなしく従う", t_html: "おとなしく<ruby>従<rt>したが</rt></ruby>う", c: false },
      { t: "お金を渡す", t_html: "お<ruby>金<rt>かね</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>す", c: false }
    ]
  },
  {
    q: "「いかのおすし」の「す」は何を意味する？",
    q_html: "「いかのおすし」の「す」は<ruby>何<rt>なに</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する？",
    choices: [
      { t: "すぐ逃げる", t_html: "すぐ<ruby>逃<rt>に</rt></ruby>げる", c: true },
      { t: "すわって待つ", t_html: "すわって<ruby>待<rt>ま</rt></ruby>つ", c: false },
      { t: "素直に話を聞く", t_html: "<ruby>素直<rt>すなお</rt></ruby>に<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く", c: false }
    ]
  },
  {
    q: "「いかのおすし」の「し」は何を意味する？",
    q_html: "「いかのおすし」の「し」は<ruby>何<rt>なに</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する？",
    choices: [
      { t: "すぐ大人に知らせる", t_html: "すぐ<ruby>大人<rt>おとな</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせる", c: true },
      { t: "自分で解決する", t_html: "<ruby>自分<rt>じぶん</rt></ruby>で<ruby>解決<rt>かいけつ</rt></ruby>する", c: false },
      { t: "静かにしている", t_html: "<ruby>静<rt>しず</rt></ruby>かにしている", c: false }
    ]
  },
  {
    q: "知らない人に「お母さんが事故にあったよ」と言われた。どうする？",
    q_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に「お<ruby>母<rt>かあ</rt></ruby>さんが<ruby>事故<rt>じこ</rt></ruby>にあったよ」と<ruby>言<rt>い</rt></ruby>われた。どうする？",
    choices: [
      { t: "その場を離れ家族か先生に連絡する", t_html: "その<ruby>場<rt>ば</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れ<ruby>家族<rt>かぞく</rt></ruby>か<ruby>先生<rt>せんせい</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>する", c: true },
      { t: "すぐについていく", t_html: "すぐについていく", c: false },
      { t: "知らない人の車に乗る", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>の<ruby>車<rt>くるま</rt></ruby>に<ruby>乗<rt>の</rt></ruby>る", c: false }
    ]
  },
  {
    q: "下校中に後ろからついてくる人がいた。どこに逃げるのがよい？",
    q_html: "<ruby>下校<rt>げこう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>後<rt>うし</rt></ruby>ろからついてくる<ruby>人<rt>ひと</rt></ruby>がいた。どこに<ruby>逃<rt>に</rt></ruby>げるのがよい？",
    choices: [
      { t: "コンビニや店など人がいる建物", t_html: "コンビニや<ruby>店<rt>みせ</rt></ruby>など<ruby>人<rt>ひと</rt></ruby>がいる<ruby>建物<rt>たてもの</rt></ruby>", c: true },
      { t: "公園の茂みの中", t_html: "<ruby>公園<rt>こうえん</rt></ruby>の<ruby>茂<rt>しげ</rt></ruby>みの<ruby>中<rt>なか</rt></ruby>", c: false },
      { t: "川のそば", t_html: "<ruby>川<rt>かわ</rt></ruby>のそば", c: false }
    ]
  },
  {
    q: "「子ども110番の家」は何をするところ？",
    q_html: "「こども110<ruby>番<rt>ばん</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>」は<ruby>何<rt>なに</rt></ruby>をするところ？",
    choices: [
      { t: "危ないときに助けを求める場所", t_html: "<ruby>危<rt>あぶ</rt></ruby>ないときに<ruby>助<rt>たす</rt></ruby>けを<ruby>求<rt>もと</rt></ruby>める<ruby>場所<rt>ばしょ</rt></ruby>", c: true },
      { t: "お菓子をもらえる場所", t_html: "お<ruby>菓子<rt>かし</rt></ruby>をもらえる<ruby>場所<rt>ばしょ</rt></ruby>", c: false },
      { t: "おもちゃを貸してくれる場所", t_html: "おもちゃを<ruby>貸<rt>か</rt></ruby>してくれる<ruby>場所<rt>ばしょ</rt></ruby>", c: false }
    ]
  },
  {
    q: "防犯ブザーはいつ使う？",
    q_html: "<ruby>防犯<rt>ぼうはん</rt></ruby>ブザーはいつ<ruby>使<rt>つか</rt></ruby>う？",
    choices: [
      { t: "危険を感じたとき大きな音を出す", t_html: "<ruby>危険<rt>きけん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じたとき<ruby>大<rt>おお</rt></ruby>きな<ruby>音<rt>おと</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す", c: true },
      { t: "音楽を聴くとき", t_html: "<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>くとき", c: false },
      { t: "誰かを驚かせるとき", t_html: "<ruby>誰<rt>だれ</rt></ruby>かを<ruby>驚<rt>おどろ</rt></ruby>かせるとき", c: false }
    ]
  },
  {
    q: "知らない人から「写真を撮らせて」と言われた。どうする？",
    q_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>から「<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>らせて」と<ruby>言<rt>い</rt></ruby>われた。どうする？",
    choices: [
      { t: "断ってすぐに大人に知らせる", t_html: "<ruby>断<rt>ことわ</rt></ruby>ってすぐに<ruby>大人<rt>おとな</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせる", c: true },
      { t: "笑顔でポーズをとる", t_html: "<ruby>笑顔<rt>えがお</rt></ruby>でポーズをとる", c: false },
      { t: "友達も呼んで一緒に撮ってもらう", t_html: "<ruby>友達<rt>ともだち</rt></ruby>も<ruby>呼<rt>よ</rt></ruby>んで<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>撮<rt>と</rt></ruby>ってもらう", c: false }
    ]
  },
  {
    q: "一人で留守番しているとき、インターホンが鳴った。どうする？",
    q_html: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>留守番<rt>るすばん</rt></ruby>しているとき、インターホンが<ruby>鳴<rt>な</rt></ruby>った。どうする？",
    choices: [
      { t: "ドアは開けず親に連絡する", t_html: "ドアは<ruby>開<rt>あ</rt></ruby>けず<ruby>親<rt>おや</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>する", c: true },
      { t: "すぐドアを開けて確認する", t_html: "すぐドアを<ruby>開<rt>あ</rt></ruby>けて<ruby>確認<rt>かくにん</rt></ruby>する", c: false },
      { t: "「今、親はいません」と話す", t_html: "「<ruby>今<rt>いま</rt></ruby>、<ruby>親<rt>おや</rt></ruby>はいません」と<ruby>話<rt>はな</rt></ruby>す", c: false }
    ]
  },
  {
    q: "放課後、公園で遊ぶとき大切なことは？",
    q_html: "<ruby>放課後<rt>ほうかご</rt></ruby>、<ruby>公園<rt>こうえん</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ぶとき<ruby>大切<rt>たいせつ</rt></ruby>なことは？",
    choices: [
      { t: "どこで遊ぶか親に伝えて明るいうちに帰る", t_html: "どこで<ruby>遊<rt>あそ</rt></ruby>ぶか<ruby>親<rt>おや</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えて<ruby>明<rt>あか</rt></ruby>るいうちに<ruby>帰<rt>かえ</rt></ruby>る", c: true },
      { t: "暗くなるまで遊んでいい", t_html: "<ruby>暗<rt>くら</rt></ruby>くなるまで<ruby>遊<rt>あそ</rt></ruby>んでいい", c: false },
      { t: "一人で知らない場所でも遊べる", t_html: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>知<rt>し</rt></ruby>らない<ruby>場所<rt>ばしょ</rt></ruby>でも<ruby>遊<rt>あそ</rt></ruby>べる", c: false }
    ]
  },
  {
    q: "知らない人に「道を教えて」と近づいてきた。安全な対応は？",
    q_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に「<ruby>道<rt>みち</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えて」と<ruby>近<rt>ちか</rt></ruby>づいてきた。<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>対応<rt>たいおう</rt></ruby>は？",
    choices: [
      { t: "距離を保ちながら「知りません」と答え離れる", t_html: "<ruby>距離<rt>きょり</rt></ruby>を<ruby>保<rt>たも</rt></ruby>ちながら「<ruby>知<rt>し</rt></ruby>りません」と<ruby>答<rt>こた</rt></ruby>え<ruby>離<rt>はな</rt></ruby>れる", c: true },
      { t: "一緒について案内してあげる", t_html: "<ruby>一緒<rt>いっしょ</rt></ruby>についてあんないしてあげる", c: false },
      { t: "その人の荷物を持ってあげる", t_html: "その<ruby>人<rt>ひと</rt></ruby>の<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってあげる", c: false }
    ]
  },
  {
    q: "危ない目にあいそうになったとき、一番大切なことは？",
    q_html: "<ruby>危<rt>あぶ</rt></ruby>ない<ruby>目<rt>め</rt></ruby>にあいそうになったとき、<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>なことは？",
    choices: [
      { t: "自分の命を守ること", t_html: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ること", c: true },
      { t: "相手と戦って勝つこと", t_html: "<ruby>相手<rt>あいて</rt></ruby>と<ruby>戦<rt>たたか</rt></ruby>って<ruby>勝<rt>か</rt></ruby>つこと", c: false },
      { t: "証拠を集めること", t_html: "<ruby>証拠<rt>しょうこ</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めること", c: false }
    ]
  },
  {
    q: "友達の家の近くで知らない大人が子どもに声をかけていた。どうする？",
    q_html: "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くで<ruby>知<rt>し</rt></ruby>らない<ruby>大人<rt>おとな</rt></ruby>が<ruby>子<rt>こ</rt></ruby>どもに<ruby>声<rt>こえ</rt></ruby>をかけていた。どうする？",
    choices: [
      { t: "その場を離れて大人や警察に伝える", t_html: "その<ruby>場<rt>ば</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れて<ruby>大人<rt>おとな</rt></ruby>や<ruby>警察<rt>けいさつ</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>える", c: true },
      { t: "自分で注意しに行く", t_html: "<ruby>自分<rt>じぶん</rt></ruby>で<ruby>注意<rt>ちゅうい</rt></ruby>しに<ruby>行<rt>い</rt></ruby>く", c: false },
      { t: "知らないふりをして通り過ぎる", t_html: "<ruby>知<rt>し</rt></ruby>らないふりをして<ruby>通<rt>とお</rt></ruby>り<ruby>過<rt>す</rt></ruby>ぎる", c: false }
    ]
  },
  {
    q: "登下校中に安全な道とはどんな道？",
    q_html: "<ruby>登下校<rt>とうげこう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>道<rt>みち</rt></ruby>とはどんな<ruby>道<rt>みち</rt></ruby>？",
    choices: [
      { t: "人通りが多く明るい道", t_html: "<ruby>人通<rt>ひとどお</rt></ruby>りが<ruby>多<rt>おお</rt></ruby>く<ruby>明<rt>あか</rt></ruby>るい<ruby>道<rt>みち</rt></ruby>", c: true },
      { t: "近道だが人が少ない暗い道", t_html: "<ruby>近道<rt>ちかみち</rt></ruby>だが<ruby>人<rt>ひと</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない<ruby>暗<rt>くら</rt></ruby>い<ruby>道<rt>みち</rt></ruby>", c: false },
      { t: "空き地や草むらの多い道", t_html: "<ruby>空<rt>あ</rt></ruby>き<ruby>地<rt>ち</rt></ruby>や<ruby>草<rt>くさ</rt></ruby>むらの<ruby>多<rt>おお</rt></ruby>い<ruby>道<rt>みち</rt></ruby>", c: false }
    ]
  },
  {
    q: "怖い目にあったとき、誰に話すのがよい？",
    q_html: "<ruby>怖<rt>こわ</rt></ruby>い<ruby>目<rt>め</rt></ruby>にあったとき、<ruby>誰<rt>だれ</rt></ruby>に<ruby>話<rt>はな</rt></ruby>すのがよい？",
    choices: [
      { t: "親や先生など信頼できる大人", t_html: "<ruby>親<rt>おや</rt></ruby>や<ruby>先生<rt>せんせい</rt></ruby>など<ruby>信頼<rt>しんらい</rt></ruby>できる<ruby>大人<rt>おとな</rt></ruby>", c: true },
      { t: "一人で解決しようとする", t_html: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>解決<rt>かいけつ</rt></ruby>しようとする", c: false },
      { t: "SNSに書き込む", t_html: "SNSに<ruby>書<rt>か</rt></ruby>き<ruby>込<rt>こ</rt></ruby>む", c: false }
    ]
  },
  {
    q: "友達と二人で帰っていると、知らない人が「おいで」と手招きした。どうする？",
    q_html: "<ruby>友達<rt>ともだち</rt></ruby>と<ruby>二人<rt>ふたり</rt></ruby>で<ruby>帰<rt>かえ</rt></ruby>っていると、<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>が「おいで」と<ruby>手招<rt>てまね</rt></ruby>きした。どうする？",
    choices: [
      { t: "二人で反対方向に逃げ大人に知らせる", t_html: "<ruby>二人<rt>ふたり</rt></ruby>で<ruby>反対<rt>はんたい</rt></ruby><ruby>方向<rt>ほうこう</rt></ruby>に<ruby>逃<rt>に</rt></ruby>げ<ruby>大人<rt>おとな</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせる", c: true },
      { t: "友達だけ逃げて自分は残る", t_html: "<ruby>友達<rt>ともだち</rt></ruby>だけ<ruby>逃<rt>に</rt></ruby>げて<ruby>自分<rt>じぶん</rt></ruby>は<ruby>残<rt>のこ</rt></ruby>る", c: false },
      { t: "何をくれるか聞いてみる", t_html: "<ruby>何<rt>なに</rt></ruby>をくれるか<ruby>聞<rt>き</rt></ruby>いてみる", c: false }
    ]
  },
  {
    q: "「ひみつだよ」と言って何かをくれようとする大人。これは？",
    q_html: "「ひみつだよ」と<ruby>言<rt>い</rt></ruby>って<ruby>何<rt>なに</rt></ruby>かをくれようとする<ruby>大人<rt>おとな</rt></ruby>。これは？",
    choices: [
      { t: "危険なサインなので断って大人に話す", t_html: "<ruby>危険<rt>きけん</rt></ruby>なサインなので<ruby>断<rt>ことわ</rt></ruby>って<ruby>大人<rt>おとな</rt></ruby>に<ruby>話<rt>はな</rt></ruby>す", c: true },
      { t: "秘密を守れる子は信頼される", t_html: "<ruby>秘密<rt>ひみつ</rt></ruby>を<ruby>守<rt>まも</rt></ruby>れる<ruby>子<rt>こ</rt></ruby>は<ruby>信頼<rt>しんらい</rt></ruby>される", c: false },
      { t: "特別な友達の証拠", t_html: "<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>友達<rt>ともだち</rt></ruby>の<ruby>証拠<rt>しょうこ</rt></ruby>", c: false }
    ]
  },
  {
    q: "緊急のときに電話する番号は？",
    q_html: "<ruby>緊急<rt>きんきゅう</rt></ruby>のときに<ruby>電話<rt>でんわ</rt></ruby>する<ruby>番号<rt>ばんごう</rt></ruby>は？",
    choices: [
      { t: "事件・事故は110番、火事・救急は119番", t_html: "<ruby>事件<rt>じけん</rt></ruby>・<ruby>事故<rt>じこ</rt></ruby>は110<ruby>番<rt>ばん</rt></ruby>、<ruby>火事<rt>かじ</rt></ruby>・<ruby>救急<rt>きゅうきゅう</rt></ruby>は119<ruby>番<rt>ばん</rt></ruby>", c: true },
      { t: "どちらも119番", t_html: "どちらも119<ruby>番<rt>ばん</rt></ruby>", c: false },
      { t: "どちらも110番", t_html: "どちらも110<ruby>番<rt>ばん</rt></ruby>", c: false }
    ]
  },
  {
    q: "スーパーで迷子になったとき、どうする？",
    q_html: "スーパーで<ruby>迷子<rt>まいご</rt></ruby>になったとき、どうする？",
    choices: [
      { t: "店員さんや案内カウンターに助けを求める", t_html: "<ruby>店員<rt>てんいん</rt></ruby>さんや<ruby>案内<rt>あんない</rt></ruby>カウンターに<ruby>助<rt>たす</rt></ruby>けを<ruby>求<rt>もと</rt></ruby>める", c: true },
      { t: "知らない人について行く", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>について<ruby>行<rt>い</rt></ruby>く", c: false },
      { t: "一人で外に出て探す", t_html: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>で</rt></ruby>て<ruby>探<rt>さが</rt></ruby>す", c: false }
    ]
  },
  {
    q: "知らない人に腕をつかまれた。どうする？",
    q_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に<ruby>腕<rt>うで</rt></ruby>をつかまれた。どうする？",
    choices: [
      { t: "大声で叫びながら全力で逃げる", t_html: "<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>叫<rt>さけ</rt></ruby>びながら<ruby>全力<rt>ぜんりょく</rt></ruby>で<ruby>逃<rt>に</rt></ruby>げる", c: true },
      { t: "おとなしくついていく", t_html: "おとなしくついていく", c: false },
      { t: "なぜつかむのか話し合う", t_html: "なぜつかむのか<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う", c: false }
    ]
  },
  {
    q: "防犯のために毎日できることは？",
    q_html: "<ruby>防犯<rt>ぼうはん</rt></ruby>のために<ruby>毎日<rt>まいにち</rt></ruby>できることは？",
    choices: [
      { t: "出かける前に行き先を家族に伝える", t_html: "<ruby>出<rt>で</rt></ruby>かける<ruby>前<rt>まえ</rt></ruby>に<ruby>行<rt>い</rt></ruby>き<ruby>先<rt>さき</rt></ruby>を<ruby>家族<rt>かぞく</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>える", c: true },
      { t: "知らない人には全員声をかける", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>には<ruby>全員<rt>ぜんいん</rt></ruby><ruby>声<rt>こえ</rt></ruby>をかける", c: false },
      { t: "一人でどこへでも自由に行く", t_html: "<ruby>一人<rt>ひとり</rt></ruby>でどこへでも<ruby>自由<rt>じゆう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く", c: false }
    ]
  },
  {
    q: "知らない人がお金をくれると言った。どうする？",
    q_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>がお<ruby>金<rt>かね</rt></ruby>をくれると<ruby>言<rt>い</rt></ruby>った。どうする？",
    choices: [
      { t: "断って立ち去り大人に知らせる", t_html: "<ruby>断<rt>ことわ</rt></ruby>って<ruby>立<rt>た</rt></ruby>ち<ruby>去<rt>さ</rt></ruby>り<ruby>大人<rt>おとな</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせる", c: true },
      { t: "少しだけもらう", t_html: "<ruby>少<rt>すこ</rt></ruby>しだけもらう", c: false },
      { t: "なぜくれるのか理由を聞いてからもらう", t_html: "なぜくれるのか<ruby>理由<rt>りゆう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてからもらう", c: false }
    ]
  },
  {
    q: "暗い夜道を一人で帰らなければならないとき、どうすればよい？",
    q_html: "<ruby>暗<rt>くら</rt></ruby>い<ruby>夜道<rt>よみち</rt></ruby>を<ruby>一人<rt>ひとり</rt></ruby>で<ruby>帰<rt>かえ</rt></ruby>らなければならないとき、どうすればよい？",
    choices: [
      { t: "親や大人に迎えに来てもらう", t_html: "<ruby>親<rt>おや</rt></ruby>や<ruby>大人<rt>おとな</rt></ruby>に<ruby>迎<rt>むか</rt></ruby>えに<ruby>来<rt>き</rt></ruby>てもらう", c: true },
      { t: "走れば大丈夫", t_html: "<ruby>走<rt>はし</rt></ruby>れば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>", c: false },
      { t: "知らない人の車に乗せてもらう", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>の<ruby>車<rt>くるま</rt></ruby>に<ruby>乗<rt>の</rt></ruby>せてもらう", c: false }
    ]
  },
  {
    q: "「いかのおすし」は何のための合言葉？",
    q_html: "「いかのおすし」は<ruby>何<rt>なに</rt></ruby>のための<ruby>合言葉<rt>あいことば</rt></ruby>？",
    choices: [
      { t: "子どもが不審者から身を守るための合言葉", t_html: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>不審者<rt>ふしんしゃ</rt></ruby>から<ruby>身<rt>み</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るための<ruby>合言葉<rt>あいことば</rt></ruby>", c: true },
      { t: "魚料理の作り方", t_html: "<ruby>魚料理<rt>さかなりょうり</rt></ruby>の<ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>", c: false },
      { t: "掃除の仕方", t_html: "<ruby>掃除<rt>そうじ</rt></ruby>の<ruby>仕方<rt>しかた</rt></ruby>", c: false }
    ]
  },
  {
    q: "トイレに一人で行くとき、安全のために気をつけることは？",
    q_html: "トイレに<ruby>一人<rt>ひとり</rt></ruby>で<ruby>行<rt>い</rt></ruby>くとき、<ruby>安全<rt>あんぜん</rt></ruby>のために<ruby>気<rt>き</rt></ruby>をつけることは？",
    choices: [
      { t: "できれば友達と一緒に行く", t_html: "できれば<ruby>友達<rt>ともだち</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く", c: true },
      { t: "知らない人に場所を聞く", t_html: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く", c: false },
      { t: "なるべく暗い場所にあるトイレを使う", t_html: "なるべく<ruby>暗<rt>くら</rt></ruby>い<ruby>場所<rt>ばしょ</rt></ruby>にあるトイレを<ruby>使<rt>つか</rt></ruby>う", c: false }
    ]
  },
  {
    q: "防犯ブザーはどこにつけておくとよい？",
    q_html: "<ruby>防犯<rt>ぼうはん</rt></ruby>ブザーはどこにつけておくとよい？",
    choices: [
      { t: "すぐ引っ張れるようランドセルの外側", t_html: "すぐ<ruby>引<rt>ひ</rt></ruby>っ<ruby>張<rt>ぱ</rt></ruby>れるようランドセルの<ruby>外側<rt>そとがわ</rt></ruby>", c: true },
      { t: "ランドセルの一番奥", t_html: "ランドセルの<ruby>一番奥<rt>いちばんおく</rt></ruby>", c: false },
      { t: "家の引き出しの中", t_html: "<ruby>家<rt>いえ</rt></ruby>の<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの<ruby>中<rt>なか</rt></ruby>", c: false }
    ]
  }
];
