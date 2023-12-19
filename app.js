const cells = document.querySelectorAll(".cell")
const restart = document.querySelector("#restart")
const darkMode = document.querySelector("#darkMode")

let player = null
let value = null
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (value === "O") {
            player = "player 1"
            value = "X"
            cell.textContent = value
            winner(value)
        } else {
            player = "player 2"
            value = "O"
            cell.textContent = value
            winner(value)
        }
    })
})
restart.addEventListener("click", () => {
    location.reload(true)
})
function winner(valueUp) {
    //controllo righe
    for (let i = 0; i < 3; i++) {
        if (
            cells[i * 3].textContent === valueUp &&
            cells[i * 3 + 1].textContent === valueUp &&
            cells[i * 3 + 2].textContent === valueUp) {
            alert(`winner ${player}`);
        }
    }
    //controllo colonne
    for (let j = 0; j < 3; j++) {
        if (cells[j].textContent === valueUp &&
            cells[j + 3].textContent === valueUp &&
            cells[j + 6].textContent === valueUp) {
            alert(`winner ${player}`);
        }
    }
    //controllo diagonali
    if (cells[0].textContent === valueUp && cells[4].textContent === valueUp && cells[8].textContent === valueUp) {
        alert(`winner ${player}`);
    }
    if (cells[2].textContent === valueUp && cells[4].textContent === valueUp && cells[6].textContent === valueUp) {
        alert(`winner ${player}`);
    }
}
