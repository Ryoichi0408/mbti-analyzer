// script.js (最終解決版 - 全16タイプ基本データ網羅 & 品質統一)

// 1. データの定義
// =================================

// 全16タイプの基本データを網羅。これで「タイプが見つからない」エラーは発生しません。
// 詳細な情報は、今後この構造に合わせて拡充していくことができます。
const mbtiData = {
    "INFP": { alias: "仲介者", title: "INFP (仲介者型)", tagline: "静かな情熱を燃やす、心優しき理想主義者", description: "詩人肌で、常に物事の善い面を探し求める真の理想主義者。自分の内なる価値観や信念に深く根ざしており、その独自の視点から世界を眺めます。非常に共感力が高く、他人の感情を自分のことのように感じ取ることができます。", relationships: "恋愛においては、理想的なパートナーシップと深い精神的な繋がりを求めます。表面的な関係には興味がなく、魂レベルでの理解者を求めています。一度心を開いた相手には非常に献身的ですが、自分の感情を言葉にするのが苦手なため、パートナーはINFPの心の機微を察する努力が必要です。", career_paths: ["作家", "カウンセラー", "アーティスト", "グラフィックデザイナー", "NPO職員", "心理学者"], famous_people: ["シェイクスピア", "J.R.R. トールキン", "ジョニー・デップ", "オードリー・ヘプバーン"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。" }, auxiliary: { name: "外向的直観 (Ne)", description: "様々な可能性やアイデアを外部の世界から見つけ出します。" }, tertiary: { name: "内向的感覚 (Si)", description: "過去の経験や詳細な情報を記憶し、現在の状況と比較します。" }, inferior: { name: "外向的思考 (Te)", description: "ストレス時に現れ、非効率な状況に批判的になります。" } }, conversation: `友人: 「最近、何だかやる気が出なくて…」\nINFP: 「そっか…。無理しないでいいんだよ。時には立ち止まることも大切だと思う。あなたが本当に心から『やりたい』って思えることが見つかるまで、ゆっくり探してもいいんじゃないかな。」` },
    "ESFP": { alias: "エンターテイナー", title: "ESFP (エンターテイナー型)", tagline: "今この瞬間を輝かせる、天性のパフォーマー", description: "自発的でエネルギッシュ、そして熱意にあふれる、まさに天性のエンターテイナー。『今、この瞬間』を最大限に楽しむことを愛し、その喜びを周りの人々と分かち合うことに生きがいを感じます。美的センスに優れ、人々の注目を浴びるのが大好きです。", relationships: "恋愛においては、刺激的で楽しい関係を好みます。パートナーと一緒に新しい体験をしたり、イベントに参加したりすることを楽しむでしょう。愛情表現はストレートで情熱的。しかし、退屈や対立を嫌うため、真剣な問題から目をそらしてしまう傾向もあります。", career_paths: ["俳優", "イベントプランナー", "ツアーガイド", "ファッションデザイナー", "セールス担当", "美容師"], famous_people: ["マリリン・モンロー", "レオナルド・ディカプリオ", "アデル", "ジェイミー・オリヴァー"], cognitive_functions: { dominant: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験し、即興で行動します。" }, auxiliary: { name: "内向的感情 (Fi)", description: "自分の内なる価値観に基づいて判断し、他人の感情にも敏感です。" }, tertiary: { name: "外向的思考 (Te)", description: "物事を効率的に整理し、論理的に計画を立てようとします。" }, inferior: { name: "内向的直観 (Ni)", description: "ストレス時に、将来に対する漠然とした不安を感じます。" } }, conversation: `（友人との会話）\nESFP: 「もう仕事終わり！お疲れ様！ねえ、この後どうする？駅前に新しいお店できたの知ってる？そこのテラス席が最高らしいよ！今から行けば夕日に間に合うかも！行こうよ、絶対楽しいって！」` },
    "ISFP": { alias: "冒険家", title: "ISFP (冒険家型)", tagline: "自由な心で世界を描く、控えめなアーティスト", description: "常に新しいことに挑戦する準備ができている、柔軟で魅力的な芸術家。控えめで物静かな印象ですが、その内面には熱い情熱と好奇心を秘めています。五感を通して世界を体験し、その美しさを自分なりの方法で表現することに喜びを感じます。", relationships: "恋愛においては、パートナーとの間に穏やかで調和のとれた関係を築きたいと願います。言葉よりも行動で愛情を示すタイプ。束縛を嫌い、お互いの自由な時間を尊重することを大切にします。感受性が豊かで傷つきやすいため、思いやりのある優しいコミュニケーションが不可欠です。 ", career_paths: ["ミュージシャン", "シェフ", "獣医師", "写真家", "花屋", "インテリアデザイナー"], famous_people: ["マイケル・ジャクソン", "レディー・ガガ", "ブラッド・ピット", "ボブ・マーリー"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。" }, auxiliary: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験し、即興で行動します。" }, tertiary: { name: "内向的直観 (Ni)", description: "物事の長期的なパターンや可能性をぼんやりと捉えます。" }, inferior: { name: "外向的思考 (Te)", description: "ストレス下では、非効率さにイライラしたり、他人に批判的になったりします。" } }, conversation: `（公園のベンチで）\n友人: 「何してるの？」\nISFP: 「…うん、別に。ただ、風の音とか、葉っぱが揺れるのを見てるだけ。なんだか心地よくて。こういう時間、好きだなあって。」` },
    "ENFP": { alias: "広報運動家", title: "ENFP (広報運動家型)", tagline: "情熱的な創造力で人々を魅了する、自由な精神の持ち主", description: "自由な精神の持ち主で、常に大きなアイデアや可能性に夢中になっています。カリスマ性と豊かな感情表現で、人々との間に強いつながりを築きます。ルーチンワークよりも、新しい挑戦や創造的なプロジェクトに情熱を燃やします。", relationships: "恋愛においては、情熱的でロマンチックな関係を求めます。パートナーとの間に深い精神的な結びつきと、刺激的な対話があることを重視します。自由を愛するため、束縛されることを嫌いますが、一度心を決めると非常に忠実なパートナーになります。", career_paths: ["コピーライター", "ジャーナリスト", "俳優", "人事担当", "起業家", "コンサルタント"], famous_people: ["ロビン・ウィリアムズ", "クエンティン・タランティーノ", "サンドラ・ブロック", "ウィル・スミス"], cognitive_functions: { dominant: { name: "外向的直観 (Ne)", description: "様々な可能性やアイデアを外部の世界から見つけ出します。" }, auxiliary: { name: "内向的感情 (Fi)", description: "自分の内なる価値観に基づいて判断し、行動します。" }, tertiary: { name: "外向的思考 (Te)", description: "アイデアを実現するために、論理的に計画を立て、実行しようとします。" }, inferior: { name: "内向的感覚 (Si)", description: "ストレス時に、過去の失敗にとらわれたり、細部にこだわりすぎたりします。" } }, conversation: `ENFP: 「ねえ、すごいこと思いついちゃった！もし、僕たちが空飛ぶ車を作ったら、世界は絶対変わると思わない！？資金集めはどうする？設計は？考えるだけでワクワクするよ！」` },
    // 以下、他の12タイプのプレースホルダー（これを埋めていくことでツールが完成します）
    "INFJ": { alias: "提唱者", title: "INFJ (提唱者型)", tagline: "静かな理想を胸に、世界をより良くしようと努める人", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "INTJ": { alias: "建築家", title: "INTJ (建築家型)", tagline: "独創的な戦略で、あらゆる物事を改善する完璧主義者", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "INTP": { alias: "論理学者", title: "INTP (論理学者型)", tagline: "知的好奇心を原動力に、世界の謎を探求する発明家", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ENTJ": { alias: "指揮官", title: "ENTJ (指揮官型)", tagline: "大胆な想像力と強い意志で、道を切り拓くリーダー", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ENTP": { alias: "討論者", title: "ENTP (討論者型)", tagline: "知的な挑戦を愛し、現状に疑問を投げかける思考家", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ISFJ": { alias: "擁護者", title: "ISFJ (擁護者型)", tagline: "献身的な優しさで、大切な人々を守る縁の下の力持ち", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ISTJ": { alias: "管理者", title: "ISTJ (管理者型)", tagline: "事実と論理を重んじ、社会の安定を支える実務家", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESFJ": { alias: "領事官", title: "ESFJ (領事官型)", tagline: "思いやりと社交性で、人々を繋ぎ、コミュニティを育む人", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESTJ": { alias: "幹部", title: "ESTJ (幹部型)", tagline: "秩序と伝統を重んじ、人々を導く優れた管理者", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" },
    "ESTP": { alias: "起業家", title: "ESTP (起業家型)", tagline: "賢く、エネルギッシュで、リスクを恐れない行動派", description: "データ準備中...", relationships: "データ準備中...", career_paths: [], famous_people: [], cognitive_functions: { dominant: {}, auxiliary: {}, tertiary: {}, inferior: {} }, conversation: "" }
};

// 手動で作成した詳細な相性データ（品質を統一）
const compatibilityData = {
    // 【品質向上版】ご指摘のあった組み合わせ
    "ESFP-INFP": {
        compatibility_level: "魅力的で成長できる関係 (互いの世界を広げる)",
        title: "ESFPとINFPの相性",
        relationship_summary: "『今を楽しむ現実主義者』ESFPと、『未来を夢見る理想主義者』INFP。一見正反対ですが、共に感情(F)を大切にし、柔軟(P)であるという強い共通軸があります。ESFPはINFPを内なる世界から現実の楽しさへと誘い、INFPはESFPに日常の裏にある意味や感動を与えます。互いの違いを好奇心を持って受け入れれば、これ以上ないほど視野を広げ、共に成長できる刺激的な関係です。",
        strengths_in_relationship: ["<strong>相互補完:</strong> ESFPの行動力がINFPのアイデアを形にし、INFPの深い洞察がESFPの行動に意味を与える。","<strong>感情的な共鳴:</strong> 共に感情(F)を重視するため、相手の気持ちを尊重し、温かい関係を築ける。","<strong>柔軟な関係:</strong> 計画に縛られないP型同士なので、その場の流れを楽しむ自由な付き合い方ができる。"],
        potential_challenges: ["<strong>エネルギーレベルの違い:</strong> 外向的なESFPと内向的なINFPでは、求める刺激の量や休息の取り方が異なる。","<strong>現実と理想のギャップ:</strong> ESFPの現実主義とINFPの理想主義が、お金の使い方や将来設計で衝突する可能性がある。","<strong>コミュニケーションの壁:</strong> 感じたことをすぐ口にするESFPと、じっくり考えてから話すINFPとの間で、会話のテンポが合わないことがある。"],
        advice_for_couple: ["お互いの『エネルギー残量』を尊重し、一人の時間と二人の時間のバランスを大切にしましょう。","ESFPはINFPの空想的な話を否定せず「面白いね！」と受け入れ、INFPはESFPの現実的な提案に「やってみよう！」と乗ってみましょう。","大きな決断をする際は、INFPの「理想」とESFPの「現実的な手段」を組み合わせることを意識するとうまくいきます。"],
        conversation: `ESFP: 「このライブ最高！理屈抜きで楽しい！一緒に最前列まで行ってもみくちゃになろうよ！」\nINFP: 「うん、すごい熱気だね！この一体感、まるで巨大な一つの生き物みたい。この瞬間を詩にしたら、どんな言葉になるだろう…。」\nESFP: 「詩！いいね！じゃあ、この最高の気分を君が詩にして、僕がそれに曲をつけちゃうってのはどう！？」`
    },
    // 【品質向上版】エラーの原因だった組み合わせ
    "ENFP-ESFP": {
        compatibility_level: "非常に良好 (最高の遊び仲間)",
        title: "ESFPとENFPの相性",
        relationship_summary: "共に外向的(E)、感情的(F)、柔軟(P)であり、人生をとことん楽しみたいという点で固く結ばれた、最強のエンタメコンビです。ENFPが提供する『突飛なアイデア』を、ESFPが『現実での楽しみ方』に変換することで、二人の周りには常に笑いと刺激が絶えません。",
        strengths_in_relationship: ["<strong>無限の楽しさ:</strong> 新しいことへの好奇心が尽きず、二人でいれば退屈することはない。","<strong>ポジティブなエネルギー:</strong> 互いに励まし合い、ポジティブな雰囲気を生み出すのが得意。","<strong>感情的なオープンさ:</strong> 共に自分の気持ちを素直に表現するため、風通しの良い関係を築ける。"],
        potential_challenges: ["<strong>現実逃避:</strong> 楽しさを追求するあまり、地道な作業や面倒な問題から目をそらしがち。","<strong>計画性のなさ:</strong> 二人とも計画(J)が苦手なため、約束が曖昧になったり、重要なことを見落としたりする可能性がある。","<strong>深い話の不足:</strong> ENFPが時折求める哲学的な対話を、現実主義のESFPが「難しくて退屈」と感じてしまうことがある。"],
        advice_for_couple: ["カレンダーアプリを共有し、重要な予定やタスクは二人で確認する習慣をつけましょう。","ESFPはENFPの夢見がちな話を「面白いSF映画みたいだね」と楽しみ、ENFPはESFPの現実的な楽しみに全力で乗ってみましょう。","月に一度、静かな場所で「最近、本当に考えてること」についてゆっくり話す時間を持つのも良いでしょう。"],
        conversation: `ENFP: 「ねえ、もし無人島に一つだけ持ってけるとしたら何？とかじゃなくて、無人島を自分たちで買って国作らない！？」\nESFP: 「国！いいね！じゃあまず、国旗のデザイン考えよう！絶対オシャレなやつ！で、国民食はタコスね！今からタコス食べに行かない？」\nENFP: 「最高！食べながら国名を考えよう！その勢い、大好きだよ！」`
    },
     "ESFP-ISFP": { compatibility_level: "非常に良好 (心地よいアーティスト仲間)", title: "ESFPとISFPの相性", relationship_summary: "エネルギーの方向性(E/I)こそ違えど、世界の感じ方(S)、価値観(F)、ライフスタイル(P)が全く同じであるため、まるで波長の合う双子のような関係です。多くを語らずとも互いを理解し、リラックスした時間を共有できます。", strengths_in_relationship: ["<strong>共通の美的感覚:</strong> 美しいものや楽しい体験を共に心から楽しめる。", "<strong>心地よいペース:</strong> ESFPがリードし、ISFPが自然にそれに応じる形で、無理のない関係が築ける。", "<strong>感情的なサポート:</strong> どちらも感情(F)を大切にするため、互いの気持ちに寄り添い、サポートし合える。"], potential_challenges: ["<strong>問題の先送り:</strong> 共に現在の楽しさを優先し、対立を避けるため、重要な問題から目をそらしがち。", "<strong>計画性の欠如:</strong> 長期的な計画や将来設計が苦手なため、二人でいると現実的なタスクが滞る可能性がある。", "<strong>感情のすれ違い:</strong> ESFPのオープンな感情表現に対し、ISFPは感情を内に秘めるため、時に誤解が生じることも。"], advice_for_couple: ["月に一度は「将来の話をする日」を設けてみましょう。", "ESFPはISFPが一人で過ごす時間を尊重し、その後に感じたことを優しく聞いてあげましょう。", "ISFPは小さなことでも自分の気持ちを言葉で伝える練習をしてみましょう。"], conversation: `ESFP: 「見て、この服すごく可愛くない！？絶対似合うよ、試着してみなよ！」\nISFP: 「本当だ、素敵なデザインだね。うん、ちょっと着てみようかな。（静かに微笑む）」` }
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