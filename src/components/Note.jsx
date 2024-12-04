import deleteLogo from '../assets/delete.svg'
export default function Note({text, id, deleteHandler}){
    return(
        <div className="note-container" data-id={id}>
            <img src={deleteLogo} alt="delete" className="delete" onClick={deleteHandler}/>
            <div className="note">
                {text}
            </div>
        </div>
    )
}