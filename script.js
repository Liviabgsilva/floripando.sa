// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---
const DEFAULT_IMAGE = 'https://via.placeholder.com/1000x600?text=Praia';

const AVAILABLE_IMAGE_FILES = [
    'Barra da Lagoa.png',
    'cachoeira.png',
    'Cacupé.png',
    'canasvieiras.png',
    'Jurerê Internacional.png',
    'Lagoinha do Leste .png',
    'morro das pedras.png',
    'Mozambique.png',
    'Praia Bom Abrigo.png',
    'Praia Brava.png',
    'praia da armação Floripa.png',
    'Praia da Daniela.png',
    'praia da galheta .png',
    'praia da galheta.png',
    'Praia da Ilha do Campeche.png',
    'Praia da Joaquina.png',
    'Praia da Lagoinha do Norte .png',
    'Praia da Saudade.png',
    'praia da solidão.png',
    'Praia da Tapera.png',
    'Praia das Palmeiras.png',
    'Praia de Itaiupuaçu.png',
    'Praia de Ponta das Canas.png',
    'Praia do Campeche.png',
    'Praia do Forte.png',
    'Praia do Gravatá.png',
    'Praia do Matadeiro.png',
    'Praia do meio.png',
    'Praia do Santinho.png',
    'Praia do Saquinho.png',
    'Praia dos Açores.png',
    'Praia dos Ingleses .png',
    'Praia dos naufragados.png',
    'praia jurere.png',
    'Praia mole.png',
    'Praia Pantano do Sul.png',
    'Prainha da Barra.png',
    'Ribeirão da Ilha .png',
    'Sambaqui.png',
    'Santo Antônio de Lisboa.png'
];

const PRAIA_IMAGES = {
    "Jurerê Internacional": "img.praias/Jurerê Internacional.png",
    "praia Jurerê": "img.praias/praia jurere.png",
    "Canasvieiras": "img.praias/canasvieiras.png",
    "Cachoeira do Bom Jesus": "img.praias/cachoeira.png",
    "Ponta das Canas": "img.praias/Praia de Ponta das Canas.png",
    "Lagoinha (do Norte)": "img.praias/Praia da Lagoinha do Norte .png",
    "Praia Brava": "img.praias/Praia Brava.png",
    "Praia dos Ingleses": "img.praias/Praia dos Ingleses .png",
    "Praia do Santinho": "img.praias/Praia do Santinho.png",
    "Praia do Forte": "img.praias/Praia do Forte.png",
    "Praia da Daniela": "img.praias/Praia da Daniela.png",
    "Sambaqui": "img.praias/Sambaqui.png",
    "Santo Antônio de Lisboa": "img.praias/Santo Antônio de Lisboa.png",
    "Cacupé": "img.praias/Cacupé.png",
    "Barra da Lagoa": "img.praias/Barra da Lagoa.png",
    "Prainha da Barra": "img.praias/Prainha da Barra.png",
    "Praia Mole": "img.praias/Praia mole.png",
    "Praia da Galheta": "img.praias/praia da galheta .png",
    "Praia da Joaquina": "img.praias/Praia da Joaquina.png",
    "Praia do Gravatá": "img.praias/Praia do Gravatá.png",
    "Praia do Moçambique": "img.praias/Mozambique.png",
    "Praia da Armação": "img.praias/praia da armação Floripa.png",
    "Praia do Matadeiro": "img.praias/Praia do Matadeiro.png",
    "Praia do Morro das Pedras": "img.praias/morro das pedras.png",
    "Praia do Pântano do Sul": "img.praias/Praia Pantano do Sul.png",
    "Praia dos Açores": "img.praias/Praia dos Açores.png",
    "Praia da Solidão": "img.praias/praia da solidão.png",
    "Praia do Saquinho": "img.praias/Praia do Saquinho.png",
    "Praia da Lagoinha do Leste": "img.praias/Lagoinha do Leste .png",
    "Praia de Naufragados": "img.praias/Praia dos naufragados.png",
    "Ribeirão da Ilha": "img.praias/Ribeirão da Ilha .png",
    "Tapera": "img.praias/Praia da Tapera.png",
    "Praia de Itaguaçu": "img.praias/Praia de Itaiupuaçu.png",
    "Praia das Palmeiras": "img.praias/Praia das Palmeiras.png",
    "Praia da Saudade": "img.praias/Praia da Saudade.png",
    "Praia do Meio": "img.praias/Praia do meio.png",
    "Praia do Bom Abrigo": "img.praias/Praia Bom Abrigo.png"
};

// CORREÇÃO: Funções de normalização reescritas para funcionar corretamente de forma segura
function normalizeKey(s) {
    if (!s) return '';
    return s.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/[^a-zA-Z0-9]/g, '')    // Remove tudo que não for alfanumérico
            .toLowerCase();
}

function simpleNormalize(s) {
    if (!s) return '';
    return s.toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/[^a-zA-Z0-9]/g, '')    // Remove espaços, traços e caracteres especiais
            .toLowerCase()
            .trim();
}

function findBestFileMatchByName(name) {
    if (!name) return null;
    const target = simpleNormalize(name);
    
    // exact match first
    for (const f of AVAILABLE_IMAGE_FILES) {
        const base = f.replace(/\.[^.]+$/, '');
        if (simpleNormalize(base) === target) return f;
    }

    // collect partial matches and rank by specificity (longer base preferred)
    const partials = [];
    for (const f of AVAILABLE_IMAGE_FILES) {
        const base = f.replace(/\.[^.]+$/, '');
        const normBase = simpleNormalize(base);
        if (normBase.includes(target) || target.includes(normBase)) {
            partials.push({ file: f, score: normBase.length });
        }
    }
    if (partials.length > 0) {
        partials.sort((a, b) => b.score - a.score); // prefer longer (more specific)
        return partials[0].file;
    }

    return null;
}

function getPraiaImage(nome) {
    // 1) se há mapeamento direto em PRAIA_IMAGES, tente casar com ficheiros reais
    if (PRAIA_IMAGES[nome]) {
        const candidate = PRAIA_IMAGES[nome].split('/').pop();
        const match = findBestFileMatchByName(candidate) || findBestFileMatchByName(nome);
        if (match) return `img.praias/${match}`;
        return PRAIA_IMAGES[nome]; // fallback para o caminho original
    }

    // 2) procurar por nome entre os ficheiros disponíveis
    const match = findBestFileMatchByName(nome);
    if (match) return `img.praias/${match}`;

    // 3) procurar em DATA.praias por nome e tentar casar
    if (typeof DATA !== 'undefined' && Array.isArray(DATA.praias)) {
        const found = DATA.praias.find(p => p.nome && simpleNormalize(p.nome) === simpleNormalize(nome));
        if (found) {
            const m = findBestFileMatchByName(found.img || found.nome);
            if (m) return `img.praias/${m}`;
            if (found.img) return found.img;
        }
    }

    // por fim, placeholder
    return DEFAULT_IMAGE;
}

// Construir mapa determinístico de imagens por nome de praia usando DATA.praias
const IMAGE_MAP = {};
function buildImageMap() {
    if (typeof DATA === 'undefined' || !Array.isArray(DATA.praias)) return;
    for (const p of DATA.praias) {
        const nome = p.nome;
        // 1) se já houver mapeamento explícito
        if (PRAIA_IMAGES[nome]) {
            const cand = PRAIA_IMAGES[nome].split('/').pop();
            const match = findBestFileMatchByName(cand) || findBestFileMatchByName(nome);
            IMAGE_MAP[nome] = match ? `img.praias/${match}` : PRAIA_IMAGES[nome];
            continue;
        }

        // 2) procurar ficheiro por nome
        const match = findBestFileMatchByName(nome);
        if (match) {
            IMAGE_MAP[nome] = `img.praias/${match}`;
            continue;
        }

        // 3) usar campo img do próprio objeto, se for um ficheiro existente
        if (p.img) {
            const imgFile = p.img.split('/').pop();
            const m2 = findBestFileMatchByName(imgFile) || findBestFileMatchByName(p.img);
            IMAGE_MAP[nome] = m2 ? `img.praias/${m2}` : p.img;
            continue;
        }

        // 4) fallback
        IMAGE_MAP[nome] = DEFAULT_IMAGE;
    }
}

const DATA = {
    destinos: [
        { nome: "Jurerê Internacional", desc: "Luxo, beach clubs sofisticados e mansões à beira-mar.", img: "img.praias/Jurerê Internacional.png", cat: "Norte" },
        { nome: "Santo Antônio de Lisboa", desc: "Cultura açoriana, arquitetura preservada e o melhor pôr-do-sol.", img: "img.praias/Santo Antônio de Lisboa.png", cat: "Norte" },
        { nome: "Praia do Campeche", desc: "Natureza selvagem, ondas perfeitas e a mística Ilha do Campeche.", img: "img.praias/Praia do Campeche.png", cat: "Sul" }
    ],
    praias: [
        // --- NORTE DA ILHA ---
        { nome: "praia Jurerê", desc: "Águas calmas e quentes, excelente para famílias com excelente infraestrutura.", regiao: "Norte", img: "img.praias/praia jurere.png", temp: "25°C", lotacao: "Alta" },
        { nome: "Jurerê Internacional", desc: "Sinónimo de luxo, mansões e beach clubs exclusivos com festas sunset.", regiao: "Norte", img: "img.praias/Jurerê Internacional.png", temp: "25°C", lotacao: "Muito Alta" },
        { nome: "Canasvieiras", desc: "Um dos destinos mais procurados por turistas do Mercosul, mar tranquilo e comércio forte.", regiao: "Norte", img: "img.praias/canasvieiras.png", temp: "24°C", lotacao: "Muito Alta" },
        { nome: "Cachoeira do Bom Jesus", desc: "Extensão de Canasvieiras, com faixa de areia larga e águas convidativas.", regiao: "Norte", img: "img.praias/cachoeira.png", temp: "24°C", lotacao: "Média" },
        { nome: "Ponta das Canas", desc: "Praia charmosa na ponta norte da ilha com colónias de pescadores.", regiao: "Norte", img:"img.praias/Praia de Ponta das Canas.png", temp: "23°C", lotacao: "Média" },
        { nome: "Lagoinha (do Norte)", desc: "Pequena e abrigada, com formato de ferradura e mar cristalino.", regiao: "Norte", img: "img.praias/Praia da Lagoinha do Norte .png", temp: "24°C", lotacao: "Média" },
        { nome: "Praia Brava", desc: "Paraíso dos surfistas com mar agitado, miradouro deslumbrante e condomínios de luxo.", regiao: "Norte", img:"img.praias/Praia Brava.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Ingleses", desc: "Infraestrutura completa, dunas incríveis e ótima para todas as idades.", regiao: "Norte", img: "img.praias/Praia dos Ingleses .png", temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Santinho", desc: "História e natureza encontram-se. Famosa pelo resort e pelas inscrições rupestres.", regiao: "Norte", img: "img.praias/Praia do Santinho.png", temp: "23°C", lotacao: "Alta" },
        { nome: "Praia do Forte", desc: "Junto à histórica Fortaleza de São José da Ponta Grossa. Mar calmo e extenso.", regiao: "Norte", img: "img.praias/Praia do Forte.png", temp: "24°C", lotacao: "Média" },
        { nome: "Praia da Daniela", desc: "Mar calmo e quente que parece uma lagoa. Ideal para crianças e famílias.", regiao: "Norte", img: "img.praias/Praia da Daniela.png", temp: "25°C", lotacao: "Média" },
        { nome: "Sambaqui", desc: "Raízes açorianas fortes, gastronomia focada em ostras e cenário bucólico.", regiao: "Norte", img: "img.praias/Sambaqui.png", temp: "23°C", lotacao: "Baixa" },
        { nome: "Santo Antônio de Lisboa", desc: "Um dos bairros mais antigos de Florianópolis, com arquitetura colonial e pôr do sol famoso.", regiao: "Norte", img: "img.praias/Santo Antônio de Lisboa.png", temp: "22°C", lotacao: "Média" },
        { nome: "Cacupé", desc: "Orla requintada com restaurantes sofisticados e vista espetacular para a Beira-Mar.", regiao: "Norte", img:"img.praias/Cacupé.png", temp: "23°C", lotacao: "Baixa" },

        // --- LESTE DA ILHA ---
        { nome: "Barra da Lagoa", desc: "O maior núcleo pesqueiro da ilha, com o Canal da Barra e piscinas naturais.", regiao: "Leste", img: "img.praias/Barra da Lagoa.png", temp: "22°C", lotacao: "Muito Alta" },
        { nome: "Prainha da Barra", desc: "Pequena e escondida, acessível por uma corta trilha na Barra da Lagoa.", regiao: "Leste", img: "img.praias/Prainha da Barra.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia Mole", desc: "Ponto de encontro da viajem ativa, surfistas, parapente e bars com DJs.", regiao: "Leste", img: "img.praias/Praia mole.png", temp: "23°C", lotacao: "Alta" },
        { nome: "Praia da Galheta", desc: "Acessível apenas por trilha e reservada para o naturismo (opcional).", regiao: "Leste", img:"img.praias/praia da galheta.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia da Joaquina", desc: "Reconhecimento internacional no surf. Dunas imensas famosas para a prática de sandboard.", regiao: "Leste", img: "img.praias/Praia da Joaquina.png", temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Gravatá", desc: "Trilha escondida, com relvados perfeitos para piquenique e mar aberto.", regiao: "Leste", img:"img.praias/Praia do Gravatá.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia do Moçambique", desc: "A maior extensão de areia da ilha (12km). Selvagem e preservada dentro de um parque estadual.", regiao: "Leste", img: "img.praias/Mozambique.png", temp: "21°C", lotacao: "Baixa" },

        // --- SUL DA ILHA ---
        { nome: "Praia do Campeche", desc: "Mar aberto de águas cristalinas com vista magnífica para a Ilha do Campeche.", regiao: "Sul", img: "img.praias/Praia do Campeche.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia da Armação", desc: "Tradicional vila de pescadores, com a icónica Igreja de Sant'Ana.", regiao: "Sul", img:"img.praias/praia da armação Floripa.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Matadeiro", desc: "Paraíso do surf no Sul da ilha. Acessível apenas atravessando o rio.", regiao: "Sul", img: "img.praias/Praia do Matadeiro.png", temp: "21°C", lotacao: "Média" },
        { nome: "Praia do Morro das Pedras", desc: "Rodeada de rochas escuras, com ondas fortes e um miradouro espetacular no Convento.", regiao: "Sul", img:"img.praias/morro das pedras.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Pântano do Sul", desc: "Famosa pelos restaurantes tradicionais à beira-mar e pela pesca da tainha.", regiao: "Sul", img: "img.praias/Praia Pantano do Sul.png", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Açores", desc: "Tranquila e com extensa faixa de areia, excelente para relaxar em família.", regiao: "Sul", img:"img.praias/Praia dos Açores.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia da Solidão", desc: "Cercada pela Mata Atlântica exuberante, possui ainda uma cascata escondida.", regiao: "Sul", img: "img.praias/praia da solidão.png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Saquinho", desc: "Isolada, acessível por uma trilha cimentada através do Morro. Perfeita para desconectar.", regiao: "Sul", img:"img.praias/Praia do Saquinho.png", temp: "20°C", lotacao: "Muito Baixa" },
        { nome: "Praia da Lagoinha do Leste", desc: "Frequentemente eleita a mais bela da ilha. Selvagem, sem acesso rodoviário, ideal para trilhas.", regiao: "Sul", img: "img.praias/Lagoinha do Leste .png", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia de Naufragados", desc: "No extremo sul da ilha. História em ruínas e natureza forte ao redor do farol.", regiao: "Sul", img: "img.praias/Praia dos naufragados.png", temp: "20°C", lotacao: "Baixa" },
        { nome: "Ribeirão da Ilha", desc: "Polo gastronómico das ostras e um dos locais com arquitetura colonial açoriana mais preservada.", regiao: "Sul", img: "img.praias/Ribeirão da Ilha .png", temp: "23°C", lotacao: "Média" },
        { nome: "Tapera", desc: "Mar raso, calmo e águas quentes. Uma praia mais nativa e residencial.", regiao: "Sul", img: "img.praias/Praia da Tapera.png", temp: "25°C", lotacao: "Baixa" },

        // --- CONTINENTAL / CENTRO ---
        { nome: "Praia de Itaguaçu", desc: "Vista maravilhosa para o pôr do sol, cercada por pedras folclóricas cheias de lendas açorianas.", regiao: "Centro", img:"img.praias/Praia de Itaguaçu.png", temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia das Palmeiras", desc: "Pequena e tranquila, no coração da região continental com foco gastronómico ao redor.", regiao: "Centro", img: "img.praias/Praia das Palmeiras.png", temp: "23°C", lotacao: "Baixa" },
        { nome: "Praia da Saudade", desc: "Praia urbanizada da região de Coqueiros, ideal para caminhadas no calçadão à beira-mar.", regiao: "Centro", img: "img.praias/Praia da Saudade.png", temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Meio", desc: "Faz parte do circuito gastronómico de Coqueiros. Mais frequentada por moradores para exercício.", regiao: "Centro", img: "img.praias/Praia do meio.png", temp: "23°C", lotacao: "Média" },
        { nome: "Praia do Bom Abrigo", desc: "Reduto charmoso, seguro e bem cuidado, ótimo para contemplar a ponte Hercílio Luz ao longe.", regiao: "Centro", img: "img.praias/Praia Bom Abrigo.png", temp: "22°C", lotacao: "Baixa" }
    ],
hospedagem: [
        { nome: "IL Campanario Villaggio Resort", local: "Jurerê Internacional, Florianópolis", preco: "R$ 1.200 / noite", rating: 5, desc: "Sofisticação internacional a poucos metros do mar com estrutura completa de piscinas, spa e alta gastronomia.", img: "https://lh3.googleusercontent.com/proxy/Xvmb0oBpRduy-Ou27tEOYrkDSFNvl1VBqypYrC8aEQFJEUt0ITV7o0ZJxfJokkbGhWFphcCCqJfBJBbnzaEMQBJTii2zMcjlLL5bISqhhXh9tVl8TCE_EQcUnr8y2A9oODMsAf7YpXGIaRTEjMaoGKglHIABbg=s680-w680-h510-rw" },
        { nome: "Hotel Costa do Santinho Resort", local: "Santinho, Florianópolis", preco: "R$ 2.100 / noite", rating: 5, desc: "Resort de luxo all-inclusive com vista exclusiva para o mar, spa premiado, piscinas aquecidas e quadras de esporte.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b3/e4/0f/costao-do-santinho-resort.jpg?w=900&h=500&s=1" },
        { nome: "Boutique Hotel Quinta das Videiras", local: "Lagoa da Conceição, Florianópolis", preco: "R$ 1.400 / noite", rating: 5, desc: "Arquitetura estilo clássico do século XIX com design contemporâneo, jardim privativo e pequeno-almoço gourmet.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/f0/27/f4/hotel-boutique-quinta.jpg?w=900&h=500&s=1" },
        { nome: "Pousada dos Chás Hotel Boutique", local: "Jurerê Tradicional, Florianópolis", preco: "R$ 680 / noite", rating: 4, desc: "Ambiente acolhedor inspirado na tradição do chá inglês, obras de arte exclusivas e proximidade com a praia.", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412353040.jpg?k=6c75b68f9e0c2cf43e319c82378e823500b61aa123f139f4a8c5a0b3aaaeae6d&o=" },
        { nome: "Hotel \"Hotel-Escola\" Senac Downtown", local: "Centro, Florianópolis", preco: "R$ 450 / noite", rating: 4, desc: "Localização premium no centro da cidade, acomodações modernas, ideal para negócios e turismo cultural.", img: "https://grandehotelsenac.com.br/wp-content/uploads/2025/02/GHJ_Drone_501.jpg" },
        { nome: "Pousada Recanto dos Bambus", local: "Campeche, Florianópolis", preco: "R$ 480 / noite", rating: 4, desc: "Suítes confortáveis em meio à natureza do Campeche, ambiente tranquilo e fácil acesso ao mar.", img: "https://recanto-dos-bambus-pousada.hotelflorianopolis.com/data/Images/OriginalPhoto/15387/1538732/1538732422/image-florianopolis-recanto-dos-bambus-pousada-21.JPEG" },
        { nome: "Pousada Quinta da Bica d'Água", local: "Carvoeira, Florianópolis", preco: "R$ 520 / noite", rating: 4, desc: "Charme cercado por jardins tropicais nativos, quartos elegantes e excelente pequeno-almoço regional.", img: "https://lh6.googleusercontent.com/proxy/tX4kJdjaVQmvRhK-Osb5HmscNUauKX4JDjhpFgdIyi2I-oWRqk1Evt70y7nLxNBASotiUK-mi0DLtjPmDYNj0dsHstTfFlNrIr0M7pD1WREdkzd0-Zc5DzwjyqmUhc44Iz1hn0Og" },
        { nome: "Hotel Novotel Florianópolis", local: "Centro, Florianópolis", preco: "R$ 690 / noite", rating: 4, desc: "Conforto moderno na Avenida Beira-Mar Norte, com piscina infinita, academia e vista deslumbrante para a baía.", img: "https://www.ahstatic.com/photos/5947_ho_00_p_1024x768.jpg" },
        { nome: "Selina Floripa", local: "Mole / Lagoa da Conceição, Florianópolis", preco: "R$ 310 / noite", rating: 3, desc: "Alojamento focado em comunidade e ecoturismo, ideal para nômades digitais e quem procura contato com a natureza.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXMch2fbnQybU8r10W6NOmq_gIeCf5nbCVQ&s" },
        { nome: "Blue Tree Premium Florianópolis", local: "Centro, Florianópolis", preco: "R$ 580 / noite", rating: 4, desc: "Quartos amplos com serviços executivos, piscina no terraço e ao lado do Beiramar Shopping.", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312823335.jpg?k=4caf5656af89b7d21ac5e46d57e33ea862fa0a5195413e9011a24cbc69d947e2&o=" }
    ],

    gastronomia: [
        { nome: "Ostradamus", cat: "frutos-do-mar", local: "Ribeirão da Ilha", desc: "Ostras vivas depuradas e o melhor polvo grelhado num trapiche histórico.", preco: "R$ 180 - R$ 350", img: "" },
        { nome: "Artusi Ristorante", cat: "italiana", local: "Centro", desc: "Alta culinária italiana com toques inovadores pelo chef de prestígio.", preco: "R$ 150 - R$ 280", img: "" },
        { nome: "Jay Bistrô", cat: "contemporanea", local: "Jurerê", desc: "Menu de autor sofisticado e harmonizações com grandes rótulos mundiais.", preco: "R$ 220 - R$ 450", img: "" }
    ],
    eventos: [
        { nome: "Festival Gastronômico Floripando", data: "2026-06-15", local: "Praça Central, Canasvieiras, Florianópolis", desc: "Mais de 40 chefs locais e internacionais, street food premium e experiências sensoriais no coração de Canasvieiras.", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1400&auto=format&fit=crop" },
    { nome: "Sunset Music - Jurerê", data: "2026-06-22", local: "Arena Praia, Jurerê Internacional, Florianópolis", desc: "DJs internacionais e produção audiovisual para sunsets exclusivos à beira-mar.", img: "img.praias/Jurerê Internacional.png" },
        { nome: "Trilha & Eco Aventura - Lagoinha do Leste", data: "2026-06-28", local: "Ponto de Encontro: Vilas, Lagoinha do Leste, Florianópolis", desc: "Expedição guiada com biólogos locais, vistas panorâmicas e piquenique sustentável na ilha.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Campeonato Regional de Surf - Praia Mole", data: "2026-07-05", local: "Área de Competições, Praia Mole, Florianópolis", desc: "Atletas nacionais e internacionais competem com premiações e shows locais.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Noite de Arte Contemporânea - Galeria Floripando", data: "2026-07-12", local: "Galeria Floripando, Centro Histórico, Florianópolis", desc: "Exposições, performances e debates com curadores e artistas locais.", img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Passeio Gastronômico ao Pôr do Sol (Barco)", data: "2026-07-19", local: "Marina da Barra da Lagoa, Florianópolis", desc: "Experiência flutuante com menu degustação e vista exclusiva do pôr do sol sobre a ilha.", img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Feira de Artesanato & Design", data: "2026-08-01", local: "Largo da Catedral, Centro, Florianópolis", desc: "Expositores locais com peças autorais, workshops e atividades para famílias.", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Festival de Cinema ao Ar Livre", data: "2026-08-10", local: "Praça XV / Praça Central, Centro, Florianópolis", desc: "Sessões noturnas ao ar livre com debates e presença de realizadores locais.", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Regata da Ilha - Baía Norte", data: "2026-09-05", local: "Marina da Baía Norte, Florianópolis", desc: "Provas náuticas e celebração náutica com atividades paralelas na marina.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Mercado Noturno - Sabores do Mar", data: "2026-09-20", local: "Avenida Litoral, Ribeirão da Ilha, Florianópolis", desc: "Bancas de produtores, música ao vivo e experiências gastronômicas regionais no antigo trapiche.", img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Santo Antônio Jazz Night", data: "2026-10-03", local: "Praça Principal, Santo Antônio de Lisboa, Florianópolis", desc: "Noite de jazz com bandas locais e menus especiais nos restaurantes à volta da praça.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop" },
        { nome: "Eco Run - Campeche", data: "2026-10-17", local: "Orla do Campeche, Florianópolis", desc: "Corrida de 5km com pontos de conscientização ambiental e limpeza de praia pós-evento.", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1400&auto=format&fit=crop" }
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
        const pass = document.getElementById('login-pass') ? document.getElementById('login-pass').value : '';

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
        // preferir IMAGE_MAP específico se disponível
        const imgUrl = (typeof IMAGE_MAP !== 'undefined' && IMAGE_MAP[p.nome]) ? IMAGE_MAP[p.nome] : getPraiaImage(p.nome);
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
        // formatar data para apresentação (dd MMM)
        let displayDate = e.data;
        try {
            const d = new Date(e.data);
            const opts = { day: '2-digit', month: 'short' };
            displayDate = d.toLocaleDateString('pt-PT', opts);
        } catch (err) {
            // manter e.data
        }

        eventosGrid.innerHTML += `
            <div class="card event-card">
                <div class="card-img-wrapper">
                    <img src="${e.img}" alt="${e.nome}">
                    <div class="event-date-badge">${displayDate}</div>
                </div>
                <div class="card-body">
                    <h3>${e.nome}</h3>
                    <p class="event-desc">${e.desc}</p>
                    <div class="card-footer" style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
                        <div style="display:flex; flex-direction:column; gap:6px;">
                            <span><i class="fas fa-map-marker-alt"></i> ${e.local}</span>
                        </div>
                        <div style="display:flex; gap:8px; align-items:center;">
                            <button class="btn-fav" onclick="toggleFavorite('${e.nome}')"><i class="far fa-heart"></i> Favoritar</button>
                                <button class="btn-primary" onclick="showEventDetails('${e.nome.replace(/'/g, "\\'")}')">Ver Detalhes</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Atualiza o estado de cada evento: 'past', 'today', 'upcoming'
function updateEventsState() {
    if (!Array.isArray(DATA.eventos)) return;
    const now = new Date();
    DATA.eventos.forEach(ev => {
        const d = new Date(ev.data);
        // normalizar para data apenas
        const evDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (evDate.getTime() < today.getTime()) ev._state = 'past';
        else if (evDate.getTime() === today.getTime()) ev._state = 'today';
        else ev._state = 'upcoming';
    });

    // ordenar por data ascendente
    DATA.eventos.sort((a, b) => new Date(a.data) - new Date(b.data));
}

// Atualiza eventos sistematicamente a cada 60s
function startEventsAutoRefresh() {
    updateEventsState();
    renderEventos();
    // refresh a cada 60 segundos
    setInterval(() => {
        updateEventsState();
        renderEventos();
    }, 60 * 1000);
}

    function showEventDetails(eventName) {
        const ev = DATA.eventos.find(x => x.nome === eventName);
        if (!ev) return alert('Evento não encontrado.');

        // preencher modal
        document.getElementById('modal-event-img').src = ev.img || '';
        document.getElementById('modal-event-title').innerText = ev.nome;
        try {
            const d = new Date(ev.data);
            document.getElementById('modal-event-date').innerText = d.toLocaleString('pt-PT', { dateStyle: 'full', timeStyle: 'short' });
        } catch (err) {
            document.getElementById('modal-event-date').innerText = ev.data;
        }
        document.getElementById('modal-event-local').innerText = ev.local || '';
        document.getElementById('modal-event-desc').innerText = ev.desc || '';

        document.getElementById('event-modal').classList.remove('hidden');
    }

    function closeEventModal() {
        document.getElementById('event-modal').classList.add('hidden');
        document.getElementById('modal-event-img').src = '';
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
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
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

    // construir mapa de imagens e só depois renderizar as grelhas
    buildImageMap();
    applyImageAssignments();
    renderGrids();
    updateUI();
    // iniciar auto refresh de eventos (estado e re-render)
    startEventsAutoRefresh();

    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.reveal', { delay: 300, distance: '50px', origin: 'bottom' });
    }
});

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('active');
}

// --- CHAT CONCIERGE IA ---
function toggleChat() {
    const win = document.getElementById('chat-window');
    if (win) win.classList.toggle('hidden');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    if (!input || !input.value.trim() || !body) return;

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
    const inputEl = document.getElementById('main-search-input');
    if (!inputEl) return;
    const searchTerm = inputEl.value.toLowerCase();
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
function switchProfileTab(tabName, ev) {
    // Ocultar todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    // Mostrar o selecionado
    const tab = document.getElementById(`tab-${tabName}`);
    if (tab) {
        tab.classList.add('active');
    }

    // Marcar botão ativo (se evento fornecido)
    if (ev && ev.currentTarget) {
        ev.currentTarget.classList.add('active');
    }
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

function applyImageAssignments() {
    if (typeof DATA === 'undefined' || !Array.isArray(DATA.praias)) return;
    for (const p of DATA.praias) {
        if (IMAGE_MAP[p.nome]) {
            p.img = IMAGE_MAP[p.nome];
        } else if (!p.img || p.img === '') {
            p.img = DEFAULT_IMAGE;
        } else {
            // tentar casar o ficheiro especificado
            const candidate = p.img.split('/').pop();
            const match = findBestFileMatchByName(candidate) || findBestFileMatchByName(p.nome);
            p.img = match ? `img.praias/${match}` : p.img;
        }
    }
}
// CORREÇÃO: Removida a chave extra que estava fechando o arquivo incorretamente aqui.