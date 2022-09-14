export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = ' <
        div class = "notes__sidebar" >
            <
            button class = "notes__add"
        type = "button" > Add Note < /button> <
        div class = "notes__list" >
            <
            div class = "notes__list-item notes__list-item--selected" >
            <
            /div> < /
            div > <
            div class = "notes__preview" >
            <
            input class = "notes__title"
        type = "text"
        placeholder = "Enter a title..." >
            <
            textarea class = "notes__body" > I am the notes body... < /textarea> < /
            div >
            ';
    }
}