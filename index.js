const titulo = document.querySelector(".titulo");
const footer = document.querySelector(".footer");
const popMain = document.querySelector(".modal-main");
const loader = document.querySelector(".loader");
const contenedorPop = document.querySelector(".pop");
const btnclose = document.querySelector(".close");
const btnDark = document.querySelector(".btn-dark");
let vista = window.matchMedia("(max-width: 700px)");

setTimeout(() => {
  loader.classList.add("d-none");
  contenedorPop.classList.remove("d-none");
  btnclose.addEventListener("click", () =>contenedorPop.classList.add("d-none"));
  btnDark.addEventListener("click", () =>contenedorPop.classList.add("d-none"));
  setInterval(() => {
    contenedorPop.classList.add("d-none");
  }, 10000);
}, 5000);

function vistaWindow(vista) {
  if (vista.matches) {
     titulo.innerText = "Hola, soy una ventana de 📱!";
     footer.innerText = "Este es mi 🦶 de pág. en Mobile";
     popMain.innerHTML = `<p class="px-2"><strong>Este es mi contenido de 📱:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus illo doloremque nisi incidunt repellendus quidem omnis!</p>`;
  } else {
    titulo.innerText = "Hola, soy una ventana de 🖥!";
    footer.innerText = "Este es mi 🦶 de pág. en PC";
    popMain.innerHTML = `<p class="px-2"><strong>Este es mi contenido de 🖥:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus illo doloremque nisi incidunt repellendus quidem omnis!</p>`;
  }
}

vistaWindow(vista);
vista.addListener(vistaWindow);

