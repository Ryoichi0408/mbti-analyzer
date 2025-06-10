// script.js (情報量 大幅拡充版)

const mbtiData = {
    "INFP": { alias: "仲介者", title: "INFP (仲介者型)", tagline: "静かな情熱を燃やす、心優しき理想主義者", description: "詩人肌で、常に物事の善い面を探し求める真の理想主義者。自分の内なる価値観や信念に深く根ざしており、その独自の視点から世界を眺めます。非常に共感力が高く、他人の感情を自分のことのように感じ取ることができます。", relationships: "恋愛においては、理想的なパートナーシップと深い精神的な繋がりを求めます。表面的な関係には興味がなく、魂レベルでの理解者を求めています。一度心を開いた相手には非常に献身的ですが、自分の感情を言葉にするのが苦手なため、パートナーはINFPの心の機微を察する努力が必要です。", career_paths: ["作家", "カウンセラー", "アーティスト", "グラフィックデザイナー", "NPO職員", "心理学者"], famous_people: ["シェイクスピア", "J.R.R. トールキン", "ジョニー・デップ", "オードリー・ヘプバーン"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。何が『正しい』かを自分の心に問い続けます。" }, auxiliary: { name: "外向的直観 (Ne)", description: "様々な可能性やアイデアを外部の世界から見つけ出します。物事の裏にあるパターンや繋がりを捉えるのが得意です。" }, tertiary: { name: "内向的感覚 (Si)", description: "過去の経験や詳細な情報を記憶し、現在の状況と比較します。心地よいと感じた感覚を大切にします。" }, inferior: { name: "外向的思考 (Te)", description: "最も未発達な機能で、ストレス時に現れます。非効率な状況や、自分の価値観が否定されると、批判的になったり、頑固になったりします。" } }, conversation: `友人: 「最近、何だかやる気が出なくて…」\nINFP: 「そっか…。無理しないでいいんだよ。時には立ち止まることも大切だと思う。あなたが本当に心から『やりたい』って思えることが見つかるまで、ゆっくり探してもいいんじゃないかな。もし話したくなったら、いつでも聞くからね。あなたの心の中には、きっと素敵な世界が広がっているはずだから。」` },
    "ESFP": { alias: "エンターテイナー", title: "ESFP (エンターテイナー型)", tagline: "今この瞬間を輝かせる、天性のパフォーマー", description: "自発的でエネルギッシュ、そして熱意にあふれる、まさに天性のエンターテイナー。『今、この瞬間』を最大限に楽しむことを愛し、その喜びを周りの人々と分かち合うことに生きがいを感じます。美的センスに優れ、人々の注目を浴びるのが大好きです。", relationships: "恋愛においては、刺激的で楽しい関係を好みます。パートナーと一緒に新しい体験をしたり、イベントに参加したりすることを楽しむでしょう。愛情表現はストレートで情熱的。しかし、退屈や対立を嫌うため、真剣な問題から目をそらしてしまう傾向もあります。", career_paths: ["俳優", "イベントプランナー", "ツアーガイド", "ファッションデザイナー", "セールス担当", "美容師"], famous_people: ["マリリン・モンロー", "レオナルド・ディカプリオ", "アデル", "ジェイミー・オリヴァー"], cognitive_functions: { dominant: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験します。物理的な世界との関わりを楽しみ、即興で行動するのが得意です。" }, auxiliary: { name: "内向的感情 (Fi)", description: "自分の内なる価値観に基づいて判断します。自分が『良い』と感じることを大切にし、他人の感情にも敏感です。" }, tertiary: { name: "外向的思考 (Te)", description: "物事を効率的に整理し、論理的に計画を立てようとします。ストレスを感じると、この機能が過剰に働き、他人をコントロールしようとすることがあります。" }, inferior: { name: "内向的直観 (Ni)", description: "最も未発達な機能。将来に対する漠然とした不安を感じたり、物事の裏にあるネガティブな意味を考えすぎてしまったりすることがあります。" } }, conversation: `（友人との会話）\nESFP: 「もう仕事終わり！お疲れ様！ねえ、この後どうする？駅前に新しいお店できたの知ってる？そこのテラス席が最高らしいよ！今から行けば夕日に間に合うかも！行こうよ、絶対楽しいって！」` },
    "ISFP": { alias: "冒険家", title: "ISFP (冒険家型)", tagline: "自由な心で世界を描く、控えめなアーティスト", description: "常に新しいことに挑戦する準備ができている、柔軟で魅力的な芸術家。控えめで物静かな印象ですが、その内面には熱い情熱と好奇心を秘めています。五感を通して世界を体験し、その美しさを自分なりの方法で表現することに喜びを感じます。", relationships: "恋愛においては、パートナーとの間に穏やかで調和のとれた関係を築きたいと願います。言葉よりも行動で愛情を示すタイプ。束縛を嫌い、お互いの自由な時間を尊重することを大切にします。感受性が豊かで傷つきやすいため、思いやりのある優しいコミュニケーションが不可欠です。 ", career_paths: ["ミュージシャン", "シェフ", "獣医師", "写真家", "花屋", "インテリアデザイナー"], famous_people: ["マイケル・ジャクソン", "レディー・ガガ", "ブラッド・ピット", "ボブ・マーリー"], cognitive_functions: { dominant: { name: "内向的感情 (Fi)", description: "自分の価値観や感情を深く探求し、それが行動の基盤となります。何が『正しい』かを自分の心に問い続けます。" }, auxiliary: { name: "外向的感覚 (Se)", description: "五感を通して現在の環境を鮮やかに体験します。物理的な世界との関わりを楽しみ、即興で行動するのが得意です。" }, tertiary: { name: "内向的直観 (Ni)", description: "物事の長期的なパターンや可能性をぼんやりと捉えます。時に未来に対する予感のようなものを感じることがあります。" }, inferior: { name: "外向的思考 (Te)", description: "最も未発達な機能。ストレス下では、普段は気にしないような非効率さにイライラしたり、他人に批判的になったりします。" } }, conversation: `（公園のベンチで）\n友人: 「何してるの？」\nISFP: 「…うん、別に。ただ、風の音とか、葉っぱが揺れるのを見てるだけ。なんだか心地よくて。こういう時間、好きだなあって。」` }
};
const compatibilityData = {
    "ESFP-ISFP": { compatibility_level: "非常に良好 (心地よいアーティスト仲間)", title: "ESFPとISFPの相性", relationship_summary: "エネルギーの方向性(E/I)こそ違えど、世界の感じ方(S)、価値観(F)、ライフスタイル(P)が全く同じであるため、まるで波長の合う双子のような関係です。多くを語らずとも互いを理解し、リラックスした時間を共有できます。", strengths_in_relationship: ["<strong>共通の美的感覚:</strong> 美しいものや楽しい体験を共に心から楽しめる。","<strong>心地よいペース:</strong> ESFPがリードし、ISFPが自然にそれに応じる形で、無理のない関係が築ける。","<strong>感情的なサポート:</strong> どちらも感情(F)を大切にするため、互いの気持ちに寄り添い、サポートし合える。"], potential_challenges: ["<strong>問題の先送り:</strong> 共に現在の楽しさを優先し、対立を避けるため、重要な問題から目をそらしがち。","<strong>計画性の欠如:</strong> 長期的な計画や将来設計が苦手なため、二人でいると現実的なタスクが滞る可能性がある。","<strong>感情のすれ違い:</strong> ESFPのオープンな感情表現に対し、ISFPは感情を内に秘めるため、時に誤解が生じることも。"], advice_for_couple: ["月に一度は「将来の話をする日」を設けてみましょう。","ESFPはISFPが一人で過ごす時間を尊重し、その後に感じたことを優しく聞いてあげましょう。","ISFPは小さなことでも自分の気持ちを言葉で伝える練習をしてみましょう。"], conversation: `ESFP: 「見て見て、この夕日すっごくキレイじゃない！？最高にエモい！今すぐ写真撮らなきゃ！」\nISFP: 「…うん、本当に綺麗。ずっと見ていられるね。このオレンジと紫が混ざる感じ、絵の具で再現してみたいな。」\nESFP: 「それ最高じゃん！君が絵を描くところ、隣で見てていい？その後、この感動を祝して美味しいもの食べに行こうよ！」` }
};
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
    if (data) {
        let html = `<div class="result-card single-type"><div class="card-header"><h2>${data.title} - "${data.alias}"</h2><p class="tagline">${data.tagline}</p></div><div class="card-section"><h3><i class="fas fa-user-circle"></i> どんな性格？</h3><p>${data.description}</p></div><div class="card-section"><h3><i class="fas fa-heart"></i> 恋愛・人間関係の傾向</h3><p>${data.relationships}</p></div><div class="card-section grid-2"><div><h3><i class="fas fa-briefcase"></i> 適職の例</h3><ul class="list-pills">${data.career_paths.map(item => `<li>${item}</li>`).join('')}</ul></div><div><h3><i class="fas fa-star"></i> 有名人の例</h3><ul class="list-pills">${data.famous_people.map(item => `<li>${item}</li>`).join('')}</ul></div></div><div class="card-section"><h3><i class="fas fa-brain"></i> 心の仕組み (認知機能)</h3><div class="cognitive-functions"><div class="function-item"><strong>主機能 (Dominant):</strong> ${data.cognitive_functions.dominant.name} - ${data.cognitive_functions.dominant.description}</div><div class="function-item"><strong>補助機能 (Auxiliary):</strong> ${data.cognitive_functions.auxiliary.name} - ${data.cognitive_functions.auxiliary.description}</div><div class="function-item"><strong>第三機能 (Tertiary):</strong> ${data.cognitive_functions.tertiary.name} - ${data.cognitive_functions.tertiary.description}</div><div class="function-item"><strong>劣等機能 (Inferior):</strong> ${data.cognitive_functions.inferior.name} - ${data.cognitive_functions.inferior.description}</div></div></div><div class="card-section"><h3><i class="fas fa-comments"></i> 日常会話の事例</h3><div class="conversation-box"><p>${data.conversation.replace(/\n/g, '<br>')}</p></div></div></div>`;
        resultArea.innerHTML = html;
    } else { resultArea.innerHTML = `<p class="result-card">エラー: 「${type}」というMBTIタイプが見つかりませんでした。</p>`; }
}
function displayCompatibilityResult(type1, type2) {
    const key = [type1, type2].sort().join('-');
    const specificData = compatibilityData[key];
    if (specificData) {
        let html = `<div class="result-card compatibility"><div class="card-header"><h2>${specificData.title}</h2><p class="tagline">${specificData.compatibility_level}</p></div><div class="card-section"><h3><i class="fas fa-file-alt"></i> 関係性の概要</h3><p>${specificData.relationship_summary}</p></div><div class="card-section grid-2"><div><h3><i class="fas fa-thumbs-up"></i> 関係性の強み</h3><ul class="list-bullets">${specificData.strengths_in_relationship.map(item => `<li>${item}</li>`).join('')}</ul></div><div><h3><i class="fas fa-exclamation-triangle"></i> 潜在的な課題</h3><ul class="list-bullets">${specificData.potential_challenges.map(item => `<li>${item}</li>`).join('')}</ul></div></div><div class="card-section"><h3><i class="fas fa-lightbulb"></i> うまくいくためのアドバイス</h3><ul class="list-bullets">${specificData.advice_for_couple.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="card-section"><h3><i class="fas fa-comments"></i> 二人の日常会話</h3><div class="conversation-box"><p>${specificData.conversation.replace(/\n/g, '<br>')}</p></div></div></div>`;
        resultArea.innerHTML = html;
    } else if (mbtiData[type1] && mbtiData[type2]) {
        let common = 0;
        if(type1[0] === type2[0]) common++;
        if(type1[1] === type2[1]) common++;
        if(type1[2] === type2[2]) common++;
        if(type1[3] === type2[3]) common++;
        let level, summary;
        if (common === 4) { level = "鏡のような関係"; summary = "自分を見ているかのように理解しやすく、非常に心地よい関係です。しかし、似すぎているため新しい視点が得にくい側面も。"; }
        else if (common === 3) { level = "非常に良好な関係"; summary = "ほとんどの点で波長が合い、一つの違いが良いスパイスになります。互いを自然に補完し合える理想的な組み合わせの一つです。"; }
        else if (common === 2) { level = "バランスの取れた関係"; summary = "半分同じで半分違う、学びの多い関係です。違いを乗り越えることで、互いに大きく成長できる可能性を秘めています。"; }
        else if (common === 1) { level = "挑戦的で成長できる関係"; summary = "多くの点で異なりますが、その違いこそが魅力です。自分にないものを相手から学び、視野を広げることができます。"; }
        else { level = "正反対で刺激的な関係"; summary = "まさに『自分とは正反対のタイプ』。最初は戸惑うことも多いかもしれませんが、互いの存在が新しい世界の扉を開く鍵となります。"; }
        let analysis_points = `<li><strong>エネルギーの方向 (E/I):</strong> ${type1[0] === type2[0] ? '共通' : '相違'}</li><li><strong>情報の捉え方 (S/N):</strong> ${type1[1] === type2[1] ? '共通' : '相違'}</li><li><strong>意思決定の基準 (T/F):</strong> ${type1[2] === type2[2] ? '共通' : '相違'}</li><li><strong>物事の進め方 (J/P):</strong> ${type1[3] === type2[3] ? '共通' : '相違'}</li>`;
        let html = `<div class="result-card compatibility"><div class="card-header"><h2>${type1} と ${type2} の相性 (簡易分析)</h2><p class="tagline">${level}</p></div><div class="card-section"><h3><i class="fas fa-file-alt"></i> 関係性の概要</h3><p>${summary}</p></div><div class="card-section"><h3><i class="fas-cogs"></i> 4つの指標の比較</h3><ul class="list-bullets">${analysis_points}</ul></div><div class="card-section"><h3><i class="fas fa-lightbulb"></i> うまくいくためのアドバイス</h3><p>お互いの違いは、対立の原因ではなく、学びの機会です。相手が自分と違う方法で世界を見ていることを理解し、「なぜそう考えるんだろう？」と好奇心をもって対話してみましょう。自分にない視点を尊重することが、関係を深める鍵となります。</p></div></div>`;
        resultArea.innerHTML = html;
    } else { resultArea.innerHTML = `<p class="result-card">エラー: 入力されたMBTIタイプの一部、または両方が見つかりませんでした。</p>`; }
}