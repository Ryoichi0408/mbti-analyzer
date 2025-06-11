// script.js (真の最終・完全・動作保証版 - データ分離構造)

// --- グローバル変数 ---
let mbtiData = {};
let compatibilityData = {};
const resultArea = document.getElementById('result-area');
const analyzeBtn = document.getElementById('analyze-button');
const inputEl = document.getElementById('mbti-input');

// --- データの読み込み ---
// ページが読み込まれたら、まずデータファイルを非同期で読み込む
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('データファイルの読み込みに失敗しました。');
        }
        const data = await response.json();
        mbtiData = data.mbtiData;
        compatibilityData = data.compatibilityData;
        
        // データ読み込み後にボタンを有効化
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = 'ANALYZE';
        
    } catch (error) {
        resultArea.innerHTML = `<p class="result-card">エラー: ${error.message} アプリケーションを初期化できませんでした。</p>`;
        analyzeBtn.textContent = 'エラー';
    }
});

// --- イベントリスナー ---
analyzeBtn.addEventListener('click', analyzeMbti);
inputEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        analyzeMbti();
    }
});

// --- 主要な関数 ---
function analyzeMbti() {
    const inputText = inputEl.value.trim().toUpperCase();
    if (!inputText) {
        resultArea.innerHTML = `<p class="result-card">分析したいMBTIタイプを入力してください。</p>`;
        return;
    }
    const types = inputText.split(/[\s,]+/).filter(type => type !== "");

    if (types.length === 1) {
        displaySingleTypeResult(types[0]);
    } else if (types.length === 2) {
        displayCompatibilityResult(types[0], types[1]);
    } else {
        resultArea.innerHTML = `<p class="result-card">エラー: 1つまたは2つのMBTIタイプを正しく入力してください。</p>`;
    }
}

function displaySingleTypeResult(type) {
    const data = mbtiData[type];
    if (data && data.description !== "データ準備中...") {
        let html = `
            <div class="result-card single-type">
                <div class="card-header">
                    <h2>${data.title} - "${data.alias}"</h2>
                    <p class="tagline">${data.tagline}</p>
                </div>
                <div class="card-section"><h3><i class="fas fa-user-circle"></i> どんな性格？</h3><p>${data.description}</p></div>
                <div class="card-section"><h3><i class="fas fa-heart"></i> 恋愛・人間関係の傾向</h3><p>${data.relationships}</p></div>
                <div class="card-section grid-2">
                    <div><h3><i class="fas fa-briefcase"></i> 適職の例</h3><ul class="list-pills">${data.career_paths.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div><h3><i class="fas fa-star"></i> 有名人の例</h3><ul class="list-pills">${data.famous_people.map(item => `<li>${item}</li>`).join('')}</ul></div>
                </div>
                <div class="card-section">
                    <h3><i class="fas fa-brain"></i> 心の仕組み (認知機能)</h3>
                    <div class="cognitive-functions">
                        <div class="function-item"><strong>主機能 (Dominant):</strong> ${data.cognitive_functions.dominant.name} - ${data.cognitive_functions.dominant.description}</div>
                        <div class="function-item"><strong>補助機能 (Auxiliary):</strong> ${data.cognitive_functions.auxiliary.name} - ${data.cognitive_functions.auxiliary.description}</div>
                        <div class="function-item"><strong>第三機能 (Tertiary):</strong> ${data.cognitive_functions.tertiary.name} - ${data.cognitive_functions.tertiary.description}</div>
                        <div class="function-item"><strong>劣等機能 (Inferior):</strong> ${data.cognitive_functions.inferior.name} - ${data.cognitive_functions.inferior.description}</div>
                    </div>
                </div>
                <div class="card-section"><h3><i class="fas fa-comments"></i> 日常会話の事例</h3><div class="conversation-box"><p>${data.conversation.replace(/\n/g, '<br>')}</p></div></div>
            </div>`;
        resultArea.innerHTML = html;
    } else if (data) {
        resultArea.innerHTML = `<p class="result-card">「${type}」の詳細データは現在準備中です。基本的な性格は「${data.tagline}」です。</p>`;
    } else {
        resultArea.innerHTML = `<p class="result-card">エラー: 「${type}」というMBTIタイプが見つかりませんでした。</p>`;
    }
}

function displayCompatibilityResult(type1, type2) {
    if (!mbtiData[type1] || !mbtiData[type2]) {
        resultArea.innerHTML = `<p class="result-card">エラー: 入力されたMBTIタイプの一部、または両方が見つかりませんでした。綴りを確認してください。</p>`;
        return;
    }
    const key = [type1, type2].sort().join('-');
    const specificData = compatibilityData[key];
    if (specificData) {
        let html = `
            <div class="result-card compatibility">
                <div class="card-header"><h2>${specificData.title}</h2><p class="tagline">${specificData.compatibility_level}</p></div>
                <div class="card-section"><h3><i class="fas fa-file-alt"></i> 関係性の概要</h3><p>${specificData.relationship_summary}</p></div>
                <div class="card-section grid-2">
                    <div><h3><i class="fas fa-thumbs-up"></i> 関係性の強み</h3><ul class="list-bullets">${specificData.strengths_in_relationship.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div><h3><i class="fas fa-exclamation-triangle"></i> 潜在的な課題</h3><ul class="list-bullets">${specificData.potential_challenges.map(item => `<li>${item}</li>`).join('')}</ul></div>
                </div>
                <div class="card-section"><h3><i class="fas fa-lightbulb"></i> うまくいくためのアドバイス</h3><ul class="list-bullets">${specificData.advice_for_couple.map(item => `<li>${item}</li>`).join('')}</ul></div>
                <div class="card-section"><h3><i class="fas fa-comments"></i> 二人の日常会話</h3><div class="conversation-box"><p>${specificData.conversation.replace(/\n/g, '<br>')}</p></div></div>
            </div>`;
        resultArea.innerHTML = html;
    } else {
        resultArea.innerHTML = `<p class="result-card">エラー: 予期せぬ問題が発生しました。組み合わせ「${key}」のデータが見つかりません。管理者にお問い合わせください。</p>`;
    }
}