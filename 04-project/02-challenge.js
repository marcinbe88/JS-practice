const addButton = document.getElementById("add-note-btn")
const notesSection = document.getElementById("notes-section")
const deleteButton = document.getElementById("delete-btn")

addButton.addEventListener('click', createNewNote)
deleteButton.addEventListener('click', deleteNote)

function createNewNote() {
    console.log('new note!')
    const newNote = document.createElement("div")
    newNote.innerHTML = `
    <div id='note-box'>
        <button id="delete-btn">Delete</button>
        <input type='text' id='input-section'></input>
    </div>
    `
    notesSection.append(newNote)
}

function deleteNote() {
    console.log('delete note!')
}