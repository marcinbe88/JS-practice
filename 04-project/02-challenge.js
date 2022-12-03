const addButton = document.getElementById("add-note-btn")
const notesSection = document.getElementById("notes-section")

addButton.addEventListener('click', createNewNote)

function createNewNote() {
    console.log('new note!')
    const newNote = document.createElement("div")
    newNote.innerHTML = `
    <div id='note-box'>
    <input type='text' id='input-section'></input>
    </div>
    `
    notesSection.append(newNote)

}