import Note from "./Note"

export default function Notes({notesArray, deleteHandler}){
    return(
        <div className="notes">
            {
                notesArray.map((item)=>{
                    return <Note id={item.id} text={item.text} deleteHandler={deleteHandler} key={item.id}/>
                })
            }
        </div>
    )
}