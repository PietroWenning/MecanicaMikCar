let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 8000)
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
document.getElementById("radio"+count).checked = true;
}
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
let carrosel = 1;
document.getElementById("carrosel1").checked = true;
setInterval(function() {
  nextCarrosel();
}, 8000);
function nextCarrosel() {
  carrosel++;
  if (carrosel > 7) {
    carrosel = 1;
  }
  document.getElementById("carrosel" + carrosel).checked = true;
}
