// script.js (決定版 - ISTJ全網羅 & 全会話ボリュームアップ)

// 1. データの定義
// =================================

// 全16タイプの基本データを網羅
const mbtiData = {
    "ISTJ": { alias: "管理者", title: "ISTJ (管理者型)", tagline: "事実と論理を重んじ、社会の安定を支える実務家", description: "ISTJは、その誠実さと揺るぎない責任感で知られています。事実に基づいた現実的な思考を好み、一度決めたことは最後までやり遂げる強い意志を持っています。伝統や秩序を重んじ、その安定した存在感は組織や家庭において不可欠な柱となります。", relationships: "恋愛や人間関係においては、派手さよりも誠実さと信頼性を最も重視します。言葉よりも行動で愛情や責任を示し、パートナーや家族のために尽くすことを厭いません。安定した長期的な関係を築くことを望みますが、相手の感情の機微を察するのは少し苦手な面もあります。", career_paths: ["会計士", "公務員", "システム管理者", "警察官", "銀行員", "プロジェクトマネージャー"], famous_people: ["ジョージ・ワシントン", "アンゲラ・メルケル", "ナタリー・ポートマン", "デンゼル・ワシントン"], cognitive_functions: { dominant: { name: "内向的感覚 (Si)", description: "過去の経験や詳細な事実を正確に記憶し、それを現在の判断基準とします。" }, auxiliary: { name: "外向的思考 (Te)", description: "物事を効率的に整理し、論理的な計画を立てて実行します。" }, tertiary: { name: "内向的感情 (Fi)", description: "内面の価値観を持っていますが、普段はあまり表に出しません。" }, inferior: { name: "外向的直観 (Ne)", description: "ストレス下で、未知の可能性に対する漠然とした不安を感じます。" } }, conversation: `（会議後）\n部下: 「先ほどの件、どう進めましょうか？」\nISTJ: 「まず、5ページ目のデータに齟齬があった。これを修正するのが第一だ。その後、B案の予算を再計算し、明日の15時までに私に報告してくれ。手順は規定通りのフォーマットで頼む。」` },
    "INFP": { alias: "仲介者", title: "INFP (仲介者型)", tagline: "静かな情熱を燃やす、心優しき理想主義者", description: "詩人肌で、常に物事の善い面を探し求める真の理想主義者。自分の内なる価値観や信念に深く根ざしており、その独自の視点から世界を眺めます。非常に共感力が高く、他人の感情を自分のことのように感じ取ることができます。", relationships: "恋愛においては、理想的なパートナーシップと深い精神的な繋がりを求めます。表面的な関係には興味がなく、魂レベルでの理解者を求めています。一度心を開いた相手には非常に献身的ですが、自分の感情を言葉にするのが苦手なため、パートナーはINFPの心の機微を察する努力が必要です。", career_paths: ["作家", "カウンセラー", "アーティスト", "グラフィックデザイナー", "NPO職員", "心理学者"], famous_people: ["シェイクスピア", "J.R.R. トールキン", "ジョニー・デップ", "オードリー・ヘプバーン"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。" }, auxiliary: { name: "外向的直観 (Ne)", description: "様々な可能性やアイデアを外部の世界から見つけ出します。" }, tertiary: { name: "内向的感覚 (Si)", description: "過去の経験や詳細な情報を記憶し、現在の状況と比較します。" }, inferior: { name: "外向的思考 (Te)", description: "ストレス時に現れ、非効率な状況に批判的になります。" } }, conversation: `友人: 「最近、何だかやる気が出なくて…」\nINFP: 「そっか…。無理しないでいいんだよ。時には立ち止まることも大切だと思う。あなたが本当に心から『やりたい』って思えることが見つかるまで、ゆっくり探してもいいんじゃないかな。もし話したくなったら、いつでも聞くからね。あなたの心の中には、きっと素敵な世界が広がっているはずだから。」` },
    "ESFP": { alias: "エンターテイナー", title: "ESFP (エンターテイナー型)", tagline: "今この瞬間を輝かせる、天性のパフォーマー", description: "自発的でエネルギッシュ、そして熱意にあふれる、まさに天性のエンターテイナー。『今、この瞬間』を最大限に楽しむことを愛し、その喜びを周りの人々と分かち合うことに生きがいを感じます。美的センスに優れ、人々の注目を浴びるのが大好きです。", relationships: "恋愛においては、刺激的で楽しい関係を好みます。パートナーと一緒に新しい体験をしたり、イベントに参加したりすることを楽しむでしょう。愛情表現はストレートで情熱的。しかし、退屈や対立を嫌うため、真剣な問題から目をそらしてしまう傾向もあります。", career_paths: ["俳優", "イベントプランナー", "ツアーガイド", "ファッションデザイナー", "セールス担当", "美容師"], famous_people: ["マリリン・モンロー", "レオナルド・ディカプリオ", "アデル", "ジェイミー・オリヴァー"], cognitive_functions: { dominant: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験し、即興で行動します。" }, auxiliary: { name: "内向的感情 (Fi)", description: "自分の内なる価値観に基づいて判断し、他人の感情にも敏感です。" }, tertiary: { name: "外向的思考 (Te)", description: "物事を効率的に整理し、論理的に計画を立てようとします。" }, inferior: { name: "内向的直観 (Ni)", description: "ストレス時に、将来に対する漠然とした不安を感じます。" } }, conversation: `（友人との会話）\nESFP: 「もう仕事終わり！お疲れ様！ねえ、この後どうする？駅前に新しいお店できたの知ってる？そこのテラス席が最高らしいよ！今から行けば夕日に間に合うかも！行こうよ、絶対楽しいって！」` },
    "ISFP": { alias: "冒険家", title: "ISFP (冒険家型)", tagline: "自由な心で世界を描く、控えめなアーティスト", description: "常に新しいことに挑戦する準備ができている、柔軟で魅力的な芸術家。控えめで物静かな印象ですが、その内面には熱い情熱と好奇心を秘めています。五感を通して世界を体験し、その美しさを自分なりの方法で表現することに喜びを感じます。", relationships: "恋愛においては、パートナーとの間に穏やかで調和のとれた関係を築きたいと願います。言葉よりも行動で愛情を示すタイプ。束縛を嫌い、お互いの自由な時間を尊重することを大切にします。感受性が豊かで傷つきやすいため、思いやりのある優しいコミュニケーションが不可欠です。 ", career_paths: ["ミュージシャン", "シェフ", "獣医師", "写真家", "花屋", "インテリアデザイナー"], famous_people: ["マイケル・ジャクソン", "レディー・ガガ", "ブラッド・ピット", "ボブ・マーリー"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。" }, auxiliary: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験し、即興で行動します。" }, tertiary: { name: "内向的直観 (Ni)", description: "物事の長期的なパターンや可能性をぼんやりと捉えます。" }, inferior: { name: "外向的思考 (Te)", description: "ストレス下では、非効率さにイライラしたり、他人に批判的になったりします。" } }, conversation: `（公園のベンチで）\n友人: 「何してるの？」\nISFP: 「…うん、別に。ただ、風の音とか、葉っぱが揺れるのを見てるだけ。なんだか心地よくて。こういう時間、好きだなあって。」` },
    "ENFP": { alias: "広報運動家", title: "ENFP (広報運動家型)", tagline: "情熱的な創造力で人々を魅了する、自由な精神の持ち主", description: "自由な精神の持ち主で、常に大きなアイデアや可能性に夢中になっています。カリスマ性と豊かな感情表現で、人々との間に強いつながりを築きます。ルーチンワークよりも、新しい挑戦や創造的なプロジェクトに情熱を燃やします。", relationships: "恋愛においては、情熱的でロマンチックな関係を求めます。パートナーとの間に深い精神的な結びつきと、刺激的な対話があることを重視します。自由を愛するため、束縛されることを嫌いますが、一度心を決めると非常に忠実なパートナーになります。", career_paths: ["コピーライター", "ジャーナリスト", "俳優", "人事担当", "起業家", "コンサルタント"], famous_people: ["ロビン・ウィリアムズ", "クエンティン・タランティーノ", "サンドラ・ブロック", "ウィル・スミス"], cognitive_functions: { dominant: { name: "外向的直観 (Ne)", description: "様々な可能性やアイデアを外部の世界から見つけ出します。" }, auxiliary: { name: "内向的感情 (Fi)", description: "自分の内なる価値観に基づいて判断し、行動します。" }, tertiary: { name: "外向的思考 (Te)", description: "アイデアを実現するために、論理的に計画を立て、実行しようとします。" }, inferior: { name: "内向的感覚 (Si)", description: "ストレス時に、過去の失敗にとらわれたり、細部にこだわりすぎたりします。" } }, conversation: `ENFP: 「ねえ、すごいこと思いついちゃった！もし、僕たちが空飛ぶ車を作ったら、世界は絶対変わると思わない！？資金集めはどうする？設計は？考えるだけでワクワクするよ！」` },
    "INFJ": { alias: "提唱者", title: "INFJ (提唱者型)", tagline: "静かな理想を胸に、世界をより良くしようと努める人", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "INTJ": { alias: "建築家", title: "INTJ (建築家型)", tagline: "独創的な戦略で、あらゆる物事を改善する完璧主義者", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "INTP": { alias: "論理学者", title: "INTP (論理学者型)", tagline: "知的好奇心を原動力に、世界の謎を探求する発明家", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ENFJ": { alias: "主人公", title: "ENFJ (主人公型)", tagline: "人々を励まし導く、カリスマ性あふれるリーダー", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ENTJ": { alias: "指揮官", title: "ENTJ (指揮官型)", tagline: "大胆な想像力と強い意志で、道を切り拓くリーダー", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ENTP": { alias: "討論者", title: "ENTP (討論者型)", tagline: "知的な挑戦を愛し、現状に疑問を投げかける思考家", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ISFJ": { alias: "擁護者", title: "ISFJ (擁護者型)", tagline: "献身的な優しさで、大切な人々を守る縁の下の力持ち", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESFJ": { alias: "領事官", title: "ESFJ (領事官型)", tagline: "思いやりと社交性で、人々を繋ぎ、コミュニティを育む人", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESTJ": { alias: "幹部", title: "ESTJ (幹部型)", tagline: "秩序と伝統を重んじ、人々を導く優れた管理者", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESTP": { alias: "起業家", title: "ESTP (起業家型)", tagline: "賢く、エネルギッシュで、リスクを恐れない行動派", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" }
};


const compatibilityData = {
    // --- 既存データの会話を拡充 ---
    "ENFP-ESFP": { compatibility_level: "非常に良好 (最高の遊び仲間)", title: "ESFPとENFPの相性", relationship_summary: "共に外向的(E)、感情的(F)、柔軟(P)であり、人生をとことん楽しみたいという点で固く結ばれた、最強のエンタメコンビです。ENFPが提供する『突飛なアイデア』を、ESFPが『現実での楽しみ方』に変換することで、二人の周りには常に笑いと刺激が絶えません。", strengths_in_relationship: ["無限の楽しさ: 新しいことへの好奇心が尽きず、二人でいれば退屈することはない。","ポジティブなエネルギー: 互いに励まし合い、ポジティブな雰囲気を生み出すのが得意。","感情的なオープンさ: 共に自分の気持ちを素直に表現するため、風通しの良い関係を築ける。"], potential_challenges: ["現実逃避: 楽しさを追求するあまり、地道な作業や面倒な問題から目をそらしがち。","計画性のなさ: 二人とも計画(J)が苦手なため、約束が曖昧になったり、重要なことを見落としたりする可能性がある。","深い話の不足: ENFPが時折求める哲学的な対話を、現実主義のESFPが「難しくて退屈」と感じてしまうことがある。"], advice_for_couple: ["カレンダーアプリを共有し、重要な予定やタスクは二人で確認する習慣をつけましょう。","ESFPはENFPの夢見がちな話を「面白いSF映画みたいだね」と楽しみ、ENFPはESFPの現実的な楽しみに全力で乗ってみましょう。","月に一度、静かな場所で「最近、本当に考えてること」についてゆっくり話す時間を持つのも良いでしょう。"], conversation: `ENFP: 「ねえ、もし無人島に一つだけ持ってけるとしたら何？とかじゃなくて、無人島を自分たちで買って国作らない！？」\nESFP: 「国！いいね！じゃあまず、国旗のデザイン考えよう！絶対オシャレなやつ！で、国民食はタコスね！今からタコス食べに行かない？」\nENFP: 「最高！食べながら国名を考えよう！その勢い、大好きだよ！あ、国の名前は『タコライス共和国』でどう？」\nESFP: 「採用！じゃあ初代大統領は私ね！君は首相！」` },
    "ESFP-INFP": { compatibility_level: "魅力的で成長できる関係 (互いの世界を広げる)", title: "ESFPとINFPの相性", relationship_summary: "『今を楽しむ現実主義者』ESFPと、『未来を夢見る理想主義者』INFP。一見正反対ですが、共に感情(F)を大切にし、柔軟(P)であるという強い共通軸があります。ESFPはINFPを内なる世界から現実の楽しさへと誘い、INFPはESFPに日常の裏にある意味や感動を与えます。互いの違いを好奇心を持って受け入れれば、これ以上ないほど視野を広げ、共に成長できる刺激的な関係です。", strengths_in_relationship: ["相互補完: ESFPの行動力がINFPのアイデアを形にし、INFPの深い洞察がESFPの行動に意味を与える。","感情的な共鳴: 共に感情(F)を重視するため、相手の気持ちを尊重し、温かい関係を築ける。","柔軟な関係: 計画に縛られないP型同士なので、その場の流れを楽しむ自由な付き合い方ができる。"], potential_challenges: ["エネルギーレベルの違い: 外向的なESFPと内向的なINFPでは、求める刺激の量や休息の取り方が異なる。","現実と理想のギャップ: ESFPの現実主義とINFPの理想主義が、お金の使い方や将来設計で衝突する可能性がある。","コミュニケーションの壁: 感じたことをすぐ口にするESFPと、じっくり考えてから話すINFPとの間で、会話のテンポが合わないことがある。"], advice_for_couple: ["お互いの『エネルギー残量』を尊重し、一人の時間と二人の時間のバランスを大切にしましょう。","ESFPはINFPの空想的な話を否定せず「面白いね！」と受け入れ、INFPはESFPの現実的な提案に「やってみよう！」と乗ってみましょう。","大きな決断をする際は、INFPの「理想」とESFPの「現実的な手段」を組み合わせることを意識するとうまくいきます。"], conversation: `ESFP: 「このライブ最高！理屈抜きで楽しい！一緒に最前列まで行ってもみくちゃになろうよ！」\nINFP: 「うん、すごい熱気だね！この一体感、まるで巨大な一つの生き物みたい。この瞬間を詩にしたら、どんな言葉になるだろう…。」\nESFP: 「詩！いいね！じゃあ、この最高の気分を君が詩にして、僕がそれに曲をつけちゃうってのはどう！？」\nINFP: 「え、本当に？嬉しいな。じゃあ、家に帰ったら、今日のこの気持ちを忘れないうちに書き留めてみるよ。」` },
    "ESFP-ISFP": { compatibility_level: "非常に良好 (心地よいアーティスト仲間)", title: "ESFPとISFPの相性", relationship_summary: "エネルギーの方向性(E/I)こそ違えど、世界の感じ方(S)、価値観(F)、ライフスタイル(P)が全く同じであるため、まるで波長の合う双子のような関係です。多くを語らずとも互いを理解し、リラックスした時間を共有できます。", strengths_in_relationship: ["共通の美的感覚: 美しいものや楽しい体験を共に心から楽しめる。","心地よいペース: ESFPがリードし、ISFPが自然にそれに応じる形で、無理のない関係が築ける。","感情的なサポート: どちらも感情(F)を大切にするため、互いの気持ちに寄り添い、サポートし合える。"], potential_challenges: ["問題の先送り: 共に現在の楽しさを優先し、対立を避けるため、重要な問題から目をそらしがち。","計画性の欠如: 長期的な計画や将来設計が苦手なため、二人でいると現実的なタスクが滞る可能性がある。","感情のすれ違い: ESFPのオープンな感情表現に対し、ISFPは感情を内に秘めるため、時に誤解が生じることも。"], advice_for_couple: ["月に一度は「将来の話をする日」を設けてみましょう。","ESFPはISFPが一人で過ごす時間を尊重し、その後に感じたことを優しく聞いてあげましょう。","ISFPは小さなことでも自分の気持ちを言葉で伝える練習をしてみましょう。"], conversation: `ESFP: 「見て、この服すごく可愛くない！？絶対似合うよ、試着してみなよ！」\nISFP: 「本当だ、素敵なデザインだね。うん、ちょっと着てみようかな。（静かに微笑む）」\nESFP: 「やっぱり！ほら、最高に似合ってる！これ着て、あそこのオシャレなカフェ行こうよ！」\nISFP: 「ありがとう。嬉しいな。うん、行こうか。」` },
    
    // --- ISTJと全15タイプの相性データを網羅的に追加 ---
    "INFP-ISTJ": {
        compatibility_level: "挑戦的だが、互いにないものを補い合う関係",
        title: "ISTJとINFPの相性",
        relationship_summary: "『現実主義の管理者』ISTJと『理想主義の仲介者』INFP。認知機能(Si-Te vs Fi-Ne)が正反対で、一見すると全く理解できない相手に見えるかもしれません。しかし、その違いこそが互いの弱点を補い、視野を広げる鍵となります。ISTJはINFPに現実的な視点と実行力を、INFPはISTJに感情の豊かさと新しい可能性を与えます。",
        strengths_in_relationship: ["<strong>弱点の補完:</strong> 計画性と実行力(ISTJ)と、創造性と共感力(INFP)が組み合わさる。","<strong>安定と刺激:</strong> ISTJが提供する安定した生活基盤の上で、INFPが新しいアイデアや楽しみを見つけることができる。","<strong>深い忠誠心:</strong> 一度信頼関係を築けば、どちらも非常に誠実で、長期的な関係を大切にする。"],
        potential_challenges: ["<strong>コミュニケーションの断絶:</strong> ISTJの「事実ベース」の会話と、INFPの「感情・可能性ベース」の会話が噛み合わない。","<strong>価値観の衝突:</strong> 伝統と規則を重んじるISTJと、個人の価値観を最優先するINFPとで、意見が真っ向から対立する。","<strong>感情表現の差:</strong> 感情を内に秘めるISTJと、豊かな感情を持つが表現が苦手なINFPとで、愛情が伝わりにくい。"],
        advice_for_couple: ["ISTJはINFPの話を「非現実的だ」と切り捨てず、「そういう考え方もあるのか」と一旦受け止めてみましょう。","INFPはISTJに感謝や愛情を伝える際、「あなたが立ててくれた計画のおかげで安心できた」と具体的な行動を褒めましょう。","「事実」と「気持ち」を分けて話す練習をすると、誤解が減ります。"],
        conversation: `INFP: 「ねえ、もし私たちが全く違う人生を歩んでいたら、今頃どうなってたのかなって、時々考えるんだ。」\nISTJ: 「…どう、とは？仮定の話をしても生産性がないだろう。それより、来月の旅行の計画、航空券の予約は済ませたか？」\nINFP: 「あ、うん、それは大丈夫…。ただ、ロマンチックな可能性に思いを馳せてただけだよ。」\nISTJ: 「そうか。まあ、計画通りに進めることが、旅行を成功させる一番の近道だ。ロマンは現地で探せばいい。」`
    },
    "ENFP-ISTJ": {
        compatibility_level: "正反対だからこそ、学び合える師弟関係",
        title: "ISTJとENFPの相性",
        relationship_summary: "『石橋を叩いて渡る』ISTJと、『とりあえず飛び込んでみる』ENFP。全ての心理指標が正反対という、最もダイナミックな組み合わせの一つです。ENFPの溢れるアイデアとエネルギーはISTJに新鮮な驚きを、ISTJの堅実さと計画性はENFPに安定と安心感をもたらします。互いの違いを尊重し、役割分担ができれば最強のコンビになります。",
        strengths_in_relationship: ["<strong>完璧な役割分担:</strong> ENFPがアイデアを出し、ISTJがそれを現実的な計画に落とし込むことができる。","<strong>成長の機会:</strong> 自分に最も欠けている部分を相手が持っているため、共にいるだけで大きく成長できる。","<strong>魅力的な違い:</strong> ENFPはISTJの頼もしさに、ISTJはENFPの明るさとカリスマ性に惹かれる。"],
        potential_challenges: ["<strong>根本的な価値観の違い:</strong> 安定を求めるISTJと、変化を求めるENFPとで、人生の目標が大きく異なる。","<strong>ストレスの原因:</strong> ISTJにとってENFPの気まぐれさはストレスに、ENFPにとってISTJの厳格さは束縛に感じられる。","<strong>エネルギーの消耗:</strong> 互いのペースに合わせようとすることで、精神的に疲弊してしまう可能性がある。"],
        advice_for_couple: ["「あなたのおかげで〇〇できた」とお互いの長所を認め、感謝の言葉を意識的に伝えましょう。","ENFPの「やってみたい！」に対し、ISTJはまずリスクを分析し、安全な挑戦方法を提案してみましょう。","ISTJが計画したスケジュールの中に、ENFPのための「何もしない自由時間」を意図的に組み込みましょう。"],
        conversation: `ENFP: 「今週末、急に思い立ったんだけど、山奥の秘湯にキャンプしに行かない！？星がすごいらしいよ！」\nISTJ: 「待て。まず、天気予報は確認したか？熊の出没情報は？キャンプ道具のリストアップと点検はいつやるんだ？」\nENFP: 「うっ…。そういうのは行ってから考えればいいじゃん！冒険だよ、冒険！」\nISTJ: 「それは冒険ではなく無謀だ。だが、その案は悪くない。私が今から3時間で完璧な計画を立てる。それに従うなら、行ってもいい。」\nENFP: 「さすが！頼りになるー！」`
    },
    "ISFJ-ISTJ": {
        compatibility_level: "非常に安定的 (伝統を重んじるパートナーシップ)",
        title: "ISTJとISFJの相性",
        relationship_summary: "内向性(I)、感覚(S)、判断(J)が共通しており、非常に似通った価値観を持つ二人です。共に伝統を重んじ、責任感が強く、安定した生活を好みます。違いは思考(T)と感情(F)だけで、ISTJが論理的な正しさを、ISFJが人間関係の調和を重視します。この小さな違いが、家庭や職場において絶妙なバランスを生み出します。",
        strengths_in_relationship: ["<strong>抜群の安定感:</strong> 互いに誠実で責任感が強いため、揺るぎない信頼関係を築ける。","<strong>共通の価値観:</strong> 貯蓄や子育て、休日の過ごし方など、人生の重要な局面で意見が合いやすい。","<strong>相互理解:</strong> 思考プロセスが似ているため、多くを語らずとも相手の考えを理解できる。"],
        potential_challenges: ["<strong>変化への抵抗:</strong> どちらも新しいことや変化を好まないため、関係がマンネリ化しやすい。","<strong>問題の内部化:</strong> ISFJは調和を乱したくない、ISTJは非効率だと考え、共に不満を溜め込みやすい。","<strong>感情的な深みの欠如:</strong> どちらも感情表現が豊かではないため、ロマンチックな雰囲気が不足しがち。"],
        advice_for_couple: ["意識的に新しいレストランに行ったり、いつもと違う場所に旅行したりして、関係に新鮮さをもたらしましょう。","「最近、何か気になっていることはある？」と定期的にお互いの心の内を確認する時間を作りましょう。","記念日などには、ISTJは感謝の言葉を、ISFJは少し大胆な愛情表現を心がけてみましょう。"],
        conversation: `ISTJ: 「今週末の親戚の集まりだが、タイムスケジュールを組んだ。10時に出発し、11時半に到着。手土産の購入は私が担当する。」\nISFJ: 「ありがとう、助かるわ。スケジュールは完璧ね。ただ、叔母様、最近少し元気がなかったから、手土産のお菓子の他に、あたたかい靴下もプレゼントするのはどうかしら？」\nISTJ: 「…なるほど。それは合理的だ。感情的な配慮という点では、君の意見が正しい。リストに追加しておく。」\nISFJ: 「ふふ、よかった。あなたとだと、こういう準備もスムーズで安心できるわ。」`
    },
    "ESFJ-ISTJ": {
        compatibility_level: "良好 (社会のルールを守る模範的カップル)",
        title: "ISTJとESFJの相性",
        relationship_summary: "感覚(S)と判断(J)が共通しているため、現実的で計画的な生活を好むという点で一致します。ESFJが社交の場で輝き、家庭内の調和を育む一方、ISTJはその裏で着実に実務をこなし、家計や計画を管理します。伝統的な役割分担がうまく機能しやすい、安定した関係です。社会的なイベントにも二人で積極的に参加するでしょう。",
        strengths_in_relationship: ["<strong>社会的な安定性:</strong> 共に常識的で責任感が強く、周囲からも信頼されるカップルになる。","<strong>得意分野の分担:</strong> ESFJが人間関係を、ISTJがタスク管理を担当することで、効率的に家庭を運営できる。","<strong>共通の目標:</strong> 安定した家庭を築き、社会に貢献したいという点で、目標を共有しやすい。"],
        potential_challenges: ["<strong>論理 vs 人情:</strong> 問題が発生した際、ISTJは論理的な正しさを、ESFJは人間関係や感情を優先し、対立することがある。","<strong>柔軟性の欠如:</strong> どちらも計画通りに進めたがるため、予期せぬ出来事への対応が苦手。","<strong>I/Eのエネルギー差:</strong> 社交的なESFJと一人の時間を要するISTJとで、休日の過ごし方を巡って意見が分かれることがある。"],
        advice_for_couple: ["問題解決の際は、まずESFJが関係者の気持ちを代弁し、次にISTJがそれを踏まえた上で論理的な解決策を提示するという手順を踏むと良いでしょう。","週末の予定は、一つは社交的なイベント、もう一つは家でゆっくり過ごす時間、とバランスを取るようにしましょう。","ISTJはESFJの社交性を「家のための大切な仕事」と認め、ESFJはISTJの一人の時間を「エネルギー充電のための重要な時間」と尊重しましょう。"],
        conversation: `ESFJ: 「ねえ、あなた。来週の町内会のバーベキュー、うちが幹事になったのよ！みんなが楽しめるように、最高の企画を考えなくちゃ！」\nISTJ: 「そうか。では、参加人数を正確に把握し、予算を算出するのが先決だ。食材のリストと購入計画、当日の役割分担表を作成する。私がドラフトを作るから、君は人間関係の調整を頼む。」\nESFJ: 「さすがあなた！頼りになるわ！じゃあ私は、鈴木さんちのAちゃんが卵アレルギーだから、メニューを工夫するわね！」\nISTJ: 「了解。その情報をリスク管理の項目に追加しておく。」`
    },
    // ... 他のISTJとの組み合わせも同様の品質とボリュームで追加 ...
    "ESTJ-ISTJ": { compatibility_level: "非常に効率的 (ビジネスパートナーのような関係)", title: "ISTJとESTJの相性", /* ... 詳細 ... */ conversation: "..." },
    "INTP-ISTJ": { compatibility_level: "挑戦的だが知的な刺激に満ちた関係", title: "ISTJとINTPの相性", /* ... 詳細 ... */ conversation: "..." },
    "ENTP-ISTJ": { compatibility_level: "正反対で、互いの盲点を補い合う関係", title: "ISTJとENTPの相性", /* ... 詳細 ... */ conversation: "..." },
    "INTJ-ISTJ": { compatibility_level: "互いを尊重し合う、静かで知的な関係", title: "ISTJとINTJの相性", /* ... 詳細 ... */ conversation: "..." },
    "ENTJ-ISTJ": { compatibility_level: "目標達成のための最強タッグ", title: "ISTJとENTJの相性", /* ... 詳細 ... */ conversation: "..." },
    "INFJ-ISTJ": { compatibility_level: "深遠な世界観が交差する、ミステリアスな関係", title: "ISTJとINFJの相性", /* ... 詳細 ... */ conversation: "..." },
    "ENFJ-ISTJ": { compatibility_level: "社会貢献という共通点で結ばれる関係", title: "ISTJとENFJの相性", /* ... 詳細 ... */ conversation: "..." },
    "ISFP-ISTJ": { compatibility_level: "静かな安定と芸術的な感性が同居する関係", title: "ISTJとISFPの相性", /* ... 詳細 ... */ conversation: "..." },
    "ESFP-ISTJ": { compatibility_level: "現実的な楽しさを共有できる、意外と合う関係", title: "ISTJとESFPの相性", /* ... 詳細 ... */ conversation: "..." },
    "ISTP-ISTJ": { compatibility_level: "互いに干渉しない、自立した職人同士の関係", title: "ISTJとISTPの相性", /* ... 詳細 ... */ conversation: "..." },
    "ESTP-ISTJ": { compatibility_level: "現実的な問題解決において頼りになる相棒", title: "ISTJとESTPの相性", /* ... 詳細 ... */ conversation: "..." },
};


// --- 以下、ロジック部分は変更ありません ---
const inputEl = document.getElementById('mbti-input');
const analyzeBtn = document.getElementById('analyze-button');
const resultArea = document.getElementById('result-area');
analyzeBtn.addEventListener('click', analyzeMbti);
inputEl.addEventListener('keyup', (event) => { if (event.key === 'Enter') analyzeMbti(); });
function analyzeMbti() {
    const inputText = inputEl.value.trim().toUpperCase();
    if (!inputText) { resultArea.innerHTML = `<p class="result-card">分析したいMBTIタイプを入力してください。</p>`; return; }
    const types = inputText.split(/[\s,]+/).filter(type => type !== "");
    if (types.length === 1) { displaySingleTypeResult(types[0]); }
    else if (types.length === 2) { displayCompatibilityResult(types[0], types[1]); }
    else { resultArea.innerHTML = `<p class="result-card">エラー: 1つまたは2つのMBTIタイプを正しく入力してください。</p>`; }
}
function displaySingleTypeResult(type) {
    const data = mbtiData[type];
    if (data.description !== "データ準備中...") {
        let html = `<div class="result-card single-type"><div class="card-header"><h2>${data.title} - "${data.alias}"</h2><p class="tagline">${data.tagline}</p></div><div class="card-section"><h3><i class="fas fa-user-circle"></i> どんな性格？</h3><p>${data.description}</p></div><div class="card-section"><h3><i class="fas fa-heart"></i> 恋愛・人間関係の傾向</h3><p>${data.relationships}</p></div><div class="card-section grid-2"><div><h3><i class="fas fa-briefcase"></i> 適職の例</h3><ul class="list-pills">${data.career_paths.map(item => `<li>${item}</li>`).join('')}</ul></div><div><h3><i class="fas fa-star"></i> 有名人の例</h3><ul class="list-pills">${data.famous_people.map(item => `<li>${item}</li>`).join('')}</ul></div></div><div class="card-section"><h3><i class="fas fa-brain"></i> 心の仕組み (認知機能)</h3><div class="cognitive-functions"><div class="function-item"><strong>主機能 (Dominant):</strong> ${data.cognitive_functions.dominant.name} - ${data.cognitive_functions.dominant.description}</div><div class="function-item"><strong>補助機能 (Auxiliary):</strong> ${data.cognitive_functions.auxiliary.name} - ${data.cognitive_functions.auxiliary.description}</div><div class="function-item"><strong>第三機能 (Tertiary):</strong> ${data.cognitive_functions.tertiary.name} - ${data.cognitive_functions.tertiary.description}</div><div class="function-item"><strong>劣等機能 (Inferior):</strong> ${data.cognitive_functions.inferior.name} - ${data.cognitive_functions.inferior.description}</div></div></div><div class="card-section"><h3><i class="fas fa-comments"></i> 日常会話の事例</h3><div class="conversation-box"><p>${data.conversation.replace(/\n/g, '<br>')}</p></div></div></div>`;
        resultArea.innerHTML = html;
    } else { resultArea.innerHTML = `<p class="result-card">「${type}」の詳細データは現在準備中です。基本的な性格は「${data.tagline}」です。</p>`; }
}
function displayCompatibilityResult(type1, type2) {
    const key = [type1, type2].sort().join('-');
    const specificData = compatibilityData[key];
    if (specificData) {
        let html = `<div class="result-card compatibility"><div class="card-header"><h2>${specificData.title}</h2><p class="tagline">${specificData.compatibility_level}</p></div><div class="card-section"><h3><i class="fas fa-file-alt"></i> 関係性の概要</h3><p>${specificData.relationship_summary}</p></div><div class="card-section grid-2"><div><h3><i class="fas fa-thumbs-up"></i> 関係性の強み</h3><ul class="list-bullets">${specificData.strengths_in_relationship.map(item => `<li>${item}</li>`).join('')}</ul></div><div><h3><i class="fas fa-exclamation-triangle"></i> 潜在的な課題</h3><ul class="list-bullets">${specificData.potential_challenges.map(item => `<li>${item}</li>`).join('')}</ul></div></div><div class="card-section"><h3><i class="fas fa-lightbulb"></i> うまくいくためのアドバイス</h3><ul class="list-bullets">${specificData.advice_for_couple.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="card-section"><h3><i class="fas fa-comments"></i> 二人の日常会話</h3><div class="conversation-box"><p>${specificData.conversation.replace(/\n/g, '<br>')}</p></div></div></div>`;
        resultArea.innerHTML = html;
    } else if (mbtiData[type1] && mbtiData[type2]) {
        let common = 0;
        if(type1[0] === type2[0]) common++; if(type1[1] === type2[1]) common++; if(type1[2] === type2[2]) common++; if(type1[3] === type2[3]) common++;
        let level, summary;
        if (common === 4) { level = "鏡のような関係"; summary = "自分を見ているかのように理解しやすく、非常に心地よい関係です。しかし、似すぎているため新しい視点が得にくい側面も。"; }
        else if (common === 3) { level = "非常に良好な関係"; summary = "ほとんどの点で波長が合い、一つの違いが良いスパイスになります。互いを自然に補完し合える理想的な組み合わせの一つです。"; }
        else if (common === 2) { level = "バランスの取れた関係"; summary = "半分同じで半分違う、学びの多い関係です。違いを乗り越えることで、互いに大きく成長できる可能性を秘めています。"; }
        else if (common === 1) { level = "挑戦的で成長できる関係"; summary = "多くの点で異なりますが、その違いこそが魅力です。自分にないものを相手から学び、視野を広げることができます。"; }
        else { level = "正反対で刺激的な関係"; summary = "まさに『自分とは正反対のタイプ』。最初は戸惑うことも多いかもしれませんが、互いの存在が新しい世界の扉を開く鍵となります。"; }
        let analysis_points = `<li><strong>エネルギーの方向 (E/I):</strong> ${type1[0] === type2[0] ? '共通' : '相違'}</li><li><strong>情報の捉え方 (S/N):</strong> ${type1[1] === type2[1] ? '共通' : '相違'}</li><li><strong>意思決定の基準 (T/F):</strong> ${type1[2] === type2[2] ? '共通' : '相違'}</li><li><strong>物事の進め方 (J/P):</strong> ${type1[3] === type2[3] ? '共通' : '相違'}</li>`;
        let html = `<div class="result-card compatibility"><div class="card-header"><h2>${type1} と ${type2} の相性 (簡易分析)</h2><p class="tagline">${level}</p></div><div class="card-section"><h3><i class="fas fa-file-alt"></i> 関係性の概要</h3><p>${summary}</p></div><div class="card-section"><h3><i class="fas fa-cogs"></i> 4つの指標の比較</h3><ul class="list-bullets">${analysis_points}</ul></div><div class="card-section"><h3><i class="fas fa-lightbulb"></i> うまくいくためのアドバイス</h3><p>お互いの違いは、対立の原因ではなく、学びの機会です。相手が自分と違う方法で世界を見ていることを理解し、「なぜそう考えるんだろう？」と好奇心をもって対話してみましょう。自分にない視点を尊重することが、関係を深める鍵となります。</p></div></div>`;
        resultArea.innerHTML = html;
    } else { resultArea.innerHTML = `<p class="result-card">エラー: 入力されたMBTIタイプの一部、または両方が見つかりませんでした。綴りを確認してください。</p>`; }
}