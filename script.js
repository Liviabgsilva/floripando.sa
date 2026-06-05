// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---

// Mapeamento exato com os nomes dos arquivos de imagem que você enviou
const PRAIA_IMAGES = {
    // Norte
    "Jurerê Internacional": "Jurerê Internacional.png",
    "Canasvieiras": "canasvieiras.png",
    "Cachoeira do Bom Jesus": "cachoeira.png",
    "Cacupé": "Cacupé.png",
    "Praia Brava": "Praia Brava.png",
    
    // Leste
    "Barra da Lagoa": "Barra da Lagoa.png",
    "Praia de Moçambique": "Mozambique.png",
    
    // Sul
    "Lagoinha do Leste": "Lagoinha do Leste .png",
    "Morro das Pedras": "morro das pedras.png",
    
    // Continente / Coqueiros
    "Praia do Bom Abrigo": "Praia Bom Abrigo.png"
};

const DESTINOS = [
    { id: 1, nome: "Jurerê Internacional", categoria: "Norte", desc: "O ponto de encontro do requinte, sofisticação e beach clubs de padrão mundial.", img: PRAIA_IMAGES["Jurerê Internacional"] },
    { id: 2, nome: "Barra da Lagoa", categoria: "Leste", desc: "Cultura pesqueira pulsante, canal deslumbrante e mar ideal para aprender a surfar.", img: PRAIA_IMAGES["Barra da Lagoa"] },
    { id: 3, nome: "Lagoinha do Leste", categoria: "Sul", desc: "Uma das praias mais desertas e paradisíacas da ilha, acessível apenas por trilha ou barco.", img: PRAIA_IMAGES["Lagoinha do Leste"] }
];
// Lista de praias configurada exatamente com a estrutura pedida
const PRAIAS = [
    // --- NORTE DA ILHA ---
    { id: 1, nome: "Jurerê Internacional", regiao: "Norte", desc: "Mar calmo, águas mornas e palmeiras imponentes.", img: "img.praias/Jurerê Internacional.png", },
    { id: 2, nome: "Canasvieiras", regiao: "Norte", desc: "Excelente infraestrutura urbana e passeios de escuna divertidos.", img: "img.praias/canasvieiras.png", },
    { id: 3, nome: "Cacupé", regiao: "Norte", desc: "Praia tranquila com vista deslumbrante e excelente rota gastronômica.", img: "img.praias/Cacupé.png", },
    { id: 4, nome: "Cachoeira do Bom Jesus", regiao: "Norte", desc: "Extensas faixas de areia calma ideais para caminhadas e banhos em família.", img: "img.praias/cachoeira.png", },
    { id: 5, nome: "Praia Brava", regiao: "Norte", desc: "Ondas fortes, areia fina e condomínios de alto padrão de frente para o mar.", img: "img.praias/Praia Brava.png", },

    // --- LESTE DA ILHA ---
    { id: 6, nome: "Barra da Lagoa", regiao: "Leste", desc: "Cultura pesqueira pulsante, canal deslumbrante e ideal para aprender a surfar.", img: "img.praias/Barra da Lagoa.png", },
    { id: 7, nome: "Praia de Moçambique", regiao: "Leste", desc: "A maior praia em extensão de Florianópolis, intocada e cercada por uma imensa reserva de pinus.", img: "img.praias/Mozambique.png", },

    // --- SUL DA ILHA ---
    { id: 8, nome: "Lagoinha do Leste", regiao: "Sul", desc: "Natureza selvagem e preservada com uma lagoa que deságua no mar em formato de coração.", img: "img.praias/Lagoinha do Leste .png", },
    { id: 9, nome: "Morro das Pedras", regiao: "Sul", desc: "Mar agitado e propício para o surf, cercado por costões de pedras e uma vista panorâmica incrível do mirante.", img: "img.praias/morro das pedras.png", },
    { id: 10, nome: "Praia do Bom Abrigo", regiao: "Sul", desc: "Visual bucólico com barcos, vista para a porção continental e um dos pores do sol mais charmosos da região.", img: "img.praias/Praia Bom Abrigo.png", }
];

const EVENTOS = [
    { id: 1, titulo: "Floripa Jazz Festival", data: "12 a 15 de Outubro, 2026", local: "Teatro Ademir Rosa & CIC", desc: "Grandes nomes do jazz internacional e bossa nova numa atmosfera intimista.", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600" },
    { id: 2, titulo: "Ironman Brasil 2026", data: "24 de Maio, 2026", local: "Etapa Jurerê", desc: "A maior competição de triatlo do mundo regressa às praias da ilha.", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600" }
];

const HOSPEDAGENS = [
    { id: 1, nome: "Il Campanario Villaggio", local: "Jurerê Internacional", preco: "A partir de R$ 1.200 / noite", desc: "Elegância de inspiração Riviera Italiana a poucos passos do mar.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600" },
    { id: 2, nome: "Quinta da Bica d'Água", local: "Carvoeira", preco: "A partir de R$ 750 / noite", desc: "Um refúgio de charme boutique cercado por uma natureza exuberante.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600" }
];

const GASTRONOMIA = [
    { id: 1, nome: "Ostradamus", tipo: "frutos-do-mar", local: "Ribeirão da Ilha", desc: "As melhores ostras do mundo servidas num trapiche histórico flutuante.", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600" },
    { id: 2, nome: "Artesano Pizza Bar", tipo: "italiana", local: "Lagoa da Conceição", desc: "Pizzas artesanais de fermentação lenta num ambiente rústico e acolhedor.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600" },
    { id: 3, nome: "Rosso Restro", tipo: "contemporanea", local: "Santo Antônio", desc: "Polvo premium grelhado e reinterpretações sofisticadas da cozinha manezinha.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600" }
];

// --- ESTADO GLOBAL DA APLICAÇÃO ---
let currentUser = null;

// --- INICIALIZAÇÃO DO SISTEMA ---
document.addEventListener("DOMContentLoaded", () => {
    // Esconder o loader após animação fluida
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.classList.add("hidden"), 500);
        }
    }, 1000);

    // Renderizar conteúdos iniciais das grids
    renderGrid("destinos-grid", DESTINOS, createCardHTML);
    renderGrid("praias-grid", PRAIAS, createCardHTML);
    renderGrid("eventos-grid", EVENTOS, createCardHTML);
    renderGrid("hospedagem-grid", HOSPEDAGENS, createCardHTML);
    renderGrid("gastronomia-grid", GASTRONOMIA, createCardHTML);

    // Inicializar efeitos de scroll (ScrollReveal)
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({ origin: 'bottom', distance: '50px', duration: 1000, delay: 200, reset: false });
        sr.reveal('.reveal');
        sr.reveal('.reveal-delay', { delay: 400 });
    }

    // Custom Cursor Tracker
    const cursor = document.getElementById("custom-cursor");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }

    // Verificar se já existe uma sessão guardada
    checkSession();
});

// --- RENDERIZADORES DE INTERFACE ---
function renderGrid(gridId, data, callbackHtml) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.map(item => callbackHtml(item)).join("");
}

function createCardHTML(item) {
    const badge = item.categoria || item.regiao || item.tipo || "Premium";
    const meta = item.local || item.preco || "";
    
    return `
        <div class="grid-item card reveal">
            <div class="card-img-wrapper">
                <img src="${item.img}" alt="${item.nome || item.titulo}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600';">
                <span class="card-badge">${badge}</span>
            </div>
            <div class="card-body">
                <h3>${item.nome || item.titulo}</h3>
                ${meta ? `<p class="card-meta"><i class="fas fa-map-marker-alt"></i> ${meta}</p>` : ""}
                <p class="card-text">${item.desc}</p>
                <div class="card-actions">
                    <button class="btn-card-action" onclick="handleCardAction('${item.nome || item.titulo}')">Saber Mais</button>
                    <button class="btn-fav" onclick="toggleFavorite(this, '${item.nome || item.titulo}')"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    `;
}

// --- SISTEMA DE ROTEAMENTO (SPA) ---
function showView(viewName) {
    const views = document.querySelectorAll(".view");
    views.forEach(view => {
        view.classList.remove("active");
        view.classList.add("hidden");
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.remove("hidden");
        setTimeout(() => targetView.classList.add("active"), 50);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll(".nav-menu a").forEach(link => {
        if (link.getAttribute("onclick")?.includes(viewName)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// --- FILTROS DINÂMICOS ---
function filterPraias(region) {
    updateFilterButtons('view-praias', region);
    const filtered = region === 'todas' ? PRAIAS : PRAIAS.filter(p => p.regiao === region);
    renderGrid("praias-grid", filtered, createCardHTML);
}

function filterGastronomia(type) {
    updateFilterButtons('view-gastronomia', type);
    const filtered = type === 'todos' ? GASTRONOMIA : GASTRONOMIA.filter(g => g.tipo === type);
    renderGrid("gastronomia-grid", filtered, createCardHTML);
}

function updateFilterButtons(viewId, activeValue) {
    const container = document.getElementById(viewId);
    if (!container) return;
    container.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.getAttribute("onclick")?.includes(`'${activeValue}'`)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// --- SISTEMA DE AUTENTICAÇÃO E SESSÃO ---
function authAction(action) {
    if (action === 'login') {
        const email = document.getElementById("login-email").value;
        const pass = document.getElementById("login-pass").value;

        if (!email || !pass) return alert("Por favor, preencha todos os campos.");

        const savedUser = localStorage.getItem(`user_${email}`);
        if (savedUser) {
            const user = JSON.parse(savedUser);
            if (user.password === pass) {
                loginUser(user);
            } else {
                alert("Palavra-passe incorreta.");
            }
        } else {
            alert("Utilizador não encontrado. Crie uma conta primeiro.");
        }
    } 
    else if (action === 'register') {
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const pass = document.getElementById("reg-pass").value;

        if (!name || !email || !pass) return alert("Preencha todos os dados de registo.");

        const newUser = { name, email, password: pass, phone: "", location: "", style: "luxo", favorites: [], history: [], avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100" };
        localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
        alert("Conta criada com sucesso! Faça o seu login.");
        showView('login');
    }
    else if (action === 'logout') {
        currentUser = null;
        localStorage.removeItem("activeSession");
        document.getElementById("nav-auth").classList.remove("hidden");
        document.getElementById("user-nav").classList.add("hidden");
        showView('home');
    }
}

function loginUser(user) {
    currentUser = user;
    localStorage.setItem("activeSession", user.email);
    
    document.getElementById("nav-auth").classList.add("hidden");
    const userNav = document.getElementById("user-nav");
    userNav.classList.remove("hidden");
    document.getElementById("user-nav-name").innerText = `Olá, ${user.name.split(" ")[0]}`;
    document.getElementById("user-nav-avatar").src = user.avatar;

    loadProfileData();
    showView('home');
}

function checkSession() {
    const activeEmail = localStorage.getItem("activeSession");
    if (activeEmail) {
        const user = localStorage.getItem(`user_${activeEmail}`);
        if (user) loginUser(JSON.parse(user));
    }
}

// --- CONTROLO DO PERFIL ---
function loadProfileData() {
    if (!currentUser) return;
    document.getElementById("profile-display-name").innerText = currentUser.name;
    document.getElementById("profile-display-email").innerText = currentUser.email;
    document.getElementById("profile-display-avatar").src = currentUser.avatar;

    document.getElementById("edit-name").value = currentUser.name;
    document.getElementById("edit-phone").value = currentUser.phone || "";
    document.getElementById("edit-location").value = currentUser.location || "";
    document.getElementById("edit-travel-style").value = currentUser.style || "luxo";

    renderFavorites();
}

function updateProfile() {
    if (!currentUser) return;
    currentUser.name = document.getElementById("edit-name").value;
    currentUser.phone = document.getElementById("edit-phone").value;
    currentUser.location = document.getElementById("edit-location").value;
    currentUser.style = document.getElementById("edit-travel-style").value;

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    alert("Perfil atualizado com sucesso!");
    loginUser(currentUser);
}

function deleteAccount() {
    if (!currentUser) return;
    if (confirm("Tem a certeza que deseja eliminar a sua conta permanentemente?")) {
        localStorage.removeItem(`user_${currentUser.email}`);
        authAction('logout');
    }
}

// --- ABAS DO PERFIL ---
function switchProfileTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const tab = document.getElementById(`tab-${tabName}`);
    if (tab) tab.classList.add('active');
    if (event && event.target) event.target.classList.add('active');
}

// --- FAVORITOS ---
function toggleFavorite(btn, itemName) {
    if (!currentUser) {
        alert("Inicie sessão para adicionar itens aos seus favoritos.");
        return showView('login');
    }

    const index = currentUser.favorites.indexOf(itemName);
    const icon = btn.querySelector("i");

    if (index === -1) {
        currentUser.favorites.push(itemName);
        icon.className = "fas fa-heart";
        btn.classList.add("favorited");
    } else {
        currentUser.favorites.splice(index, 1);
        icon.className = "far fa-heart";
        btn.classList.remove("favorited");
    }

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    renderFavorites();
}

function renderFavorites() {
    const favGrid = document.getElementById("favorites-grid");
    if (!favGrid || !currentUser) return;

    if (currentUser.favorites.length === 0) {
        favGrid.innerHTML = "<p class='empty-msg'>Ainda não adicionou nenhum favorito.</p>";
        return;
    }

    favGrid.innerHTML = currentUser.favorites.map(fav => `
        <div class="fav-item-card glass">
            <span><i class="fas fa-bookmark"></i> ${fav}</span>
            <button onclick="removeFavoriteDirect('${fav}')"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join("");
}

function removeFavoriteDirect(itemName) {
    if (!currentUser) return;
    currentUser.favorites = currentUser.favorites.filter(item => item !== itemName);
    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    renderFavorites();
    checkSession();
}

// --- CHAT CONCIERGE ---
function toggleChat() {
    const window = document.getElementById("chat-window");
    if (window) window.classList.toggle("hidden");
}

function sendChatMessage() {
    const input = document.getElementById("chat-input");
    const body = document.getElementById("chat-body");
    if (!input || !input.value.trim()) return;

    const userText = input.value;
    body.innerHTML += `<div class="chat-message user">${userText}</div>`;
    input.value = "";
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        let response = "Excelente pergunta! Como seu Concierge Premium, o que mais deseja saber?";
        if (userText.toLowerCase().includes("praia")) response = "As praias do Norte têm águas calmas. Para ondas e surf, confira Moçambique no Leste e Morro das Pedras no Sul!";
        body.innerHTML += `<div class="chat-message bot">${response}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 800);
}

// --- OUTRAS AÇÕES ---
function executeSearch() {
    const query = document.getElementById("main-search-input").value;
    if (query) alert(`A pesquisar por: "${query}"...`);
}

function handleCardAction(title) {
    alert(`A abrir detalhes premium de: ${title}`);
}

function handleContactSubmit(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    event.target.reset();
}

// Escuta a tecla enter no chat box
function handleChatKey(event) {
    if (event.key === 'Enter') sendChatMessage();
}

// Carregar imagem de perfil em base64
function handleAvatarChange(event) {
    const file = event.target.files[0];
    if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentUser.avatar = e.target.result;
            localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
            loginUser(currentUser);
        };
        reader.readAsDataURL(file);
    }
}