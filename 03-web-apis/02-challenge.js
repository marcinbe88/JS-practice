function displayToastMessage() {
    const el = document.getElementById("element")
    console.log('dziala')
}

const toastButton = document.getElementById("toast-button")
toastButton.addEventListener('click', displayToastMessage)