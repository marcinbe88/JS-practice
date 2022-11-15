const changeButton = document.getElementById("change-button")
const body = document.body

function changeColor() {
    body.classList.toggle("dark-theme")
    changeButton.classList.toggle("white-button")
}

changeButton.addEventListener("click", changeColor)