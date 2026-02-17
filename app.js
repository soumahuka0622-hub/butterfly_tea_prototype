// App State
let posts = [];
let categories = [];
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
async function init() {
    setupNavigation();
    setupSidebar();
    setupBGM();
    setupSearch();

    // Show loading state
    mainContent.innerHTML = '<div style="text-align:center; padding: 50px;"><p>Loading articles...</p></div>';

    await fetchPosts();
    renderHome();
}

// Fetch Data
async function fetchPosts() {
    try {
        const response = await fetch('https://butterflyandtea.com/wp-json/wp/v2/posts?_embed&per_page=10');
        const data = await response.json();

        // 重複を削除する魔法のコード
        const uniqueData = data.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
        posts = uniqueData.map(post => {
            // Extract category
            const categoryTerm = post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0]
                ? post._embedded['wp:term'][0][0].name
                : 'Uncategorized';



            // Extract image
            const imageUrl = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]
                ? post._embedded['wp:featuredmedia'][0].source_url
                : 'https://placehold.co/600x400?text=No+Image';

            // Format date (YYYY-MM-DDTHH:mm:ss -> YYYY.MM.DD)
            const dateObj = new Date(post.date);
            const dateStr = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

            return {
                id: post.id,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...', // Strip HTML from excerpt
                date: dateStr,
                category: categoryTerm,
                image: imageUrl,
                content: post.content.rendered,
                link: post.link
            };
        });

        // Manual Injection of New Article
        const manualPost = {
            id: 99999,
            title: "宿命論的予測から主体的創造へ：占術における「的中」のパラドックスと自己救済の深層心理学的研究",
            excerpt: "予測の枠組みを超越した「変容の伴走者」としての新しい占い師像。占術が提供する最も直接的な価値が「予測の正確性」にあるという通俗的な言説に対し、心理学的な視点から「的中」のパラドックスを考察する。",
            date: "2026.02.17",
            category: "意識の深層",
            image: "https://butterflyandtea.com/wp-content/uploads/2026/02/auuuyuu.jpg",
            link: "https://butterflyandtea.com/the-paradox-of-accuracy-in-divination/",
            content: `
                <h2>序論：占術における「的中」の多義的機能</h2>
                <p>占術の歴史は、人類が不確実な未来に対して抱いてきた根源的な不安の歴史と表裏一体である。古来より占い師には、天体の運行、亀甲の割れ目、あるいは象徴的なカードの配列から「隠された真実」を読み解き、来るべき事象を言い当てる能力、すなわち「的中」が求められてきた。「占い師は当ててなんぼ」という通俗的な言説は、占術が提供する最も直接的な価値が「予測の正確性」にあることを示唆している。</p>
                <p>しかし、心理学的な視点からこの現象を解剖すると、的中という事象は単なる未来予知に留まらず、相談者の内面的な「統制の所在（Locus of Control）」や、その時点での「感情レベル」と密接に連動していることが明らかになる。</p>
                <p>本報告では、エイブラハムが提唱した「感情の22段階」の理論を軸に、何故特定の精神状態において占術の的中率が高まり、逆に相談者が「自己救済」を果たし高い視座を獲得した際に占いが当たらなくなるのかというパラドックスを考察する。</p>
                <p>そこには、決定論的な未来を生きる受動的な自己から、自由意志によって現実を書き換える能動的な自己への変容プロセスが隠されている。最終的には、予測という枠組みを超越した「変容の伴走者」としての新しい占い師像を提示し、現代における占術の再定義を試みる。</p>

                <h2>第1章：的中率と心理的決定論の相関</h2>
                <p>占いが「当たる」という現象が成立する為には、個人の行動や運命の流れにある程度の規則性、すなわち「予測可能性」が存在しなければならない。心理学における行動主義的側面から見れば、人間は特定の刺激に対して特定の反応を返す「習慣の生き物」である。この反復的なパターンが強固であればあるほど、統計的あるいは象徴的な予測は容易になる。</p>

                <h3>1.1 「当ててなんぼ」という期待の正体</h3>
                <p>相談者が占い師に的中を求める背景には、自らの人生に対する「外的統制感」の優位がある。外的統制感とは、自分の人生に起こる出来事は自分自身の力（能力や努力）ではなく、運、チャンス、強力な他者、あるいは運命といった外部の要因によって決定されるという信念である。</p>
                <p>この状態にある相談者に取って、未来は「自ら切り拓くもの」ではなく「あらかじめ決まっているもの」であり、それを事前に知ることこそが唯一の防衛策となる。占い師が現状や過去を言い当てた際、相談者は強烈なカタルシスと信頼を抱く。これは、自分の内面にある言語化されない苦しみや、混沌とした状況に「名前」が与えられ、秩序がもたらされたと感じるからである。</p>
                <p>この段階において、「当てる」という行為は、相談者と占い師の間に強力なラポール（信頼関係）を形成する為の不可欠な儀式として機能している。</p>

                <h3>1.2 予測可能性の心理的基盤</h3>
                <p>人間が予測可能な状態にある時、その精神構造には一定の「硬直性」が見られる。ユング心理学の観点からは、これは「コンプレックス（感情に帯電した複合体）」によって意識が支配され、無意識的な反応パターンを繰り返している状態と言える。</p>
                <p>意識が受動的であればあるほど、未来の軌道は物理法則に近い因果律に従う為、的中率は理論的に高まる。逆に、意識が創造的な段階に移行すると、予測可能性は著しく低下する。</p>

                <h2>第2章：エイブラハムの感情階層と未来の分岐点</h2>
                <p>エイブラハムが提唱した「感情の22段階」は、人間の意識レベルを22の周波数帯域として整理したものである。この理論によれば、感情の状態がその個人の「波動」を決定し、それに見合った現実が引き寄せられる。</p>

                <h3>2.1 中間的な感情段階における的中率の高さ</h3>
                <p>相談者が「8. 退屈」から「15. 責める気持」程度の中間的な感情段階にいる時、占いは最も当たりやすいとされる。この領域は、強い絶望感からは脱しているものの、自らの人生を情熱的に創造するまでには至っていない「停滞の領域」である。</p>
                <p>この段階にいる人々は、日々のルーチンに従い、社会的な規範や過去の成功体験（あるいは失敗体験）に縛られた選択を行う傾向がある。彼等の未来は、既存のデータの延長線上にあり、大きな飛躍や予期せぬ転換が起こりにくい。したがって、星の配置や数秘的なサイクル、タロットの示す象徴的な流れが、其のまま現実の事象として結実しやすいのである。</p>

                <h3>2.2 低位の感情と「破壊的的中」</h3>
                <p>一方で、「16. 怒り」から「22. 無力感」という低い感情段階にある場合、未来は破壊的なパターンとして的中することが多い。ここでの的中は、相談者の「自己成就的予言」としての側面が強くなる。</p>
                <p>占い師に「悪いことが起こる」と言われ、その無力感に同調することで、無意識のうちにその悪い結果を引き寄せる行動を取ってしまうのである。これは学習性無力感に基づく行動パターンであり、予測可能性は高いものの、精神的健康という観点からは極めて危険な状態である。</p>

                <h3>2.3 感情の階層と予測可能性の相関モデル</h3>
                <p>感情段階を E（1が最高、22が最低）、未来の予測可能性（的中率のポテンシャル）を P とすると、その関係は単純な線形ではなく、中間領域でピークを迎える正規分布に近い形を取ると推測される。</p>
                <p>感情が極端に高い（1〜7）場合、自由意志による介入が最大化される為、予測可能性 P は最小値に近付く。逆に、自暴自棄的行動や外部介入が入りやすい極端に低い場合も、定型的な占術の枠を超えた変動が生じうる。</p>

                <h2>第3章：自己救済と内的統制への移行</h2>
                <p>「自分で自分を救う」というプロセスは、心理学的には「外的統制」から「内的統制」への劇的なシフトを意味する。相談者が「自分の人生は自分の選択によって作ることが出来る」という確信を得たとき、占術との関係性は根本から変容する。</p>

                <h3>3.1 「高い視座」の獲得と予測の無効化</h3>
                <p>相談者が精神的な成長を遂げ、エイブラハムの階層における上位（1. 喜び、感謝、愛、自由）に達すると、彼等は「ソース（源）」と直結した状態となる。この状態では、個人の意志と宇宙的な流れが調和し、因果律に基づいた「定まった未来」を自らの手で書き換える力が働く。</p>
                <p>高い視座を持つ者は、占術の結果を「絶対的な予言」として受け取るのではなく、一つの「可能性の提示」として相対化する。例えば、占いで「困難な時期」と出たとしても、それを「成長の為のトレーニング期間」として再定義し、前向きな行動によってその影響を最小化、あるいはプラスに転換してしまう。</p>
                <p>このように、主体的な意味付け（リフレーミング）によって未来の性質其のものを変容させてしまう為、従来の「当て物」としての占いは的中しなくなるのである。</p>

                <h3>3.2 自己救済の心理的プロセス：物語の紡ぎ直し</h3>
                <p>自己救済とは、過去のトラウマや親、社会から押し付られた「他人の物語」を解体し、自分自身の「真実の物語」を紡ぎ直す作業である。カウンセリングにおいて行われる「物語の再構築」は、以下のステップで進められる。</p>
                <ol>
                    <li><strong>気付き</strong>：他人の価値観を鵜呑みにし、受動的に生きている現状を認識する。</li>
                    <li><strong>感情の荷下ろし</strong>：抑圧してきた怒りや悲しみを表現し、エネルギーを解放する。</li>
                    <li><strong>内省（みつめる）</strong>：深い部分にある自分の真の願いや声に耳を澄ませる。</li>
                    <li><strong>主体的な選択</strong>：「私はこうありたい」という意志に基づき、具体的な行動を選択する。</li>
                </ol>
                <p>このプロセスを経た個人は、もはや「占われる対象」ではなくなる。彼等は自らの人生の「作者（オーサー）」となり、権威を自分自身に取り戻す（エンパワメント）。占い師が「当たらなくなった」と嘆く時、それは実は、その相談者が真の意味で自立したことを示す、最高の成功報酬なのである。</p>
                
                <h2>第4章：ユング心理学によるシンクロニシティと投影の再解釈</h2>
                <p>占いが何故当たるのか、そして何故当たらなくなるのかを理解する為には、カール・ユングの「シンクロニシティ（共時性）」と「投影（プロジェクション）」の概念が不可欠である。</p>

                <h3>4.1 無意識の外部化としての占術</h3>
                <p>占いの現場で起こっていることは、相談者の無意識下にある内容が、カードや星という外部の象徴に「投影」されるプロセスである。相談者が「当たる」と感じるのは、自分でも気付いていなかった本音や影（シャドウ）が、占いの結果という鏡を通じて可視化された瞬間である。</p>
                <p>的中とは、予言が的中したのではなく、「無意識の可視化」に成功したことを意味する。ユングによれば、シンクロニシティとは「内面的な出来事（心）」と「外面的な出来事（現実）」が、因果関係を介さずに「意味」によって結び付く現象である。</p>

                <h3>4.2 意識の拡張と投影の解消</h3>
                <p>相談者の視座が高まると、自らの内面を外部に投影する必要がなくなる。メタ認知能力が向上し、自分の中にある葛藤や欲求を直接的に観察し、統合出来るようになると、外部のシンボル（占い）に答えを求める動機が薄れる。</p>
                <p>この段階に達した人に取って、シンクロニシティは「驚くべき偶然」ではなく、自らの意図と現実が共鳴する「日常的な現象」へと変化する。彼等は、占いの結果を見て「何故これが当たったのか」と驚く代わりに、「今の自分の状態がこのカードに反映されているのは当然だ」と考え、それを次の行動の材料として淡々と処理するようになる。</p>
                <p>このように、占いを「絶対的な指針」から「便利なツール」へと格下げすることが、自己救済を果たした者の特徴である。</p>

                <h2>第5章：占い師の存在意義の変容：OracleからCompanionへ</h2>
                <p>相談者が自己救済を果たし、占いが「当たらなくなる」ことが最終的なゴールであるとするならば、占い師という職業はどのような存在意義を持つべきか。ここでは、従来の「当てること」を至上命令とする「神託者（Oracle）」モデルから、相談者の自立を支援する「伴走者（Companion）」モデルへの移行が必要となる。</p>

                <h3>5.1 現代的占い師の役割定義</h3>
                <p>新しい時代の占い師は、相談者が「自分自身の力で未来を創る」為の触媒（カタリスト）として機能すべきである。具体的には、以下の3つの役割が求められる。</p>
                <ul>
                    <li><strong>無意識の翻訳者（Translator of the Unconscious）</strong>：<br>相談者が言語化出来ない微細な感覚や、抑圧された可能性を、象徴と言語を用いて橋渡しする。ここでは「当てる」ことよりも、相談者が「しっくりくる」表現を見付ける手助けをすることが重要である。</li>
                    <li><strong>感情のファシリテーター（Facilitator of Emotion）</strong>：<br>エイブラハムの感情階層において、相談者が現在どの位置にいるかを見極め、一段階上の感情（より自由度の高い状態）へ移行する為の具体的な視点を提供する。例えば、絶望している相談者がいきなり「喜び」を感じるのは難しい為、まずは「怒り」によってエネルギーを取り戻すことを肯定する等の、戦略的なサポートが必要である。</li>
                    <li><strong>物語の共創者（Co-creator of Narrative）</strong>：<br>相談者が過去の制約から脱し、新しい人生の物語を書き始める際の「最初の読者」であり「編集者」となる。占い師は、カードや星の象徴を「可能性の種」として提示し、それをどのように育てるかを相談者と共に考える。</li>
                </ul>

                <h3>5.2 占いとコーチング・カウンセリングの統合</h3>
                <p>現代の優れた占術セッションは、純粋な予言というよりも、カウンセリングやコーチングの技法を高度に統合したメンタルサポートの一種となりつつある。</p>
                <p>伴走者としての占い師は、相談者が「自分を救った」結果として占いが当たらなくなった際、それを最大の「成功」として祝福する。自らの存在意義が消滅する瞬間こそが、専門職としての最高の達成となるという逆説（パラドックス）を受け入れる必要がある。</p>

                <h2>第6章：自己救済を促す為の実践的アプローチ</h2>
                <p>占い師が相談者の自己救済を支援し、最終的に「当たらなくなる（自由になる）」状態へ導く為の具体的な手法について考察する。</p>

                <h3>6.1 ローカス・オブ・コントロールの移行を促す質問技法</h3>
                <p>相談者が「どうなりますか？」と未来の的中を求めてきた際、伴走者型の占い師は以下のように質問を返し、統制の所在を内部へと引き戻す。</p>
                <ul>
                    <li>「占いの結果では〇〇という傾向が出ていますが、貴方自身はそれを聞いてどう感じますか？」</li>
                    <li>「若し、この結果を貴方の意志で180度変えられるとしたら、どんな未来にしたいですか？」</li>
                    <li>「この困難な状況が、貴方の成長の為に用意されたレッスンだとしたら、そこから何を学び取りますか？」</li>
                </ul>
                <p>これ等の問いかけは、相談者を「運命の受領者」から「現実の観測者・創造者」へと引き上げる。</p>

                <h3>6.2 感情の階層を登る為の「波動の調整」</h3>
                <p>エイブラハムの教えに基づき、セッション中に相談者の感情レベルを引き上げるワークを取り入れる。</p>
                <ul>
                    <li><strong>感謝のプロセス（Process 1）</strong>：<br>感情レベルが比較的高い時、現在の生活の中にある「良い点」に焦点を当て、それを言語化することで、ソースとの同調を強める。</li>
                    <li><strong>感情日記と書き出し（Process 22以降）</strong>：<br>感情レベルが低い時、まずは紙にありのままの感情（怒りや不満）を書き出し、その感情を受け入れることから始める。自然と浮かび上がる思考をキャッチし、少しでも「ホッとする」考え方を探るプロセスを伴走する。</li>
                </ul>

                <h3>6.3 シャドウ（影）の統合とプロジェクションの回収</h3>
                <p>ユング心理学の手法を用い、占いの結果に現れた「自分に取って不都合な内容」を自分の一部として受け入れる作業（シャドウ・ワーク）を行う。</p>
                <p>「この嫌な人物のカードは、貴方の中にある抑圧されたエネルギーを象徴しているのかもしれません」といった解釈を提供することで、相談者は外部への投影を止め、内面的な力を取り戻す。自分の「影」を直視する勇気を持つことこそが、安易なスピリチュアリティに逃げずに現実を立て直す為の鍵となる。</p>

                <h2>第7章：的中を超えた「意味の生成」と現代的倫理</h2>
                <p>占術が「当たる・当たらない」という二元論を超えた時、そこには「意味の生成」という新しい価値が生まれる。</p>

                <h3>7.1 解釈の自由とレジリエンス</h3>
                <p>占術の本質は、バラバラで無意味に思える出来事に、一つの「物語的脈絡」を与えることにある。例えば、不運が続く相談者に対し、「今は収穫の前の冬の時期であり、根を張る時だ」という解釈を与えることは、単なる慰めを超えて、相談者のレジリエンス（回復弾力性）を高める効果がある。</p>
                <p>この時、重要なのはその解釈が客観的に「的中」しているかどうかではなく、相談者の生命力を活性化し、次の行動へ向かわせる「有用性」を持っているかどうかである。</p>

                <h3>7.2 占術における新しい倫理観</h3>
                <p>「当ててなんぼ」という価値観は、時に占い師を「支配者」の立場に置いてしまう。的中を繰り返すことで相談者を依存させ、自らの予言なしでは生きられない状態にすることは、専門職としての倫理に反する。</p>
                <p>真に倫理的な占い師とは、自らの予言の限界を認め、相談者が自らの足で歩き出すことを奨励する者である。アイザック・ディネーセンが描いた「治療者」の評判のように、例え完治例によって評判が高まっても、それを受け流し、常に相談者の生命力に敬意を払う謙虚さが求められる。</p>

                <h2>第8章：結論</h2>
                <h3>占術における的中のパラドックス</h3>
                <p>本報告の考察を通じて、占術における「的中」のパラドックスの正体が明らかになった。占いが「当たる」という現象は、相談者が心理的な因果律や低い感情段階、あるいは外的統制感という「予測可能な枠組み」の中に留まっていることの証明である。</p>
                <p>これに対し、占いが「当たらなくなる」という事態は、相談者が自己救済を果たし、自由意志を行使して自らの人生の創造主（クリエイター）へと進化したことを示す祝祭的なサインである。</p>
                <p>占い師は、相談者が混迷の中にいる初期段階においては、的中を通じて安心と信頼を提供する「神託者」として振る舞うかもしれない。しかし、その役割は永続的なものであってはならない。セッションの進行と共に、占い師は相談者の無意識を鏡のように映し出し、感情の階層を登るプロセスを支える「ファシリテーター」へと移行しなければならない。</p>
                <p>究極的に、占い師とは「相談者が自分を必要としなくなる日」を目指して活動する、稀有な専門職である。相談者が高い視座を獲得し、自らの人生の物語を自由に紡ぎ始めた時、占いはその役目を終える。その時、当たらなくなった占いの結果を挟んで、占い師と相談者が共にその「自由」を喜び合える関係こそが、現代における占術の最も美しい到達点であると言える。</p>
                <p>「占い師は当ててなんぼ」という言葉は、今、次のように再定義されるべきである。</p>
                <p>「占い師は、相談者が自らの手で未来を書き換える力を取り戻すまで、その道のりを照らす一筋の光であればよい。そして、相談者が自らの光で歩き始めた時、静かにその影へと退く存在であればよい」と。</p>
                <p>この変容のプロセスこそが、現代の心理学と古来の占術が交差する地点で生まれる、真の自己救済のダイナミズムなのである。</p>
            `
        };

        posts.unshift(manualPost);

        // Extract unique categories
        categories = [...new Set(posts.map(post => post.category))];

    } catch (error) {
        console.error('Error fetching posts:', error);
        mainContent.innerHTML = '<div style="text-align:center; padding: 50px;"><p>Failed to load articles. Please check your connection.</p></div>';
    }
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
    if (posts.length === 0) {
        mainContent.innerHTML = '<div class="no-posts"><p>No articles found.</p></div>';
        return;
    }

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
                <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                    <a href="${post.link}" target="_blank" style="color: var(--accent-purple); text-decoration: underline; font-weight: bold;">
                        公式サイトでこの記事を読む <i class="ph ph-arrow-square-out"></i>
                    </a>
                </p>
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
