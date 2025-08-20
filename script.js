let container = document.querySelector(".container");
function selection() {
    let numbers = prompt("ingrese el numero de cuadros a generar");
    let total = numbers * numbers;
    if (numbers <= 0) {
        alert("no puedes ingresar valores menores o iguales a 0");
    }
    if (numbers > 100) {
        alert("no puede colocar tantos cuadros, el limite es 100");
    } if (numbers > 0 && numbers <= 100) {
        container.innerHTML = "";
        for (let i = 0; i < total; i++) {
        let div = document.createElement("div");
        let tamaño = 100 / numbers;
        div.style.width = `${tamaño}%`;
        div.style.height = `${tamaño}%`;
        div.classList.add("item");
        container.appendChild(div);
        };
    };
};

const selectioner = document.querySelector(".selectioner");
selectioner.addEventListener("click", () => selection());

container.addEventListener("mouseover", (event) => {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }
});
