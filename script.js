// script.js (完全解決版)

// 1. データの定義
// =================================

const mbtiData = {
    "INFP": { alias: "仲介者", title: "INFP (仲介者型)", description: "詩人肌で、常に物事の善い面を探し求める真の理想主義者。", detailed_description: "INFPは内向的(I)、直観的(N)、感情的(F)、知覚的(P)な特性を持ちます。心は常に情熱と創造性で満ちており、独自の価値観を何よりも大切にします。", strengths: ["共感力と深い思いやり", "創造的で豊かな想像力", "強い価値観と理想主義"], weaknesses: ["過度に理想主義的", "自己批判が強い", "対立を避けすぎる"], conversation: `「もしこの世界からルールがなくなったら、人々はどうやって優しさを保つのかなって、時々考えるんだ。」` },
    "ENFJ": { alias: "主人公", title: "ENFJ (主人公型)", description: "人々を励まし、世界に良い影響を与えることを使命とする、天性のリーダー。", detailed_description: "ENFJは外向的(E)、直観的(N)、感情的(F)、判断的(J)な特性を持ちます。カリスマ性と共感力で人々を惹きつけ、コミュニティの成長に貢献します。", strengths: ["カリスマ性がある", "優れたコミュニケーション能力", "共感的で思いやりがある"], weaknesses: ["他人の問題を抱え込みすぎる", "批判に敏感", "時に理想主義的すぎる"], conversation: `「みんなで協力すれば、絶対にこのプロジェクトは成功するよ！さあ、一緒に頑張ろう！」` },
    "ISTP": { alias: "巨匠", title: "ISTP (巨匠型)", description: "大胆かつ実践的な思考の持ち主で、あらゆるものを探求し、作り出すことを楽しみます。", detailed_description: "ISTPは内向的(I)、感覚的(S)、思考的(T)、知覚的(P)な特性を持ちます。好奇心旺盛で、手を使って物事の仕組みを解明することに長けています。", strengths: ["実践的な問題解決能力", "危機的状況での冷静さ", "優れた観察眼"], weaknesses: ["長期的な計画が苦手", "感情表現が不得手", "ルールや束縛を嫌う"], conversation: `「これ、壊れてるな。ちょっと分解してみるか…なるほど、ここの接触不良だ。」` },
    "ESFP": { alias: "エンターテイナー", title: "ESFP (エンターテイナー型)", description: "自発的でエネルギッシュ、そして熱意にあふれる、まさに天性のエンターテイナー。", detailed_description: "ESFPは外向的(E)、感覚的(S)、感情的(F)、知覚的(P)な特性を持ちます。『今、この瞬間』を最大限に楽しむことを愛し、その喜びを周りと分かち合おうとします。", strengths: ["社交的で魅力的", "優れた美的感覚", "場の空気を明るくする"], weaknesses: ["長期的な計画が苦手", "衝動的", "対立を避ける"], conversation: `「ねえ、この後どこ行く？新しくできたカフェもいいし、カラオケもいいな！全部行っちゃう？」` },
    "ISFP": { alias: "冒険家", title: "ISFP (冒険家型)", description: "常に新しいことに挑戦する準備ができている、柔軟で魅力的な芸術家。", detailed_description: "ISFPは内向的(I)、感覚的(S)、感情的(F)、知覚的(P)な特性を持ちます。美的感覚に優れ、五感を通して世界を体験することを楽しみます。控えめながらも、内には熱い情熱を秘めています。", strengths: ["芸術的センスがある", "好奇心旺盛で柔軟", "周りに流されない"], weaknesses: ["計画性に欠ける", "自己表現が控えめ", "将来予測が苦手"], conversation: `「この夕日の色、すごく綺麗…。今の気持ちを絵に描いてみたいな。」` }
    // ... 他の11タイプもこの形式で追加してください ...
};

// 2タイプ間の相性データ（手動で詳細に作成したもの）
const compatibilityData = {
    "ENFJ-INFP": { title: "ENFJ と INFP の相性 (魂のパートナー)", analysis: "ENFJの『人々を導きたい』情熱と、INFPの『内なる理想』が共鳴します。ENFJはINFPを外の世界に導き、INFPはENFJに内省の機会を与える、最高の関係です。", conversation: `ENFJ: 「君のアイデア、素晴らしいよ！私が実現を手伝うから、一緒に挑戦しよう！」\nINFP: 「本当…？信じてくれるんだね。嬉しいな。」` },
    "ESFP-INFP": { title: "ESFP と INFP の相性 (互いの世界を広げる関係)", analysis: "『今を楽しむ現実主義者』ESFPと『未来を夢見る理想主義者』INFP。ESFPはINFPを外の世界に連れ出し、INFPはESFPに内面的な豊かさを与えます。互いの違いを尊重できれば、最高の刺激を与え合える関係です。", conversation: `ESFP: 「このライブ最高！一緒に踊ろうよ！」\nINFP: 「うん！この音楽を聴いていると、物語が浮かんできそうだよ。」` },
    // ▼▼▼ ご指摘の組み合わせも追加しました ▼▼▼
    "ESFP-ISFP": { title: "ESFP と ISFP の相性 (心地よいアーティスト仲間)", analysis: "外向的か内向的かの違いはありますが、感覚(S)・感情(F)・知覚(P)が共通しているため、非常に波長が合いやすい関係です。共に『今、ここ』を楽しみ、美しいものや楽しい体験を共有することに喜びを感じます。ESFPが会話の主導権を握り、ISFPがそれに心地よく乗る形で、リラックスした関係を築けるでしょう。", conversation: `ESFP: 「見て、この服すごく可愛くない！？絶対似合うよ、試着してみなよ！」\nISFP: 「本当だ、素敵なデザインだね。うん、ちょっと着てみようかな。（静かに微笑む）」` }
    // ... 他の重要な組み合わせをここに追加していく ...
};


// (DOM要素の取得は変更なし)
const inputEl = document.getElementById('mbti-input');
const analyzeBtn = document.getElementById('analyze-button');
const resultArea = document.getElementById('result-area');

// (イベントリスナーの設定は変更なし)
analyzeBtn.addEventListener('click', analyzeMbti);
inputEl.addEventListener('keyup', (event) => { if (event.key === 'Enter') analyzeMbti(); });

// (分析ロジックの関数は変更なし)
function analyzeMbti() {
    const inputText = inputEl.value.trim().toUpperCase();
    if (!inputText) { resultArea.innerHTML = `<p class="result-card">分析したいMBTIタイプを入力してください。</p>`; return; }
    const types = inputText.split(/[\s,]+/).filter(type => type !== "");
    if (types.length === 1) { displaySingleTypeResult(types[0]); } 
    else if (types.length === 2) { displayCompatibilityResult(types[0], types[1]); } 
    else { resultArea.innerHTML = `<p class="result-card">エラー: 1つまたは2つのMBTIタイプを正しく入力してください。</p>`; }
}

// (単独タイプの結果表示は変更なし)
function displaySingleTypeResult(type) {
    const data = mbtiData[type];
    if (data) {
        let html = `
            <div class="result-card">
                <h2>${data.title} - "${data.alias}"</h2>
                <p class="description">${data.description}</p>
                <h3>より詳しい特徴</h3><p>${data.detailed_description}</p>
                <div class="strengths-weaknesses">
                    <div class="strengths"><h4><i class="fas fa-check-circle"></i> 強み</h4><ul>${data.strengths.map(char => `<li>${char}</li>`).join('')}</ul></div>
                    <div class="weaknesses"><h4><i class="fas fa-exclamation-circle"></i> 弱み</h4><ul>${data.weaknesses.map(char => `<li>${char}</li>`).join('')}</ul></div>
                </div>
                <h3>日常会話の事例</h3><div class="conversation-box"><p>${data.conversation.replace(/\n/g, '<br>')}</p></div>
            </div>`;
        resultArea.innerHTML = html;
    } else {
        resultArea.innerHTML = `<p class="result-card">エラー: 「${type}」というMBTIタイプが見つかりませんでした。データが追加されるまでお待ちください。</p>`;
    }
}


// ▼▼▼【重要】ここが新しくなった相性結果表示関数です ▼▼▼
function displayCompatibilityResult(type1, type2) {
    const key = [type1, type2].sort().join('-');
    const specificData = compatibilityData[key];

    // 1. 手動で作成した詳細データがある場合、それを表示
    if (specificData) {
        let html = `
            <div class="result-card">
                <h2>${specificData.title}</h2>
                <h3>相性分析:</h3>
                <p>${specificData.analysis}</p>
                <h3>二人の日常会話:</h3>
                <div class="conversation-box">
                    <p>${specificData.conversation.replace(/\n/g, '<br>')}</p>
                </div>
            </div>`;
        resultArea.innerHTML = html;
    
    // 2. 詳細データはないが、両方のMBTIタイプが有効な場合
    } else if (mbtiData[type1] && mbtiData[type2]) {
        // 簡易的な相性分析を自動生成する
        let analysis = `<strong>${type1}</strong>と<strong>${type2}</strong>の組み合わせですね。詳細な分析は準備中ですが、基本的な特性から相性を見てみましょう。<br><br>`;
        
        // E/Iの比較
        if (type1[0] === type2[0]) {
            analysis += `・共に行動のエネルギー源が同じ(${type1[0]})なため、活動のペースが合いやすいでしょう。<br>`;
        } else {
            analysis += `・片方は外向的(E)、もう片方は内向的(I)です。互いにない視点を提供し、刺激を与え合える関係です。<br>`;
        }
        // S/Nの比較
        if (type1[1] === type2[1]) {
            analysis += `・共に情報の捉え方が同じ(${type1[1]})なため、話の前提が合いやすく、スムーズなコミュニケーションが期待できます。<br>`;
        } else {
            analysis += `・片方は現実的な感覚(S)型、もう片方は未来志向の直観(N)型です。現実的な視点と長期的なビジョンを補い合えます。<br>`;
        }
        // T/Fの比較
        if (type1[2] === type2[2]) {
            analysis += `・共に意思決定の基準が同じ(${type1[2]})なため、価値観の衝突が少なく、深い理解に至りやすいでしょう。<br>`;
        } else {
            analysis += `・片方は論理的な思考(T)型、もう片方は感情を重んじる感情(F)型です。論理と人間関係の両面から物事を考える助けになります。<br>`;
        }
        // J/Pの比較
        if (type1[3] === type2[3]) {
            analysis += `・共に物事の進め方やライフスタイルが同じ(${type1[3]})なため、ストレスが少なく、安定した関係を築きやすいです。<br>`;
        } else {
            analysis += `・片方は計画的な判断(J)型、もう片方は柔軟な知覚(P)型です。計画性と柔軟性を組み合わせることで、多くの問題に対応できます。<br>`;
        }

        let html = `
            <div class="result-card">
                <h2>${type1} と ${type2} の相性 (簡易分析)</h2>
                <h3>相性分析:</h3>
                <p>${analysis}</p>
                <h3>会話のヒント:</h3>
                <div class="conversation-box">
                    <p>お互いの違いは、対立の原因ではなく、学びの機会です。相手が自分と違う方法で世界を見ていることを理解し、好奇心をもって対話してみましょう。</p>
                </div>
            </div>`;
        resultArea.innerHTML = html;

    // 3. どちらかのタイプが無効な場合
    } else {
        resultArea.innerHTML = `<p class="result-card">エラー: 入力されたMBTIタイプの一部、または両方が見つかりませんでした。綴りを確認してください。</p>`;
    }
}