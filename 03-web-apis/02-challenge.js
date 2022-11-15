function displayToastMessage(text) {
    const el = document.getElementById("element")
    el.firstChild.nodeValue = text
    console.log('dziala')
}

const toastButton = document.getElementById("toast-button")
toastButton.addEventListener('click', () => {displayToastMessage("dupa")})