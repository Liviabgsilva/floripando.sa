// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---
<<<<<<< HEAD
=======
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
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0

// Mapeamento exato com os nomes dos arquivos de imagem que você enviou
const PRAIA_IMAGES = {
<<<<<<< HEAD
    // Norte
    "Jurerê Internacional": "Jurerê Internacional.png",
    "Canasvieiras": "canasvieiras.png",
    "Cachoeira do Bom Jesus": "cachoeira.png",
    "Cacupé": "Cacupé.png",
    "Praia Brava": "Praia Brava.png",
=======
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
        { nome: "Ostradamus", cat: "frutos-do-mar", local: "Ribeirão da Ilha, Florianópolis", desc: "Casa icônica de ostras e frutos do mar, com trapiche sobre a água e decoração náutica deslumbrante.", preco: "R$ 120 - R$ 320", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop", site: "https://www.ostradamus.com.br", rating: 5 },
        { nome: "Artusi Ristorante", cat: "italiana", local: "Centro, Florianópolis", desc: "Alta gastronomia italiana assinada pelo chef Alysson Müller, famoso por seus nhoques e massas artesanais.", preco: "R$ 140 - R$ 300", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/artusiristorante", rating: 5 },
        { nome: "Jay Bistrô", cat: "contemporanea", local: "Jurerê Internacional, Florianópolis", desc: "Menu de autor contemporâneo sofisticado com técnicas internacionais aplicadas a peixes e carnes nobres.", preco: "R$ 180 - R$ 420", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/jaybistro", rating: 5 },
        { nome: "Restaurante Rancho Açoriano", cat: "frutos-do-mar", local: "Santo Antônio de Lisboa, Florianópolis", desc: "Tradição açoriana legítima à beira-mar, com cultivo próprio de mariscos e a famosa tainha recheada.", preco: "R$ 80 - R$ 220", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", site: "https://www.ranchoacoriano.com.br", rating: 5 },
        { nome: "Rosso Restro", cat: "frutos-do-mar", local: "Santo Antônio de Lisboa, Florianópolis", desc: "Especializado na culinária manezinha premium, famoso pelo polvo grelhado considerado um dos melhores do país.", preco: "R$ 130 - R$ 290", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/rossorestro", rating: 5 },
        { nome: "Pescador Eco Gastronomia", cat: "frutos-do-mar", local: "Campeche, Florianópolis", desc: "Gastronomia caiçara com ingredientes frescos e orgânicos, em um ambiente rústico e integrado à natureza.", preco: "R$ 90 - R$ 190", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/pescadorecogastronomia", rating: 4 },
        { nome: "Amalfi Resto Bar", cat: "contemporanea", local: "Santo Antônio de Lisboa, Florianópolis", desc: "Alta gastronomia inspirada na Costa Amalfitana com toques da ilha, perfeito para um jantar ao pôr do sol.", preco: "R$ 110 - R$ 260", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/amalfiresobar", rating: 4 },
        { nome: "Forneria San Lazzaro", cat: "italiana", local: "Centro, Florianópolis", desc: "Pizzas artesanais de fermentação natural no estilo napolitano e entradas italianas sofisticadas.", preco: "R$ 60 - R$ 130", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", site: "https://linktr.net/forneriasanlazzaro", rating: 4 },
        { nome: "Mar Massas", cat: "italiana", local: "Lagoa da Conceição, Florianópolis", desc: "Restaurante tradicional no topo do morro com vista incrível da Lagoa, massas artesanais e frutos do mar.", preco: "R$ 95 - R$ 210", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/marmassas", rating: 4 },
        { nome: "Muamba Bar", cat: "asiatica", local: "Lagoa da Conceição, Florianópolis", desc: "Gastronomia asiática contemporânea e coquetelaria autoral de alta qualidade em ambiente super descontraído.", preco: "R$ 50 - R$ 120", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop", site: "https://www.instagram.com/muamba.bar", rating: 4 }
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
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0
    
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

<<<<<<< HEAD
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.remove("hidden");
        setTimeout(() => targetView.classList.add("active"), 50);
        window.scrollTo({ top: 0, behavior: 'smooth' });
=======
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
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0
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

<<<<<<< HEAD
function loginUser(user) {
    currentUser = user;
    localStorage.setItem("activeSession", user.email);
=======
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
                            <button class="btn-fav" data-item="${d.nome}" data-tooltip="Guardar" onclick="toggleFavorite('${d.nome}')"><i class="far fa-heart"></i> Guardar</button>
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
            // ensure safe attributes
            const safeName = h.nome.replace(/"/g, '&quot;');
            hospGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${h.img}" alt="${safeName}">
                        <span class="badge-tag">${h.local}</span>
                    </div>
                    <div class="card-body">
                        <h3>${h.nome}</h3>
                        <p>${h.desc}</p>
                        <div class="hotel-meta">
                            <div class="hotel-rating">${'★'.repeat(Math.max(0, Math.min(5, h.rating || 0)))}</div>
                            <div class="hotel-price">${h.preco}</div>
                        </div>
                        <div style="margin-top:14px; display:flex; gap:10px; align-items:center;">
                            <button class="btn-primary" onclick="showHotelDetails('${encodeURIComponent(h.nome)}')">Ver Detalhes</button>
                            <button class="btn-fav" data-item="${h.nome}" data-tooltip="Guardar" onclick="toggleFavorite('${h.nome.replace(/'/g, "\\'")}')"><i class="far fa-heart"></i></button>
                        </div>
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
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0
    
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
<<<<<<< HEAD
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

=======

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
                        <button class="btn-fav" style="align-self: flex-end; margin-top: 10px;" data-item="${p.nome}" data-tooltip="Guardar" onclick="toggleFavorite('${p.nome}')"><i class="far fa-heart"></i> Guardar</button>
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
        const safeName = g.nome.replace(/"/g, '&quot;');
        gastroGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${g.img}" alt="${safeName}" loading="lazy">
                    <span class="badge-tag">${g.cat}</span>
                </div>
                <div class="card-body">
                    <h3>${g.nome}</h3>
                    <p class="event-desc">${g.desc}</p>
                    <div class="hotel-meta" style="margin-top:12px;">
                        <div class="hotel-price">${g.preco}</div>
                        <div class="hotel-rating">${'★'.repeat(Math.max(0, Math.min(5, g.rating || 0)))}</div>
                    </div>
                    <div class="card-footer" style="margin-top:12px; display:flex; justify-content:space-between; align-items:center;">
                        <span><i class="fas fa-map-marker-alt"></i> ${g.local}</span>
                        <div style="display:flex; gap:8px; align-items:center;">
                            <a class="btn-visit" href="${g.site || '#'}" target="_blank" title="Visitar site">Visitar</a>
                            <button class="btn-primary" onclick="showGastroDetails('${encodeURIComponent(g.nome)}')">Ver Detalhes</button>
                        </div>
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
        // set modal favorite button data-item (visual active handled only on click)
        const me = document.getElementById('modal-event-fav');
        if (me) me.setAttribute('data-item', ev.nome);
    }

    function closeEventModal() {
        document.getElementById('event-modal').classList.add('hidden');
        document.getElementById('modal-event-img').src = '';
    }

    // Hotel modal handlers
    function showHotelDetails(encodedName) {
        const name = decodeURIComponent(encodedName);
        const h = DATA.hospedagem.find(x => x.nome === name);
        if (!h) return alert('Hospedagem não encontrada.');

        document.getElementById('modal-hotel-img').src = h.img || '';
        document.getElementById('modal-hotel-title').innerText = h.nome;
        document.getElementById('modal-hotel-local').innerText = h.local || '';
        document.getElementById('modal-hotel-desc').innerText = h.desc || '';
        document.getElementById('modal-hotel-rating').innerText = '★'.repeat(Math.max(0, Math.min(5, h.rating || 0)));
        document.getElementById('modal-hotel-price').innerText = h.preco || '';
        // prefer a booking link if present, otherwise fallback to external search
        const bookingLink = h.booking || `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(h.nome + ' ' + h.local)}`;
        // primary CTA: reservar (can be a partner link)
        document.getElementById('modal-hotel-book').href = bookingLink;

        // site do hotel: se houver campo `site` use-o; senão usar bookingLink
        const siteLink = h.site || bookingLink;
        const siteEl = document.getElementById('modal-hotel-site');
        if (siteEl) {
            siteEl.href = siteLink;
            try {
                const u = new URL(siteLink);
                siteEl.innerText = `Visitar site: ${u.hostname.replace('www.', '')}`;
            } catch (err) {
                siteEl.innerText = 'Visitar site do hotel';
            }
        }

        document.getElementById('hotel-modal').classList.remove('hidden');
        const mh = document.getElementById('modal-hotel-book');
        // configure modal fav if exists
        const mhf = document.getElementById('modal-hotel-book');
        // hotel modal uses modal-hotel-book as CTA; fav button is not in hotel modal header
        const favBtn = document.querySelector(`#hotel-modal .btn-fav`);
        if (favBtn) favBtn.setAttribute('data-item', h.nome);
    }

    function closeHotelModal() {
        document.getElementById('hotel-modal').classList.add('hidden');
        const img = document.getElementById('modal-hotel-img');
        if (img) img.src = '';
    }

    // Gastronomia modal handlers
    function showGastroDetails(encodedName) {
        const name = decodeURIComponent(encodedName);
        const g = DATA.gastronomia.find(x => x.nome === name);
        if (!g) return alert('Restaurante não encontrado.');

        document.getElementById('modal-gastro-img').src = g.img || '';
        document.getElementById('modal-gastro-title').innerText = g.nome;
        document.getElementById('modal-gastro-local').innerText = g.local || '';
        document.getElementById('modal-gastro-desc').innerText = g.desc || '';
        document.getElementById('modal-gastro-price').innerText = g.preco || '';
        document.getElementById('modal-gastro-rating').innerText = '★'.repeat(Math.max(0, Math.min(5, g.rating || 0)));
        document.getElementById('modal-gastro-site').href = g.site || '#';

        document.getElementById('gastro-modal').classList.remove('hidden');
        const mg = document.getElementById('modal-gastro-fav');
        if (mg) mg.setAttribute('data-item', g.nome);
    }

    function closeGastroModal() {
        document.getElementById('gastro-modal').classList.add('hidden');
        const img = document.getElementById('modal-gastro-img');
        if (img) img.src = '';
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
    // visually update buttons that reference this item
    const buttons = document.querySelectorAll(`[data-item]`);
    const isFavNow = currentUser.favorites.includes(itemName);
    buttons.forEach(b => {
        if (b.getAttribute('data-item') === itemName) {
            if (isFavNow) {
                b.classList.add('active');
                const ic = b.querySelector('i');
                if (ic) { ic.classList.remove('far'); ic.classList.add('fas'); }
                b.setAttribute('data-tooltip', 'Remover');
            } else {
                b.classList.remove('active');
                const ic = b.querySelector('i');
                if (ic) { ic.classList.remove('fas'); ic.classList.add('far'); }
                b.setAttribute('data-tooltip', 'Guardar');
            }
        }
    });

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

    // helper to safely escape single quotes for inline onclick handlers
    function esc(s) {
        return (s || '').replace(/'/g, "\\'");
    }

    // map favorites into categories
    const groups = { praias: [], eventos: [], hospedagem: [], gastronomia: [], outros: [] };

    currentUser.favorites.forEach(fname => {
        const norm = simpleNormalize(fname);
        let found = null;

        found = DATA.praias && DATA.praias.find(p => simpleNormalize(p.nome) === norm);
        if (found) { groups.praias.push(found); return; }

        found = DATA.eventos && DATA.eventos.find(e => simpleNormalize(e.nome) === norm);
        if (found) { groups.eventos.push(found); return; }

        found = DATA.hospedagem && DATA.hospedagem.find(h => simpleNormalize(h.nome) === norm);
        if (found) { groups.hospedagem.push(found); return; }

        found = DATA.gastronomia && DATA.gastronomia.find(g => simpleNormalize(g.nome) === norm);
        if (found) { groups.gastronomia.push(found); return; }

        // fallback: unknown item, keep raw name
        groups.outros.push({ nome: fname });
    });

    // small renderer for a section
    function renderSection(title, items, type) {
        if (!items || items.length === 0) return '';
        let html = `<div class="fav-section"><h3 style="margin-top:10px;">${title}</h3>`;
        items.forEach(it => {
            const name = it.nome || it.name || '';
            const safeName = esc(name);
            let thumb = '';
            if (type === 'praias') {
                const imgUrl = IMAGE_MAP && IMAGE_MAP[it.nome] ? IMAGE_MAP[it.nome] : getPraiaImage(it.nome);
                thumb = `<img src="${imgUrl}" style="width:120px; height:80px; object-fit:cover; border-radius:8px; margin-right:12px;">`;
            } else if (it.img) {
                thumb = `<img src="${it.img}" style="width:120px; height:80px; object-fit:cover; border-radius:8px; margin-right:12px;">`;
            } else {
                thumb = `<div style="width:120px; height:80px; background:#222; border-radius:8px; margin-right:12px;"></div>`;
            }

            // detail button per type
            let detailsBtn = '';
            if (type === 'eventos') detailsBtn = `<button class="btn-primary" onclick="showEventDetails('${safeName}')">Ver Detalhes</button>`;
            else if (type === 'hospedagem') detailsBtn = `<button class="btn-primary" onclick="showHotelDetails('${encodeURIComponent(name)}')">Ver Detalhes</button>`;
            else if (type === 'gastronomia') detailsBtn = `<button class="btn-primary" onclick="showGastroDetails('${encodeURIComponent(name)}')">Ver Detalhes</button>`;

            // meta info
            let meta = '';
            if (type === 'praias') meta = `<div style="font-size:0.9rem;color:#aaa;">${it.regiao || ''} • ${it.temp || ''} • ${it.lotacao || ''}</div>`;
            else if (type === 'eventos') meta = `<div style="font-size:0.9rem;color:#aaa;">${it.local || ''} • ${it.data || ''}</div>`;
            else if (type === 'hospedagem') meta = `<div style="font-size:0.9rem;color:#aaa;">${it.local || ''} • ${it.preco || ''}</div>`;
            else if (type === 'gastronomia') meta = `<div style="font-size:0.9rem;color:#aaa;">${it.local || ''} • ${it.preco || ''}</div>`;

            html += `
                <div class="fav-item glass" style="display:flex; align-items:center; justify-content:space-between; padding:12px; border-radius:12px; margin-bottom:10px; gap:12px;">
                    <div style="display:flex; align-items:center; gap:12px; flex:1;">
                        ${thumb}
                        <div style="flex:1;">
                            <div style="font-weight:700;">${name}</div>
                            ${meta}
                        </div>
                    </div>
                    <div style="display:flex; gap:8px; align-items:center;">
                        ${detailsBtn}
                        <button class="btn-fav active" data-item="${name}" data-tooltip="Remover" onclick="toggleFavorite('${safeName}')"><i class="fas fa-heart"></i></button>
                    </div>
                </div>`;
        });
        html += `</div>`;
        return html;
    }

    // build HTML for each category in the desired order
    let out = '';
    out += renderSection('Praias', groups.praias, 'praias');
    out += renderSection('Eventos', groups.eventos, 'eventos');
    out += renderSection('Hospedagem', groups.hospedagem, 'hospedagem');
    out += renderSection('Gastronomia', groups.gastronomia, 'gastronomia');
    if (groups.outros.length) out += renderSection('Outros', groups.outros, 'outros');

    favGrid.innerHTML = out;
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
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0
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

<<<<<<< HEAD
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

=======
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

// Enviar formulário de contato
>>>>>>> bdae4f52422ceaf0e36099df9460d967b0f67bd0
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
function toggleFavorito(botao) {
  // O toggle adiciona a classe se ela não existir, e remove se já existir
  botao.classList.toggle('favoritado');
  
  // Opcional: Trocar o símbolo de vazio para cheio dinamicamente
  const coracao = botao.querySelector('.coracao');
  if (botao.classList.contains('favoritado')) {
    coracao.innerHTML = '&#9829;'; // Coração totalmente preenchido (♥)
  } else {
    coracao.innerHTML = '&#9825;'; // Coração vazado (♡)
  }
}