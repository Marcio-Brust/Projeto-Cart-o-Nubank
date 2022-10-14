const $$ = document.querySelector.bind(document);
const $ = document.querySelectorAll.bind(document);
const nomeCompleto = $$(".nomeCompleto");
const cartao = $$(".cartao");
const nomeCartao = $$(".nomeCartao");
const colorBox = Array.from($("#colorBox"));
const vertical = $$(".vertical");
const horizontal = $$(".horizontal");
const logo = $$(".logo");
const logoRoxo = $$(".logoRoxo");
const logoBranco = $$(".logoBranco");
const header = $$(".header");
const logoMaster = $$(".logoMasterCard");
const masterCard = $$(".masterCard");
const cartaoLogo = $$(".cartaoLogo");
const escolherCor = $$(".escolherCor");

function logoCartao() {
  logo.innerHTML =
    '<img src="./assets/imgs/Nubank_logo_2021.svg-brilho.png" alt="" >';
}
logoRoxo.addEventListener("click", logoCartao);

function logoCartaoBrnaco() {
  logo.innerHTML =
    '<img src="./assets/imgs/Nubank_logo_2021.svg-branco-brilho.png" alt="" >';
}
logoBranco.addEventListener("click", logoCartaoBrnaco);

function movevertical() {
  cartao.classList.add("vertical");
  header.classList.add("active");
  logoMaster.classList.add("vertical");
  masterCard.classList.add("vertical");
  cartaoLogo.classList.add("vertical");
}
function removevertical() {
  cartao.classList.remove("vertical");
  header.classList.remove("active");
  logoMaster.classList.remove("vertical");
  masterCard.classList.remove("vertical");
  cartaoLogo.classList.remove("vertical");
}
vertical.addEventListener("click", movevertical);
horizontal.addEventListener("click", removevertical);

function nome() {
  nomeCartao.innerText = `${this.value}`;
}
function flutuar() {
  cartao.classList.add("active");
}
nomeCompleto.addEventListener("input", nome);
nomeCompleto.addEventListener("click", flutuar);

function boxColor(event) {
  cartao.removeAttribute("style");
  escolherCor.removeAttribute("style");
  if (event.type === "touchstart") event.preventDefault();
  const cor = cartao.classList.length > 1;
  const cores = this.className;
  if (cor) {
    cartao.classList.remove(
      "active",
      "roxo",
      "azul",
      "preto",
      "violeta",
      "azulEscuro",
      "degrader",
      "escolherCor"
    );
  }
  cartao.classList.add(cores);
}
function handleCor() {
  cartao.style.background = `${this.value}`;
  this.style.background = `${this.value}`;
}
escolherCor.addEventListener("input", handleCor);

colorBox.forEach((item) => {
  item.addEventListener("click", boxColor);
});
colorBox.forEach((item) => {
  item.addEventListener("touchstart", boxColor);
});
