import { useEffect, useState } from 'react'

import './App.css'
import CRUDForm from './components/CRUDForm';
import Notes from './components/Notes';

function App() {
  const url = "http://localhost:7070/notes";
  
  const [notes, setNotes] = useState([])
  const sendRequest = (method, url, data) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if(method === "GET"){
      xhr.addEventListener("load", ()=>{
        setNotes(JSON.parse(xhr.response));
      })
      xhr.send();
    }
    else{
      xhr.addEventListener("load", ()=>{
        if(xhr.status === 204){
          sendRequest("GET", "http://localhost:7070/notes")
          }
        }
      );
      xhr.send(JSON.stringify(data));
    }
  }
  useEffect(()=>{
    sendRequest("GET", url);
  }, [])
  const submitHandler = (e) => {
    e.preventDefault();
    const textField = e.target.querySelector("#note-text");
    let formData = {
      text: textField.value,
    }
    sendRequest("POST", url, formData)
    e.target.reset();
  }
  const deleteHandler = (e)=>{
    const id = e.target.closest(".note-container").dataset.id;
    sendRequest("DELETE", `${url}/${id}`);
  }
  const updateHandler = () =>{
    sendRequest("GET", url);
  }
  return (
    <>
      <div className="header">
        <h1 className="notes-h">Notes</h1>
        <button className="update" onClick={updateHandler}></button>
      </div>
      <Notes notesArray={notes} deleteHandler={deleteHandler}/>
      <CRUDForm submitHandler={submitHandler}/>
    </>
  );
}

export default App
