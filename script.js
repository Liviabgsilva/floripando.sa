// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---
const img = "img.praias/Barra da Lagoa.png";
const img = "img.praias/Cacupé.png";
const img = "img.praias/canasvieiras.png";
const img ="img.praias/Jurerê Internacional.png";

const PRAIA_IMAGES = {
    "Jurerê": "img.praias/praia jurere.png",
    "Jurerê Internacional": "img.praias/Jurerê Internacional.png",
    "Canasvieiras": "img.praias/canasvieiras.png",
    "Cachoeira do Bom Jesus": "img.praias/cachoeira.png",
    "Ponta das Canas": "img.praias/Praia de Ponta das Canas.png",
    "Lagoinha (do Norte)": "img.praias/Praia da Lagoinha do Norte .png",
    "Praia Brava": "img.praias/Praia Brava.png",
    "Praia dos Ingleses": "img.praias/Praia dos Ingleses.png",
    "Praia do Santinho": "img.praias/Praia do Santinho.png",
    "Praia do Forte": "img.praias/Praia do Forte.png",
    "Praia da Daniela": "img.praias/Praia da Daniela.png",
    "Sambaqui": "img.praias/Sambaqui.png",
    "Santo Antônio de Lisboa": "img.praias/Santo Antônio de Lisboa.png",
    "Cacupé": "img.praias/Cacupé.png",
    "Barra da Lagoa": "img.praias/Barra da Lagoa.png",
    "Prainha da Barra": "img.praias/Prainha da Barra.png",
    "Praia Mole": "img.praias/Praia Mole.png",
    "Praia da Galheta": "img.praias/Praia da Galheta.png",
    "Praia da Joaquina": "img.praias/Praia da Joaquina.png",
    "Praia do Gravatá": "img.praias/Praia do Gravatá.png",
    "Praia do Moçambique": "img.praias/Praia do Moçambique.png",
    "Praia da Armação": "img.praias/Praia da Armação.png",
    "Praia do Matadeiro": "img.praias/Praia do Matadeiro.png",
    "Praia do Morro das Pedras": "img.praias/Praia do Morro das Pedras.png",
    "Praia do Pântano do Sul": "img.praias/Praia do Pântano do Sul.png",
    "Praia dos Açores": "img.praias/Praia dos Açores.png",
    "Praia da Solidão": "img.praias/Praia da Solidão.png",
    "Praia do Saquinho": "img.praias/Praia do Saquinho.png",
    "Praia da Lagoinha do Leste": "img.praias/Praia da Lagoinha do Leste.png",
    "Praia de Naufragados": "img.praias/Praia de Naufragados.png",
    "Ribeirão da Ilha": "img.praias/Ribeirão da Ilha.png",
    "Tapera": "img.praias/Tapera.png",
    "Praia de Itaguaçu": "img.praias/Praia de Itaguaçu.png",
    "Praia das Palmeiras": "img.praias/Praia das Palmeiras.png",
    "Praia da Saudade": "img.praias/Praia da Saudade.png",
    "Praia do Meio": "img.praias/Praia do Meio.png",
    "Praia do Bom Abrigo": "img.praias/Praia do Bom Abrigo.png"
};

function getPraiaImage(nome) {
    return PRAIA_IMAGES[nome] || (DATA.praias.find(p => p.nome === nome) || {}).img || imgGenerica1;
}

const DATA = {
    destinos: [
        { nome: "Jurerê Internacional", desc: "Luxo, beach clubs sofisticados e mansões à beira-mar.", img: "img.praias/Jurerê Internacional.png", cat: "Norte" },
        { nome: "Santo Antônio de Lisboa", desc: "Cultura açoriana, arquitetura preservada e o melhor pôr-do-sol.", img:"img.praias/Santo Antônio de Lisboa.png",  cat: "Norte" },
        { nome: "Praia do Campeche", desc: "Natureza selvagem, ondas perfeitas e a mística Ilha do Campeche.", img: "img.praias/Praia do Campeche.png", cat: "Sul" },]
    praias: [
        // --- NORTE DA ILHA ---
        { nome: "praia Jurerê", desc: "Águas calmas e quentes, excelente para famílias com excelente infraestrutura.", regiao: "Norte", img: "img.praias/Praia Jurerê.png", temp: "25°C", lotacao: "Alta" },
        { nome: "Jurerê Internacional", desc: "Sinónimo de luxo, mansões e beach clubs exclusivos com festas sunset.", regiao: "Norte", img: "img.praias/Jurerê Internacional.png", temp: "25°C", lotacao: "Muito Alta" },
        { nome: "Canasvieiras", desc: "Um dos destinos mais procurados por turistas do Mercosul, mar tranquilo e comércio forte.", regiao: "Norte", img: "img.praias/Canasvieiras.png", temp: "24°C", lotacao: "Muito Alta" },
        { nome: "Cachoeira do Bom Jesus", desc: "Extensão de Canasvieiras, com faixa de areia larga e águas convidativas.", regiao: "Norte", img: "img.praias/Cachoeira do Bom Jesus.png", temp: "24°C", lotacao: "Média" },
        { nome: "Ponta das Canas", desc: "Praia charmosa na ponta norte da ilha com colónias de pescadores.", regiao: "Norte", img:"img.praias/Ponta das Canas.png", temp: "23°C", lotacao: "Média" },
        { nome: "Lagoinha (do Norte)", desc: "Pequena e abrigada, com formato de ferradura e mar cristalino.", regiao: "Norte", img: "img.praias/Lagoinha (do Norte).png", temp: "24°C", lotacao: "Média" },
        { nome: "Praia Brava", desc: "Paraíso dos surfistas com mar agitado, miradouro deslumbrante e condomínios de luxo.", regiao: "Norte", img:"img.praias/Praia Brava.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Ingleses", desc: "Infraestrutura completa, dunas incríveis e ótima para todas as idades.", regiao: "Norte", img: "img.praias/Praia dos Ingleses.png", temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Santinho", desc: "História e natureza encontram-se. Famosa pelo resort e pelas inscrições rupestres.", regiao:="Norte", img:"img.praias/Praia do Santinho.png", temp: "23°C", lotacao:="Alta" },
        { nome: "Praia do Forte", desc: "Junto à histórica Fortaleza de São José da Ponta Grossa. Mar calmo e extenso.", regiao:="Norte", img:="img.praias/Praia do Forte.png", temp:="24°C", lotacao:=("Média") },
        { nome:("Praia da Daniela"), desc:(("Mar calmo e quente que parece uma lagoa. Ideal para crianças e famílias.")), regiao:(("Norte")), img:(("img.praias/Praia da Daniela.png")), temp:(("25°C")), lotacao:(("Média")) },
        { nome:(("Sambaqui")), desc:((("Raízes açorianas fortes, gastronomia focada em ostras e cenário bucólico.")), regiao:((("Norte")), img:((("img.praias/Sambaqui.png")), temp:((("23°C")), lotacao:((("Baixa")))),
        { nome: "Santo Antônio de Lisboa", desc: "Um dos bairros mais antigos de Florianópolis, com arquitetura colonial e pôr do sol famoso.", regiao: "Norte", img: "img.praias/Santo Antônio de Lisboa.png", temp: "22°C", lotacao: "Média" },
        { nome: "Cacupé", desc: "Orla requintada com restaurantes sofisticados e vista espetacular para a Beira-Mar.", regiao: "Norte", img:"img.praias/Cacupé.png", temp: "23°C", lotacao: "Baixa" },

        // --- LESTE DA ILHA ---
        { nome: "Barra da Lagoa", desc: "O maior núcleo pesqueiro da ilha, com o Canal da Barra e piscinas naturais.", regiao: "Leste", img: "img.praias/Barra da Lagoa.png", temp: "22°C", lotacao: "Muito Alta" },
        { nome: "Prainha da Barra", desc: "Pequena e escondida, acessível por uma curta trilha na Barra da Lagoa.", regiao: "Leste", img: "img.praias/Prainha da Barra.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia Mole", desc: "Ponto de encontro da viajem ativa, surfistas, parapente e bares com DJs.", regiao: "Leste", img: "img.praias/Praia Mole.png", temp: "23°C", lotacao: "Alta" },
        { nome: "Praia da Galheta", desc: "Acessível apenas por trilha e reservada para o naturismo (opcional).", regiao: "Leste", img:"img.praias/Praia da Galheta.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia da Joaquina", desc: "Reconhecimento internacional no surf. Dunas imensas famosas para a prática de sandboard.", regiao: "Leste", img: "img.praias/Praia da Joaquina.png", temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Gravatá", desc: "Trilha escondida, com relvados perfeitos para piquenique e mar aberto.", regiao: "Leste", img:"img.praias/Praia do Gravatá.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia do Moçambique", desc: "A maior extensão de areia da ilha (12km). Selvagem e preservada dentro de um parque estadual.", regiao: "Leste", img: "img.praias/Praia do Moçambique.png", temp: "21°C", lotacao: "Baixa" },

        // --- SUL DA ILHA ---
        { nome: "Praia do Campeche", desc: "Mar aberto de águas cristalinas com vista magnífica para a Ilha do Campeche.", regiao: "Sul", img: "img.praias/Praia do Campeche.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia da Armação", desc: "Tradicional vila de pescadores, com a icónica Igreja de Sant'Ana.", regiao: "Sul", img:"img.praias/Praia da Armação.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Matadeiro", desc: "Paraíso do surf no Sul da ilha. Acessível apenas atravessando o rio.", regiao: "Sul", img: "img.praias/Praia do Matadeiro.png", temp: "21°C", lotacao:("Média") },
        { nome: "Praia do Morro das Pedras", desc: "Rodeada de rochas escuras, com ondas fortes e um miradouro espetacular no Convento.", regiao: "Sul", img:"img.praias/Praia do Morro das Pedras.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Pântano do Sul", desc: "Famosa pelos restaurantes tradicionais à beira-mar e pela pesca da tainha.", regiao: "Sul", img: "img.praias/Praia do Pântano do Sul.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Açores", desc: "Tranquila e com extensa faixa de areia, excelente para relaxar em família.", regiao: "Sul", img:"img.praias/Praia dos Açores.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia da Solidão", desc: "Cercada pela Mata Atlântica exuberante, possui ainda uma cascata escondida.", regiao: "Sul", img: "img.praias/Praia da Solidão.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Saquinho", desc: "Isolada, acessível por uma trilha cimentada através do Morro. Perfeita para desconectar.", regiao: "Sul", img:"img.praias/Praia do Saquinho.png", temp: "20°C", lotacao: "Muito Baixa" },
        { nome: "Praia da Lagoinha do Leste", desc: "Frequentemente eleita a mais bela da ilha. Selvagem, sem acesso rodoviário, ideal para trilhas.", regiao: "Sul", img: "img.praias/Praia da Lagoinha do Leste.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia de Naufragados", desc: "No extremo sul da ilha. História em ruínas e natureza forte ao redor do farol.", regiao:("Sul"), img:("img.praias/Praia de Naufragados.png"), temp:(("20°C")), lotacao:(("Baixa")) },
        { nome:("Ribeirão da Ilha"), desc:(("Polo gastronómico das ostras e um dos locais com arquitetura colonial açoriana mais preservada.")), regiao:(("Sul")), img:(("img.praias/Ribeirão da Ilha.png")), temp:(("23°C")), lotacao:(("Média")) },
        { nome:("Tapera"), desc:(("Mar raso, calmo e águas quentes. Uma praia mais nativa e residencial.")), regiao:(("Sul")), img:(("img.praias/Tapera.png")), temp:(("25°C")), lotacao:(("Baixa")) },

        // --- CONTINENTAL / CENTRO ---
        { nome: "Praia de Itaguaçu", desc: "Vista maravilhosa para o pôr do sol, cercada por pedras folclóricas cheias de lendas açorianas.", regiao: "Centro", img:"img.praias/Praia de Itaguaçu.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia das Palmeiras", desc: "Pequena e tranquila, no coração da região continental com foco gastronómico ao redor.", regiao: "Centro", img: "img.praias/Praia das Palmeiras.png", temp: "23°C", lotacao: "Baixa" },
        { nome: "Praia da Saudade", desc: "Praia urbanizada da região de Coqueiros, ideal para caminhadas no calçadão à beira-mar.", regiao: "Centro", img: "img.praias/Praia da Saudade.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Meio", desc: "Faz parte do circuito gastronómico de Coqueiros. Mais frequentada por moradores para exercício.", regiao: "Centro", img: "img.praias/Praia do Meio.png", temp: "23°C", lotacao: "Média" },
        { nome: "Praia do Bom Abrigo", desc: "Reduto charmoso, seguro e bem cuidado, ótimo para contemplar a ponte Hercílio Luz ao longe.", regiao: "Centro", img:"img.praias/Praia do Bom Abrigo.png", temp: "22°C", lotacao: "Baixa" }
    ],
    hospedagem: [
        { nome: "Ilha Resort & Spa", local: "Ponta das Canas", preco: "R$ 1.650 / noite", rating: 5, desc: "Sofisticação de padrão internacional à beira-mar com spa premiado.", img: "img" },
        { nome: "Villas de Jurerê Boutique", local: "Jurerê Internacional", preco: "R$ 2.100 / noite", rating: 5, desc: "Exclusividade absoluta e atendimento personalizado de mordomo.", img: "" }
    ],
    gastronomia: [
        { nome: "Ostradamus", cat: "frutos-do-mar", local: "Ribeirão da Ilha", desc: "Ostras vivas depuradas e o melhor polvo grelhado num trapiche histórico.", preco: "R$ 180 - R$ 350", img: "" },
        { nome: "Artusi Ristorante", cat: "italiana", local: "Centro", desc: "Alta culinária italiana com toques inovadores pelo chef de prestígio.", preco: "R$ 150 - R$ 280", img: "" },
        { nome: "Jay Bistrô", cat: "contemporanea", local: "Jurerê", desc: "Menu de autor sofisticado e harmonizações com grandes rótulos mundiais.", preco: "R$ 220 - R$ 450", img: "" }
    ],
    eventos: [
        { nome: "Festival de Comida de Rua", data: "15 de Junho 2026", local: "Praia de Canasvieiras", desc: "Celebração culinária com gastronomia local e internacional.", img: "" },
        { nome: "Sunset Music Festival", data: "22 de Junho 2026", local: "Jurerê Internacional", desc: "Música ao vivo com os melhores DJs internacionais durante o pôr do sol.", img: "" },
        { nome: "Trilha Eco-aventura", data: "28 de Junho 2026", local: "Praia da Lagoinha do Leste", desc: "Expedição guiada pela natureza selvagem da Mata Atlântica.", img: "" },
        { nome: "Campeonato de Surf", data: "05 de Julho 2026", local: "Praia Mole", desc: "Competição internacional de surf com atletas do mundo todo.", img: "" },
        { nome: "Noite de Arte Contemporânea", data: "12 de Julho 2026", local: "Centro Histórico", desc: "Exposição de arte, performances e instalações interativas.", img: "" },
        { nome: "Passeio de Barco Sunset", data: "19 de Julho 2026", local: "Marina da Barra da Lagoa", desc: "Experiência gastronómica flutuante com vista panorâmica do pôr do sol.", img: "" }
    ]
};

// --- CONTROLO DAS VIEWS (SPA SIMULADA) ---
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- BASE DE DADOS E AUTENTICAÇÃO (LOCALSTORAGE) ---
let currentUser = JSON.parse(localStorage.getItem('loggedUser')) || null;

function authAction(type) {
    if (type === 'register') {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;

        if (!name || !email || !pass) {
            alert("Preencha todos os campos do registo.");
            return;
        }

        const newUser = {
            name,
            email,
            pass,
            favorites: [],
            history: [
                { destino: "Santo Antônio de Lisboa", data: "Março 2026", tipo: "Cultural" }
            ],
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200"
        };

        localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
        alert("Conta VIP criada com sucesso! Pode agora efetuar o login.");
        showView('login');
    } 
    else if (type === 'login') {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password') ? document.getElementById('login-password').value : document.getElementById('login-pass').value;

        const storedUser = JSON.parse(localStorage.getItem(`user_${email}`));

        if (storedUser && storedUser.pass === pass) {
            currentUser = storedUser;
            localStorage.setItem('loggedUser', JSON.stringify(currentUser));
            updateUI();
            showView('home');
        } else {
            alert("Credenciais incorretas ou inexistentes.");
        }
    }
    else if (type === 'logout') {
        localStorage.removeItem('loggedUser');
        currentUser = null;
        updateUI();
        showView('home');
    }
}

// --- ATUALIZAÇÃO DA INTERFACE (USER STATE) ---
function updateUI() {
    const authNav = document.getElementById('nav-auth');
    const userNav = document.getElementById('user-nav');

    if (currentUser) {
        authNav.classList.add('hidden');
        userNav.classList.remove('hidden');
        document.getElementById('user-nav-name').innerText = `Olá, ${currentUser.name.split(' ')[0]}`;
        
        // Elementos do Dashboard/Perfil
        document.getElementById('profile-display-name').innerText = currentUser.name;
        document.getElementById('profile-display-email').innerText = currentUser.email;
        document.getElementById('edit-name').value = currentUser.name;
        document.getElementById('user-nav-avatar').src = currentUser.avatar;
        document.getElementById('profile-display-avatar').src = currentUser.avatar;

        renderFavorites();
        renderHistory();
    } else {
        authNav.classList.remove('hidden');
        userNav.classList.add('hidden');
    }
}

// --- RENDERIZAÇÃO DE GRELHAS DINÂMICAS ---
function renderGrids() {
    // Destinos Populares
    const destinosGrid = document.getElementById('destinos-grid');
    if (destinosGrid) {
        destinosGrid.innerHTML = '';
        DATA.destinos.forEach(d => {
            destinosGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${d.img}" alt="${d.nome}">
                        <span class="badge-tag">${d.cat}</span>
                    </div>
                    <div class="card-body">
                        <h3>${d.nome}</h3>
                        <p>${d.desc}</p>
                        <div class="card-footer">
                            <button class="btn-fav" onclick="toggleFavorite('${d.nome}')"><i class="far fa-heart"></i> Guardar</button>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Praias
    filterPraias('todas');

    // Hospedagem
    const hospGrid = document.getElementById('hospedagem-grid');
    if (hospGrid) {
        hospGrid.innerHTML = '';
        DATA.hospedagem.forEach(h => {
            hospGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${h.img}" alt="${h.nome}">
                        <span class="badge-tag">${h.local}</span>
                    </div>
                    <div class="card-body">
                        <h3>${h.nome}</h3>
                        <p>${h.desc}</p>
                        <p style="margin-top: 10px; font-weight: 700; color: var(--primary);">${h.preco}</p>
                    </div>
                </div>`;
        });
    }

    // Gastronomia
    filterGastronomia('todos');

    // Eventos
    renderEventos();
}

// --- FILTROS DE PRAIAS ATUALIZADO ---
function filterPraias(regiao, btnElement = null) {
    const praiasGrid = document.getElementById('praias-grid');
    if (!praiasGrid) return;
    
    // UI Button Toggle
    if (btnElement) {
        const buttons = btnElement.parentElement.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    praiasGrid.innerHTML = '';
    const filtered = regiao === 'todas' ? DATA.praias : DATA.praias.filter(p => p.regiao === regiao);
    
    filtered.forEach(p => {
        const imgUrl = getPraiaImage(p.nome);
        praiasGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${imgUrl}" alt="${p.nome}" loading="lazy">
                    <span class="badge-tag">${p.regiao}</span>
                </div>
                <div class="card-body">
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                    <div class="card-footer" style="display:flex; flex-direction:column; align-items:flex-start; gap:8px;">
                        <span><i class="fas fa-thermometer-half"></i> Temp Água: ${p.temp}</span>
                        <span><i class="fas fa-users"></i> Movimento: ${p.lotacao}</span>
                        <button class="btn-fav" style="align-self: flex-end; margin-top: 10px;" onclick="toggleFavorite('${p.nome}')"><i class="far fa-heart"></i> Guardar</button>
                    </div>
                </div>
            </div>`;
    });
}

// --- FILTROS DE GASTRONOMIA ---
function filterGastronomia(cat) {
    const gastroGrid = document.getElementById('gastronomia-grid');
    if (!gastroGrid) return;

    gastroGrid.innerHTML = '';
    const filtered = cat === 'todos' ? DATA.gastronomia : DATA.gastronomia.filter(g => g.cat === cat);

    filtered.forEach(g => {
        gastroGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${g.img}" alt="${g.nome}">
                    <span class="badge-tag">${g.preco}</span>
                </div>
                <div class="card-body">
                    <h3>${g.nome}</h3>
                    <p>${g.desc}</p>
                    <div class="card-footer">
                        <span><i class="fas fa-map-marker-alt"></i> ${g.local}</span>
                    </div>
                </div>
            </div>`;
    });
}

// --- RENDERIZAÇÃO DE EVENTOS ---
function renderEventos() {
    const eventosGrid = document.getElementById('eventos-grid');
    if (!eventosGrid) return;

    eventosGrid.innerHTML = '';
    DATA.eventos.forEach(e => {
        eventosGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${e.img}" alt="${e.nome}">
                    <span class="badge-tag">Evento</span>
                </div>
                <div class="card-body">
                    <h3>${e.nome}</h3>
                    <p>${e.desc}</p>
                    <div class="card-footer" style="display:flex; flex-direction:column; align-items:flex-start; gap:8px;">
                        <span><i class="fas fa-calendar-alt"></i> ${e.data}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${e.local}</span>
                        <button class="btn-fav" style="align-self: flex-end; margin-top: 10px;" onclick="toggleFavorite('${e.nome}')"><i class="far fa-heart"></i> Guardar</button>
                    </div>
                </div>
            </div>`;
    });
}

// --- SISTEMA DE FAVORITOS ---
function toggleFavorite(itemName) {
    if (!currentUser) {
        alert("Por favor, faça login para guardar favoritos.");
        showView('login');
        return;
    }

    const index = currentUser.favorites.indexOf(itemName);
    if (index === -1) {
        currentUser.favorites.push(itemName);
        alert(`${itemName} guardado nos favoritos!`);
    } else {
        currentUser.favorites.splice(index, 1);
        alert(`${itemName} removido dos favoritos.`);
    }

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    updateUI();
}

function renderFavorites() {
    const favGrid = document.getElementById('favorites-grid');
    if (!favGrid) return;

    favGrid.innerHTML = '';
    if (!currentUser.favorites || currentUser.favorites.length === 0) {
        favGrid.innerHTML = '<p class="empty-state">Nenhum favorito guardado até ao momento.</p>';
        return;
    }

    currentUser.favorites.forEach(fav => {
        favGrid.innerHTML += `
            <div class="fav-item glass" style="display:flex; justify-content:space-between; padding:20px; border-radius:15px; margin-bottom:15px;">
                <span style="font-weight:700;">${fav}</span>
                <button onclick="toggleFavorite('${fav}')" style="background:transparent; border:none; color:#ff4a5a; cursor:pointer;"><i class="fas fa-trash"></i> Remover</button>
            </div>`;
    });
}

// --- HISTÓRICO DE VIAGENS ---
function renderHistory() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;

    historyList.innerHTML = '';
    if (!currentUser.history || currentUser.history.length === 0) {
        historyList.innerHTML = '<p class="empty-state">Sem histórico de viagens registado.</p>';
        return;
    }

    currentUser.history.forEach(h => {
        historyList.innerHTML += `
            <div class="history-card glass" style="padding:20px; border-radius:15px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                <div class="history-info">
                    <h4 style="font-weight:700; margin-bottom:5px;">${h.destino}</h4>
                    <p style="font-size:0.9rem; color:#aaa;">${h.data} — Tipo: ${h.tipo}</p>
                </div>
                <span class="status-badge" style="background:rgba(0,255,102,0.1); color:#00ff66; padding:5px 15px; border-radius:50px; font-size:0.8rem;">Confirmada</span>
            </div>`;
    });
}

// --- EDIÇÃO DE PERFIL ---
function updateProfile() {
    if (!currentUser) return;

    const newName = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    const newLocation = document.getElementById('edit-location').value;

    if (!newName) return alert("O nome não pode ficar em branco.");

    currentUser.name = newName;
    currentUser.phone = newPhone;
    currentUser.location = newLocation;

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    updateUI();
    alert("Perfil atualizado com sucesso!");
}

function deleteAccount() {
    if (confirm("Deseja mesmo eliminar a sua conta de prestígio? Todos os favoritos e histórico serão apagados.")) {
        localStorage.removeItem(`user_${currentUser.email}`);
        authAction('logout');
    }
}

// --- INTERNET DOS COMPONENTES VISUAIS (NAVBAR & LOADER) ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Cursor Customizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Loader de Carregamento
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 15;
        if (bar) bar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) loader.style.opacity = '0';
                setTimeout(() => { if (loader) loader.style.display = 'none'; }, 800);
            }, 300);
        }
    }, 80);

    renderGrids();
    updateUI();

    ScrollReveal().reveal('.reveal', { delay: 300, distance: '50px', origin: 'bottom' });
});

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// --- CHAT CONCIERGE IA ---
function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    body.innerHTML += `<div class="chat-message user">${userText}</div>`;
    input.value = '';

    setTimeout(() => {
        let reply = "Como concierge de luxo, sugiro uma reserva exclusiva no Restaurante Ostradamus ou uma estadia VIP no Villas de Jurerê.";
        if (userText.toLowerCase().includes('praia')) {
            reply = "A Praia Mole é perfeita para agitação e desportos, enquanto a Lagoinha do Leste oferece privacidade total e natureza intocada.";
        } else if (userText.toLowerCase().includes('reserva') || userText.toLowerCase().includes('hotel')) {
            reply = "Posso contactar os nossos parceiros VIP de imediato para garantir a melhor suite para si.";
        }
        body.innerHTML += `<div class="chat-message bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

// --- FUNÇÕES COMPLEMENTARES FALTANTES ---

// Pesquisa
function executeSearch() {
    const searchTerm = document.getElementById('main-search-input').value.toLowerCase();
    if (!searchTerm) {
        alert("Por favor, digite algo para procurar.");
        return;
    }
    
    // Procurar em destinos
    const foundDestino = DATA.destinos.find(d => d.nome.toLowerCase().includes(searchTerm));
    if (foundDestino) {
        showView('home');
        setTimeout(() => alert(`Encontrado: ${foundDestino.nome}`), 300);
        return;
    }
    
    // Procurar em praias
    const foundPraia = DATA.praias.find(p => p.nome.toLowerCase().includes(searchTerm));
    if (foundPraia) {
        showView('praias');
        setTimeout(() => alert(`Encontrado: ${foundPraia.nome}`), 300);
        return;
    }
    
    // Procurar em gastronomia
    const foundGastro = DATA.gastronomia.find(g => g.nome.toLowerCase().includes(searchTerm));
    if (foundGastro) {
        showView('gastronomia');
        setTimeout(() => alert(`Encontrado: ${foundGastro.nome}`), 300);
        return;
    }
    
    alert("Nenhum resultado encontrado para: " + searchTerm);
}

// Scroll suave para seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Trocar aba do perfil
function switchProfileTab(tabName) {
    // Ocultar todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Mostrar o selecionado
    const tab = document.getElementById(`tab-${tabName}`);
    if (tab) {
        tab.classList.add('active');
    }
    
    // Marcar botão ativo
    event.target.classList.add('active');
}

// Enviar formulário de contacto
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (name && email && message) {
        alert(`Obrigado ${name}! A sua mensagem foi enviada para viagem@floripando.com`);
        event.target.reset();
    }
}

// Tecla Enter no chat
function handleChatKey(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Mudar avatar do utilizador
function handleAvatarChange(event) {
    const file = event.target.files[0];
    if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentUser.avatar = e.target.result;
            localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
            localStorage.setItem('loggedUser', JSON.stringify(currentUser));
            updateUI();
        };
        reader.readAsDataURL(file);
    }
}