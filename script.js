const CONFIG = {
    whatsappNumber: "+55 49 9143-9222",
    instagramUser: "https://www.instagram.com/detalhesqueencantamke?igsh=MXY5ZXp3OWoyam9jaw%3D%3D&utm_source=qr", 
    whatsappMessage: "Olá! Gostaria de fazer um orçamento!"
};

function abrirWhatsApp() {
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`, '_blank');
}

function abrirInstagram() { 
    window.open(CONFIG.instagramUser, '_blank'); 
}

