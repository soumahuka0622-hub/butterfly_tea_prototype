// Mock Data
const posts = [
    {
        id: 1,
        title: "量子物理学における意識の能動的役割と現実選択の力学的考察",
        excerpt: "量子力学的観測者問題と意識の物理学。量子物理学の黎明期より、観測者が物理的系に与える影響は、科学に於ける最も深遠且つ解決困難なパラドックスの一つとして君臨してきた...",
        date: "2026.02.04",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/buthurigaku-640x360.jpg",
        content: `
            <h2>量子力学的観測者問題と意識の物理学</h2>
            <p>量子物理学の黎明期より、観測者が物理的系に与える影響は、科学における最も深遠且つ解決困難なパラドックスの一つとして君臨してきた。伝統的な物理学の枠組み、特にアインシュタイン的な客観的世界観においては、物理的現実は観測者の有無に関わらず独立して存在すると仮定される。しかし、量子力学の標準解釈であるコペンハーゲン解釈は、波動関数の収束というプロセスを通じて、観測という行為が確率的な「重なり合い」の状態を単一の「現実」へと確定させることを示唆している。</p>
            <p>本報告の目的: 1998年前後に発生したとされる量子物理学者の学会からの追放劇を軸に、意識が量子確率を操作し、特定の現実を選択するという主張の妥当性を精査する。特に、プリンストン大学のEngineering Anomalies Research(PEAR)ラボによる28年間にわたる膨大な実験データ、ハートマス財団による心臓の電磁気学的研究、及び二重スリット実験を用いた意識干渉の証拠を統合し、「支配的周波数投射法(三日間周波数増幅法)」という概念が現代物理学の境界領域においてどのような位置付けにあるのかを論じる。</p>
            <p>この「観測」というプロセスの背後に人間の意識が介在しているのか、或いは単なる物理的な相互作用で十分であるのかという議論は、1990年代後半に至り、単なる哲学的な思索を超え、厳密な実験科学の領域へと移行した。意識が情報の処理主体としてだけでなく、物理的な現実の構築主体として機能するという「PEARの命題」は、従来の科学パラダイムに対する最も過激な挑戦の一つであり、そこには政治的、文化的、そして個人的な要因が複雑に絡み合っている。</p>

            <h2>1998年の学術的衝突:異端視された意識物理学の歴史的背景</h2>
            <p>1998年は、意識の研究が科学として成立するか否かを巡り、学術界における緊張が極限に達した年であった。この時期、物理的世界と精神的世界の境界を模索していた複数の研究者が、主流派の学術コミュニティからの事実上の排除を経験している。この「追放」の背景には、意識が物理的なランダム性に秩序をもたらすという主張が、既存の科学的客観性の根幹を揺るがすという危機感があった。</p>
        `
    },
    {
        id: 2,
        title: "あなたの「名字」、その由来は？知られざる日本の名字の歴史と、スピリチュアルな名前の秘密",
        excerpt: "はじめに私たちは皆、生まれた時から当たり前のように「名字」を名乗っています。自分に名字があることなんて、当たり前すぎて改めて考えたこともない、という方がほとんどではないでしょうか...",
        date: "2025.07.29",
        category: "スピリチュアル",
        image: "https://butterflyandtea.com/wp-content/uploads/2025/07/namae-640x360.jpg",
        content: `
            <h2>はじめに</h2>
            <p>私たちは皆、生まれた時から当たり前のように「名字」を名乗っています。自分に名字があることなんて、当たり前すぎて改めて考えたこともない、という方がほとんどではないでしょうか。</p>
            <p>しかし、あなたのその「名字」がいつ決まり、いつから使われるようになったのか、ご存知ですか？歴史ある名家や旧家出身の方でない限り、ご存知の方は少ないかもしれません。知っていたとしても、家族の言い伝え程度の情報ではないでしょうか。実は、あなたが今の名字であることには、確かな理由と深い歴史、そして由来があります。この記事では、普段何気なく使っている「名字」の歴史と、その成り立ちを解説します。</p>
            <p>更に、少し視点を変えて、スピリチュアルな観点から見た「個人の名前」の秘密にも迫ってみましょう。</p>

            <h2>1. 名字とは一体何？〜古代の「氏姓」と「名字」は別物だった〜</h2>
            <p>名字の歴史を紐解く前に、まず「名字」が何を指すのかを明確にしておきましょう。</p>
            <p>現代では「氏」「姓」「名字」は、ほとんど同じ意味で使われていますが、古代（平安時代以前）の日本では、これらは明確に区別されていました。</p>
        `
    },
    {
        id: 3,
        title: "現代社会における認知・環境学的「結界」の構築：非霊能力者の為の精神防衛理論と実践",
        excerpt: "序論：超常概念の科学的脱構築と現代的再定義。「悪霊」や「結界」といった概念は、歴史的には宗教的、あるいは呪術的な文脈で語られてきた...",
        date: "2026.02.03",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/kekkai-640x360.jpg",
        content: `
            <h2>序論：超常概念の科学的脱構築と現代的再定義</h2>
            <p>「悪霊」や「結界」といった概念は、歴史的には宗教的、あるいは呪術的な文脈で語られてきた。これらは特定の「霊能力」を持つ者にのみ操作可能な超常現象として扱われ、一般市民にとっては受動的な恐怖の対象、あるいは専門家による救済を待つべき領域とされてきた。しかし、現代の認知心理学、脳科学、および環境心理学の知見を総動員すれば、これらの現象は「個人の精神的恒常性を脅かす外部要因」および「それらから身を守る為の認知・環境制御」として合理的に説明が可能である。</p>
            <p>本報告書では、一般市民が特別な霊能力を前提とせず、日常的な行動や環境調整を通じて、いかにして「精神的結界」を構築し、現代的な「悪霊」――すなわち過度なストレス、ネガティブな情動の伝染、認知機能の低下を招く有害な社会的刺激――を防ぐべきかについて、学術的見地から網羅的に論じる。</p>
            <p>悪霊退散という儀式を「負のフィードバック・ループの遮断」と定義し、結界を「心理的境界線の確立と維持」と定義し直す事で、非霊能力者が実践可能な防衛戦略を体系化する。</p>

            <h2>住環境における物理的・生理的結界：清掃と整理整頓の科学的意義</h2>
            <p>住空間は、個人の精神状態を鏡のように反映する場であると同時に、個人の認知リソースに絶えず影響を与える外部入力の総体である。伝統的な「浄化」や「禊」が物理的な清掃を伴う事は、単なる象徴的な行為ではなく、脳内の神経伝達物質やストレスホルモンの制御に直結した合理的手段である事が、近年の研究により示唆されている。</p>
        `
    },
    {
        id: 4,
        title: "蛭子神の神話的変容と形而上学的必然性：古事記とEGSを横断する存在論的探求",
        excerpt: "序論：神話学と形而上学の交差点。蛭子神（ヒルコ）の謎多き存在— 古典と現代の形而上学的探求の必要性日本の古典神話の始原を記す『古事記』において、蛭子神は、創造神イザナギとイザナミの間に最初に生まれた子でありながら...",
        date: "2025.11.18",
        category: "神々の歴史",
        image: "https://butterflyandtea.com/wp-content/uploads/2025/11/77777-640x360.jpg",
        content: `
            <h2>序論：神話学と形而上学の交差点</h2>
            <h3>1.1. 蛭子神（ヒルコ）の謎多き存在— 古典と現代の形而上学的探求の必要性</h3>
            <p>日本の古典神話の始原を記す『古事記』において、蛭子神（ヒルコノカミ）は、創造神イザナギとイザナミの間に最初に生まれた子でありながら、その身体の不完全性の為に、葦船あしぶねに乗せられて流されるという特異な運命を背負った存在です。この原初的な拒絶と漂流の物語は、神話学においてしばしば「異形」の神、あるいは「境界」の神として位置付けられてきました。</p>
            <p>本報告書は、この蛭子神の神話的旅路を、形而上学的な前提、すなわち「神々は元々ヒューマノイドであり、神としての役割を担うことは『そうなるべくしてなった』という必然性による」という視点と統合し、現代のスピリチュアルなフレームワークであるエイブラハム・ヒックスの「感情の22段階（Emotional Guidance Scale, EGS）」を分析のレンズとして用いることを目的とします。</p>
            <p>蛭子神の「身体的不完全性」と「漂流」という神話的要素が、EGSの振動数におけるどのような感情的軌跡を描き、いかにして「必然的な神格化」へと至ったのかを詳細に分析します。</p>

            <h3>1.2. エイブラハム・ヒックスの感情の22段階（EGS）の基礎定義</h3>
            <p>EGSは、人間の感情状態を振動数の高低に基づいて22段階に分類したシステムであり、最も高い振動数がレベル1（喜び、感謝、愛、力強さ、自由）、最も低い振動数がレベル22（恐れ、悲嘆、絶望、無力感）に対応します。このスケールにおいて、感情は、自己の根源的なエネルギー（Source/ボルテックス）との整合性（Alignment）を示す指標であるとされます。</p>
            <p>特に重要なのは、スケールの中央付近に位置するレベル7の「満足（Contentment）」です。これは、上昇の螺旋が始まる場所、すなわちネガティブなベクトルからポジティブなベクトルへと感情の慣性が切り替わる臨界点として定義されています。蛭子神が経験したとされる「避けては通れない道だった」という状態は、このEGSにおける低振動状態（抵抗）と高振動状態（受容）の間の、構造的な転換点として捉えることが可能です。</p>
        `
    },
    {
        id: 5,
        title: "仁徳天皇陵古墳の巨大化要因に関する専門的検証：古代王権の政治的象徴と考古学の確立された見解",
        excerpt: "仁徳天皇陵古墳（大仙古墳）は、エジプトのギザの三大ピラミッドと並び称される世界最大級の墳墓であり、その巨大さは古代日本の権力の象徴として、古来より人々の関心を引きつけてきた...",
        date: "2025.11.16",
        category: "世界の歴史",
        image: "https://butterflyandtea.com/wp-content/uploads/2025/11/kohunn-640x360.jpg",
        content: `
            <h2>第I部：問いかけの検証と主流学説の確立（論理的基盤の構築）</h2>
            <h3>1. 序論：大仙古墳を巡る仮説と考古学の立場</h3>
            <p>仁徳天皇陵古墳にんとくてんのうりょうこふん（学術名称：大仙古墳だいせんこふん）は、エジプトのギザの三大ピラミッドと並び称される世界最大級の墳墓ふんぼであり、その巨大さは古代日本の権力の象徴として、古来より人々の関心を引きつけてきた。近年、この巨大な構造物の起源や目的について、「縄文人の子孫による築造」「旧約聖書の『マナの壺』を模した形態」「宇宙人との交信を目的とした」といった非主流の仮説が提唱されることがある。</p>
            
            <h4>1.1 提示された非主流仮説と結論の明示</h4>
            <p>これらの非主流仮説は、墳丘の規模や形状の異例さ、あるいは歴史の空白を埋める試みとして提示されているが、本報告書が依拠する考古学界および歴史学界の主流意見は、極めて明確な結論を提示している。結論から述べると、仁徳天皇陵古墳の巨大化は、5世紀前半におけるヤマト王権の極めて高度な中央集権化と、それを視覚的に示す為の政治的・儀礼的な動機によって完全に説明される。</p>
            <p>具体的に、「仁徳天皇陵（大仙古墳）があんなに大きいのは宇宙人と交信する為だ」という説や、その他の非主流説を裏付ける客観的な考古学的証拠は一切見つかっていない。本報告書は、この主流意見が成立する客観的な根拠を、規模の物理的データ、政治経済学的分析、そして古代の宇宙観に基づく儀礼設計の観点から詳細に検証する。</p>

            <h4>1.2 大仙古墳の学術的定義と世界遺産としての意義</h4>
            <p>大仙古墳は、大阪府堺市に位置する百舌鳥古墳群もず・ふるいちこふんぐんの一部であり、現在、宮内庁によって第16代仁徳天皇の陵として管理されている。この古墳群は2019年に「百舌鳥・古市古墳群」としてユネスコの世界遺産に登録された。その登録基準の一つは、「人類の歴史上重要な段階を例証する、巨大な墳墓の規模と荘厳さ」にある。これは、古墳が日本の国家形成期におけるヤマト王権の支配構造と社会統合の成熟を物理的に示す、普遍的な価値を持つことを公式に認めたものである。</p>
        `
    },
    {
        id: 6,
        title: "創作活動に於ける負の感情の昇華と「鏡の法則」に基づく現実反映のメカニズム",
        excerpt: "序論：表現者に於ける内的不一致と社会的表象の解離。表現活動、特にフリーホラーゲームという、制作者の深層心理や原初的な恐怖、倫理的境界線を揺さぶる表現が許容される媒体に於いて...",
        date: "2026.02.05",
        category: "意識の深層",
        image: "https://butterflyandtea.com/wp-content/uploads/2026/02/game-640x360.jpg",
        content: `
            <h2>序論：表現者に於ける内的不一致と社会的表象の解離</h2>
            <p>表現活動、特にフリーホラーゲームという、制作者の深層心理や原初的な恐怖、倫理的境界線を揺さぶる表現が許容される媒体に於いて、制作者が提示する作品世界と、その人物が現実社会で見せる振る舞いの間には、しばしば看過し得ない解離が観察される。非人道的、或いは残虐極まるグロテスクな描写を厭わない作品を世に送り出す一方で、ソーシャル・ネットワーキング・サービス（SNS）上では、職場での人間関係の軋轢に苛立ち、日常的な不満を赤裸々に吐露する作家の存在は、現代のデジタル創作環境に於いて特異な現象ではない。</p>
            <p>このような現象を単なる「仕事とプライベートの区別」として片付けることは容易であるが、心理学的、或いは形而上学的な視点に立てば、そこにはより深い因果関係が潜んでいる。本報告書では、負の感情が創作の原動力へと変換される「昇華」のプロセス、エイブラハムの「感情の22段階」に基づくエネルギーの変遷、更には「思考が現実を作る」というメタ物理的な言説と心理学的「投影」の相関に就いて、多角的な分析を行う。</p>

            <h2>精神分析学的視点：ダークな創作と「防衛機制」のダイナミクス</h2>
            <p>ホラーゲーム作家が描く、一見「人の心がない」と思わせる程過激な表現は、作家自身の本性が冷酷であることを示唆するものではない。寧ろ精神分析学的な観点からは、そのような表現は極めて高度な心理的適応の成果であると解釈される。</p>
        `
    },
    {
        id: 7,
        title: "あなたがもし「死役所」に行ったら？〜漫画の世界観から考える死後の真実〜",
        excerpt: "はじめに皆さんは、漫画「死役所」をご存知でしょうか？この作品は、死んだ人々が最初に訪れる場所が「あの世の市役所」であるという、衝撃的でユニークな設定が魅力です...",
        date: "2025.07.30",
        category: "スピリチュアル",
        image: "https://butterflyandtea.com/wp-content/uploads/2025/07/siyakusyo-640x360.jpg",
        content: `
            <h2>はじめに</h2>
            <p>皆さんは、漫画「死役所」をご存知でしょうか？この作品は、死んだ人々が最初に訪れる場所が「あの世の市役所」であるという、衝撃的でユニークな設定が魅力です。</p>
            <p>生前の行いによって、訪れる課が違ったり、そこで働く人々の境遇も様々。特に、死刑囚が亡くなった後、あの世の市役所で働かされているという設定は、読者に深い問いを投げかけます。この「死役所」の世界観と、私たちが普段耳にする「死後の世界」のスピリチュアルな解釈を比較しながら、死後の真実について一緒に考えてみませんか？</p>

            <h2>「死役所」が描く死刑囚の魂の行方と「反省」</h2>
            <p>「死役所」では、大きな罪を犯し、死刑になった人々が「シ役所」の職員として働いているという衝撃的な設定があります。これは、一般的な「死んだら終わり」という概念や、「天国か地獄か」という二元的な考え方とは一線を画しています。</p>
            <p>興味深いのは、多くの死刑囚が死後も生前の罪に対する反省がないと描かれている点です。彼らは自分勝手な理屈で自らの行為を正当化しようとし、その意識は死んでも尚変わらないかのように見えます。しかし、そんな彼らが「シ役所」で延々と働かされている状況は、単なる罰なのでしょうか？</n>

            <h2>周波数と引き寄せの法則が示す「死後の集まり」</h2>
            <p>スピリチュアルな世界では、「死後、魂は自身の持つ周波数と同じもの同士が集まる」という考え方がよく語られます。これは、ポジティブなエネルギーを持つ魂は明るい場所へ、ネガティブなエネルギーや未解決の感情を抱える魂は、それに相応しい場所や経験へと引き寄せられる、という「引き寄せの法則」と通じるものがあります。</p>
        `
    }
];

const categories = [
    "意識の深層", "スピリチュアル", "神々の歴史", "世界の歴史"
];

// App State
let currentPage = 'home';

// DOM Elements
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
