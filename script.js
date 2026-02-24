const CONFIG = {
    numeroWhatsapp: "554991439222",
    instagramUrl: "https://www.instagram.com/ke_coracao_criativo/",
    mensagemWhatsapp: "Olá! Gostaria de fazer um orçamento!"
};

function abrirWhatsApp() {
    const url = `https://wa.me/${CONFIG.numeroWhatsapp}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}`;
    window.open(url, "_blank");
}

function abrirInstagram() {
    window.open(CONFIG.instagramUrl, "_blank");
}
