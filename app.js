// Mock Data
const posts = [
    {
        id: 1,
        title: "🦋 人気記事トップ20 🦋 〜スピリチュアル×哲学×神話で読み解く、魂の深層へ誘う記事たち〜",
        excerpt: "スピリチュアル×哲学×神話で読み解く、魂の深層へ誘う記事たち...",
        date: "2026.02.11",
        category: "日常",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/12_13_27-640x360.jpg",
        content: `
            <h2>🦋 人気記事トップ20 🦋</h2>
            <p>スピリチュアル×哲学×神話で読み解く、魂の深層へ誘う記事たち。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/articles-that-delve-into-the-depths-of-the-soul-through-spirituality-philosophy-and-mythology/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 2,
        title: "集団知性の進化的変遷と神経科学的基盤：現代社会における知性減退の構造的分析と高度な精神的結束への回帰",
        excerpt: "人類の進化史を鳥瞰した時、ホモ・サピエンスを他の霊長類や絶滅した人類種から分かつ決定的な要因は、個々の個体の「脳の大きさ」や「個人の知能（IQ）」そのものではなく...",
        date: "2026.02.09",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/ftog0-640x360.jpg",
        content: `
            <h2>集団知性の進化的変遷と神経科学的基盤</h2>
            <p>人類の進化史を鳥瞰した時、ホモ・サピエンスを他の霊長類や絶滅した人類種から分かつ決定的な要因は、個々の個体の「脳の大きさ」や「個人の知能（IQ）」そのものではなく、個体間で情報を共有し、蓄積し、発展させる能力、即ち「集団知性（Collective Intelligence）」にあることが進化人類学の視点から明らかになっている。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/collective-intelligence/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 3,
        title: "意識の多層的変容と現実創造の力学：分離から統合に至る精神的進化の体系的考察",
        excerpt: "人間意識の研究は、今や心理学、社会学、認知科学、そして量子物理学と形而上学が交差する極めて広範な領域へと発展している...",
        date: "2026.02.08",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/nesara-640x360.jpg",
        content: `
            <h2>意識の多層的変容と現実創造の力学</h2>
            <p>人間意識の研究は、今や心理学、社会学、認知科学、そして量子物理学と形而上学が交差する極めて広範な領域へと発展している。現代社会が直面している混迷は、単なる経済的・政治的な問題ではなく、人類の意識が「古い3次元システム」から「高次の統合状態」へと移行する過渡期の現れであると解釈出来る。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/the-multilayered-transformation-of-consciousness-and-the-dynamics-of-reality-creation/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 4,
        title: "エプスタイン・ネットワークと現代社会における権力構造の闇：特権階級の逸脱、オカルト的物語、および秘密共有システムの社会学的考察",
        excerpt: "序論：権力構造の本質を問うジェフリー・エプスタインを巡る一連の事件は、単なる一人の富豪による性犯罪の記録に留まらず...",
        date: "2026.02.06",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/ep-640x360.jpg",
        content: `
            <h2>エプスタイン・ネットワークと現代社会における権力構造の闇</h2>
            <p>序論：権力構造の本質を問うジェフリー・エプスタインを巡る一連の事件は、単なる一人の富豪による性犯罪の記録に留まらず、現代社会における極端な富の集積が招く倫理的崩壊、そしてそれに付随する形で拡散される超自然的陰謀論の交差地点として立ち現れている。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/the-epstein-network-and-the-dark-side-of-power-structures-in-contemporary-society/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 5,
        title: "創作活動における負の感情の昇華と「鏡の法則」に基づく現実反映のメカニズム：フリーホラーゲーム作家の心理構造に関する包括的研究",
        excerpt: "序論：表現者に於ける内的不一致と社会的表象の解離表現活動、特にフリーホラーゲームという、制作者の深層心理や原初的な恐怖、倫理的境界線を揺さぶる表現が許容される媒体に於いて...",
        date: "2026.02.05",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/game-640x360.jpg",
        content: `
            <h2>創作活動における負の感情の昇華と「鏡の法則」に基づく現実反映のメカニズム</h2>
            <p>序論：表現者に於ける内的不一致と社会的表象の解離表現活動、特にフリーホラーゲームという、制作者の深層心理や原初的な恐怖、倫理的境界線を揺さぶる表現が許容される媒体に於いて、制作者が提示する作品世界と、その人物が現実社会で見せる振る舞いの間には、しばしば看過し得ない解離が観察される。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/sublimation-of-negative-emotions-in-creative-activities/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 6,
        title: "量子物理学における意識の能動的役割と現実選択の力学的考察：1998年の学術的転換点と「支配的周波数投射法」の科学的妥当性",
        excerpt: "量子力学的観測者問題と意識の物理学量子物理学の黎明期より、観測者が物理的系に与える影響は、科学に於ける最も深遠且つ解決困難なパラドックスの一つとして君臨してきた...",
        date: "2026.02.04",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/buthurigaku-640x360.jpg",
        content: `
            <h2>量子物理学における意識の能動的役割と現実選択の力学的考察</h2>
            <p>量子力学的観測者問題と意識の物理学量子物理学の黎明期より、観測者が物理的系に与える影響は、科学に於ける最も深遠且つ解決困難なパラドックスの一つとして君臨してきた。伝統的な物理学の枠組み、特にアインシュタイン的な客観的世界観に於いては、物理的現実は観測者の有無に関わらず独立して存在すると仮定される。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/consciousness-in-quantum-physics/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 7,
        title: "現代社会における認知・環境学的「結界」の構築：非霊能力者の為の精神防衛理論と実践",
        excerpt: "序論：超常概念の科学的脱構築と現代的再定義「悪霊」や「結界」といった概念は、歴史的には宗教的、あるいは呪術的な文脈で語られてきた...",
        date: "2026.02.03",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/kekkai-640x360.jpg",
        content: `
            <h2>現代社会における認知・環境学的「結界」の構築</h2>
            <p>序論：超常概念の科学的脱構築と現代的再定義「悪霊」や「結界」といった概念は、歴史的には宗教的、あるいは呪術的な文脈で語られてきた。これらは特定の「霊能力」を持つ者にのみ操作可能な超常現象として扱われ、一般市民にとっては受動的な恐怖の対象、あるいは専門家による救済を待つべき領域とされてきた。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/constructing-cognitive-environmental-barriers-in-modern-society/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 8,
        title: "生成AIにおける対話の不協和と技術的限界：心理的受容性と構造的脆弱性の包括的分析",
        excerpt: "対話における感情的等冪性と社会的摩擦の欠如人間同士のコミュニケーションにおいて、同じ質問や話題を繰り返す行為は、聞き手に「退屈」や「いら立ち」といった負の感情を引き起こす社会的シグナルとして機能する...",
        date: "2026.02.02",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/ai-640x360.jpg",
        content: `
            <h2>生成AIにおける対話の不協和と技術的限界</h2>
            <p>対話における感情的等冪性と社会的摩擦の欠如人間同士のコミュニケーションにおいて、同じ質問や話題を繰り返す行為は、聞き手に「退屈」や「いら立ち」といった負の感情を引き起こす社会的シグナルとして機能する。この社会的摩擦は、会話の効率性を高め、情報の冗長性を排除する為のフィードバックループとして不可欠である。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/dissonance-in-conversations-and-technical-limitations-in-generative-ai/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    },
    {
        id: 9,
        title: "現代スピリチュアリティにおける神格称揚の構造的分析：神道伝統、世阿弥の審美眼、および「邪神」憑依の心理学的考察",
        excerpt: "序論：言霊の変容と現代に於ける霊能言説の危機現代の日本社会に於いて、SNSや動画プラットフォームを介した「霊能者」に依る自己発信は、かつてない規模で拡大している...",
        date: "2026.02.01",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/5566777-640x360.jpg",
        content: `
            <h2>現代スピリチュアリティにおける神格称揚の構造的分析</h2>
            <p>序論：言霊の変容と現代に於ける霊能言説の危機現代の日本社会に於いて、SNSや動画プラットフォームを介した「霊能者」に依る自己発信は、かつてない規模で拡大している。特に、皇祖神である天照大神や、自然界の強力なエネルギーの象徴である龍神との「直接的な繋がり」を公言する言説は、スピリチュアル市場に於ける強力なキャッチコピーとして機能している。</p>
            <p style="margin-top: 20px;">
                <a href="https://butterflyandtea.com/shinto-tradition-zeamis-aesthetic-sensibility-and-possession-by-evil-spirits/" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">
                    公式サイトで全文を読む <i class="ph ph-arrow-square-out"></i>
                </a>
            </p>
        `
    }
];

const categories = [
    "日常", "意識の深層", "スピリチュアル", "神々の歴史", "世界の歴史"
];

// App State
let currentPage = 'home';

// DOM Elements
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebarItems = document.querySelectorAll('.sidebar-item');
const bgmBtn = document.getElementById('bgm-btn');
const bgmAudio = document.getElementById('bgm-audio');
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Init
function init() {
    renderHome();
    setupNavigation();
    setupSidebar();
    setupBGM();
    setupSearch();
}

// Search
function setupSearch() {
    searchBtn.addEventListener('click', openSearch);
    closeSearchBtn.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
}

function openSearch() {
    searchOverlay.classList.add('open');
    searchInput.focus();
}

function closeSearch() {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

function handleSearch(query) {
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }

    const lowerQuery = query.toLowerCase();
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery)
    );

    renderSearchResults(filteredPosts);
}

function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-posts"><p>No results found.</p></div>';
        return;
    }

    const resultsHtml = results.map(post => `
        <div class="search-result-item" onclick="viewPostFromSearch(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="search-result-thumb" onerror="this.src='https://placehold.co/100x100?text=No+Image'">
            <div class="search-result-info">
                <div class="search-result-title">${post.title}</div>
                <div class="search-result-meta">${post.date} | ${post.category}</div>
            </div>
        </div>
    `).join('');

    searchResults.innerHTML = resultsHtml;
}

// Global expose for search result click
window.viewPostFromSearch = function (id) {
    closeSearch();
    viewPost(id);
};

// BGM
function setupBGM() {
    bgmBtn.addEventListener('click', toggleBGM);
}

function toggleBGM() {
    if (bgmAudio.paused) {
        bgmAudio.play().then(() => {
            bgmBtn.classList.add('active');
            bgmBtn.innerHTML = '<i class="ph ph-speaker-high"></i>';
        }).catch(error => {
            console.error("Audio play failed:", error);
            alert("Could not play audio. Please interact with the document first.");
        });
    } else {
        bgmAudio.pause();
        bgmBtn.classList.remove('active');
        bgmBtn.innerHTML = '<i class="ph ph-music-note"></i>';
    }
}

// Router/Navigation
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            handleNavigation(target);
        });
    });
}

function setupSidebar() {
    menuBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    sidebarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            handleNavigation(target);
            closeSidebar();
        });
    });
}

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function handleNavigation(target) {
    setActiveNav(target);
    if (target === 'home') renderHome();
    if (target === 'categories') renderCategories();
    if (target === 'about') renderAbout();
}

function setActiveNav(target) {
    navItems.forEach(item => {
        if (item.dataset.target === target) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Render Functions
function renderHome() {
    const heroPost = posts[0];
    const otherPosts = posts.slice(1);

    const otherPostsHtml = otherPosts.map(post => `
    <article class="post-item" onclick="viewPost(${post.id})">
    <img src="${post.image}" alt="${post.title}" class="post-thumb" onerror="this.src='https://placehold.co/100x100?text=No+Image'">
        <div class="post-info">
            <div class="post-meta">${post.date} | ${post.category}</div>
            <h3 class="post-title">${post.title}</h3>
        </div>
    </article>
    `).join('');

    mainContent.innerHTML = `
    <section class="hero-post" onclick="viewPost(${heroPost.id})">
            <img src="${heroPost.image}" alt="${heroPost.title}" class="hero-image" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            <div class="hero-content">
                <div class="post-meta">${heroPost.date} | ${heroPost.category}</div>
                <h2 class="hero-title">${heroPost.title}</h2>
                <p class="hero-excerpt">${heroPost.excerpt}</p>
            </div>
        </section>
        <div class="post-list">
            ${otherPostsHtml}
        </div>
    `;
    window.scrollTo(0, 0);
}

function renderPost(post) {
    mainContent.innerHTML = `
    <div class="article-detail">
            <button class="back-btn" onclick="renderHome()">
                <i class="ph ph-arrow-left"></i> Back to Home
            </button>
            <header class="article-header">
                <div class="article-meta-row">
                    <span>${post.date}</span>
                    <span>${post.category}</span>
                </div>
                <h1 class="article-title">${post.title}</h1>
            </header>
            <img src="${post.image}" alt="${post.title}" class="article-image" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            <div class="article-body">
                ${post.content}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function renderCategories() {
    const categoriesHtml = categories.map(cat => `
    <div class="category-card" onclick="viewCategory('${cat}')">
    <div class="category-name">${cat}</div>
        </div>
    `).join('');

    mainContent.innerHTML = `
    <div class="categories-view">
            <h2 class="section-title">Categories</h2>
            <div class="category-grid">
                ${categoriesHtml}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function renderCategoryPosts(categoryName) {
    const filteredPosts = posts.filter(post => post.category === categoryName);

    if (filteredPosts.length === 0) {
        mainContent.innerHTML = `
    <div class="categories-view">
                <button class="back-btn" onclick="renderCategories()">
                    <i class="ph ph-arrow-left"></i> Back to Categories
                </button>
                <h2 class="section-title">${categoryName}</h2>
                <div class="no-posts">
                    <p>No posts found in this category.</p>
                </div>
            </div>
    `;
    } else {
        const postsHtml = filteredPosts.map(post => `
    <article class="post-item" onclick="viewPost(${post.id})">
        <img src="${post.image}" alt="${post.title}" class="post-thumb" onerror="this.src='https://placehold.co/100x100?text=No+Image'">
            <div class="post-info">
                <div class="post-meta">${post.date} | ${post.category}</div>
                <h3 class="post-title">${post.title}</h3>
            </div>
        </article>
`).join('');

        mainContent.innerHTML = `
    <div class="post-list-view">
                <button class="back-btn" onclick="renderCategories()">
                    <i class="ph ph-arrow-left"></i> Back to Categories
                </button>
                <h2 class="section-title">${categoryName}</h2>
                <div class="post-list">
                    ${postsHtml}
                </div>
            </div>
    `;
    }
    window.scrollTo(0, 0);
}

function renderAbout() {
    mainContent.innerHTML = `
    <div class="article-detail">
            <h1 class="article-title">About</h1>
            <div class="article-body">
                <p><strong>Blog Title:</strong> with the dawn breaking</p>
                <p><strong>Theme:</strong> スピリチュアル×哲学×神話で読み解く現代の魂</p>
                
                <h3>Administrator</h3>
                <p><strong>Name:</strong> ma_（ま）</p>
                <p>趣味は絵を描くこと。</p>

                <h3>Publication</h3>
                <div style="text-align: center; margin: 20px 0;">
                    <img src="https://m.media-amazon.com/images/I/81rjGtj99IL._SX445_.jpg" alt="Book Cover" style="width: 150px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <p style="margin-top: 10px; font-size: 0.9rem;">
                        『蝶とお茶の間で考える、心と世界』<br>
                        <a href="https://www.amazon.co.jp/dp/B0FSF24GB4" target="_blank" style="color: var(--accent-purple);">Amazonで見る</a>
                    </p>
                </div>

                <p style="margin-top: 30px; font-size: 0.8rem; color: var(--text-secondary);">
                    This is a reader prototype for <a href="https://butterflyandtea.com/" target="_blank" style="color: var(--accent-purple);">butterflyandtea.com</a>.
                </p>
            </div>
        </div>
    `;
}

// Global expose for onclick handlers
window.viewPost = function (id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        renderPost(post);
    }
};

window.viewCategory = function (categoryName) {
    renderCategoryPosts(categoryName);
};

window.renderHome = renderHome;
window.renderCategories = renderCategories;

// Start
init();
