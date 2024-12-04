import enterLogo from "../assets/enter.svg"
export default function CRUDForm({submitHandler}){
    return(
        <form action="add note" className="note-add" name="note form" onSubmit={submitHandler}>
            <div className="form-container">
                <label htmlFor="note-text" className="note-label">New note</label>
                <textarea name="note text" id="note-text" className="note-text" required></textarea>
            </div>
            <button className="submit"></button>
        </form>
    )
}