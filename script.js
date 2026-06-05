// JV Studio — configuração compartilhada
// ⚙️ Edite os números de WhatsApp e Instagram aqui se quiser
window.JV = {
  unico: {
    whatsapp: "5516988175569",
    msg: "Olá! Gostaria de agendar um horário na Único Barbearia."
  },
  jessica: {
      whatsapp: "5516982164099",
    msg: "Olá! Gostaria de agendar um horário no Espaço Jessica Messias."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whats]").forEach(el => {
    const key = el.getAttribute("data-whats");
    const cfg = window.JV[key];
    if (cfg) el.href = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(cfg.msg)}`;
  });
});
