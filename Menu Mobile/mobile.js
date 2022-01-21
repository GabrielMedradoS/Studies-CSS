const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  //para nao abrir e fechar o Menu - devido o UX
  if (event.type === "touchstart") {
    event.preventDefault();
  }

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  //acessibilidade - sabe se existe um botao clicavel
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);

//melhorando a experiencia UX - FICA MAIS RAPIDO NA VERSAO MOBILE
btnMobile.addEventListener("touchstart", toggleMenu);
