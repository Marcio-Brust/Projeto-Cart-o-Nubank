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

function logoCartao() {
  logo.innerHTML = '<img src="./IMG/Nubank_logo_2021.svg-brilho.png" alt="" >';
}
logoRoxo.addEventListener("click", logoCartao);

function logoCartaoBrnaco() {
  logo.innerHTML =
    '<img src="./IMG/Nubank_logo_2021.svg-branco-brilho.png" alt="" >';
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

function boxColor() {
  const cor = cartao.classList.length > 1;
  const cores = this.className.toString();
  if (cor) {
    cartao.classList.remove(
      "active",
      "roxo",
      "azul",
      "preto",
      "violeta",
      "azulEscuro",
      "degrader"
    );
  }
  cartao.classList.add(cores);
}

colorBox.forEach((item) => {
  item.addEventListener("click", boxColor);
});
