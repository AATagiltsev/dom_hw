const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.insertAdjacentElement("afterbegin", container);

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.insertAdjacentElement("afterbegin", cell);
}