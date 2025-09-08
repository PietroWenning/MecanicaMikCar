// === MENU MOBILE ===
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.querySelector('.overlay-menu');
const btnFechar = document.querySelector('.menu-mobile .btn-fechar');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu');
  overlay.style.display = 'block';
});

btnFechar.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu');
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu');
  overlay.style.display = 'none';
});


// === SLIDER AUTOMÁTICO ===
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 8000);

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

// === SERVIÇOS - MOSTRAR PARÁGRAFO ===
function Mostrarparagrafo(botao) {
  const divServico = botao.closest('.servicos');
  const paragrafo = divServico.querySelector('.paragrafo');

  if (paragrafo.classList.contains('mostrar')) {
    paragrafo.classList.remove('mostrar');
    setTimeout(() => paragrafo.style.display = 'none', 300);
  } else {
    paragrafo.style.display = 'flex';
    setTimeout(() => paragrafo.classList.add('mostrar'), 10);
  }
}

// === CARROSSEL DE CARROS AUTOMÁTICO ===
document.addEventListener("DOMContentLoaded", function () {
  let carrosel = 1;
  document.getElementById("carrosel1").checked = true;

  setInterval(function () {
    carrosel++;
    if (carrosel > 7) {
      carrosel = 1;
    }
    document.getElementById("carrosel" + carrosel).checked = true;
  }, 8000);
});

// === SMOOTH SCROLL PARA LINKS DE ANCORAGEM ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});