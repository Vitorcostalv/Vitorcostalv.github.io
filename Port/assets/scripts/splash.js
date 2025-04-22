// Inicializa partículas
tsParticles.load("tsparticles", {
    fullScreen: false,
    background: { color: "#000000" },
    particles: {
      color: { value: "#ffffff" },
      links: { enable: true, color: "#ffffff", distance: 150 },
      move: { enable: true, speed: 1 },
      number: { value: 50 },
      size: { value: 2 }
    }
  });
  
  // Redireciona para o portfólio principal
  document.getElementById("enter-portfolio").addEventListener("click", () => {
    window.location.href = "main.html";
  });
  