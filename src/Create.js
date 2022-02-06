import { useState } from "react";
import logo from './images/logo.png';
import axios from "axios";
import DisplayData from "./DisplayData";
import EventsList from "./EventsList";

export default function Create() {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  
  const [data, setData] = useState('');
 
  const handleSubmit = (e) => {
    

    
    e.preventDefault();
   const event = {title, place, description, date, author};
  onClickAction(event); 
  }

  function onClickAction() {
    const Parties = JSON.stringify({title: title, place: place, description: description, date: date, author:author });
    
    
    console.log(Parties);
    var test = axios.post('http://localhost:5000/parties',Parties,{ headers: {
      'Content-Type': 'application/json'}},).then(Response =>
     {
      console.log(
      Response.data)
      setData(Response.data);
    })
    .catch(error => {console.log(error.Response)})
    
  }
  

  return (
    <div className="Search" class="ui  center aligned container" >
       <img 
      class="ui centered medium image"
       src={logo}
       width="20%" height="20%"
        alt="logo" />
      <h1 class="ui huge center aligned  header">
     

        <div class="content">
      Utwórz nowe wydarzenie<div class="sub header"></div>
        </div>
      </h1>
      
      

      <form onSubmit={handleSubmit} class="ui fluid form">
 <div class=" field">
 
        <input 
          type="text" 
          placeholder="Tytuł"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        
        
        <input
        type="text"
        placeholder="Miejsce"
          value={place}
          required
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
        type="text"
        placeholder="Opis"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
          </div>

          <input
        type="date"
        placeholder="Data"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
        type="text"
        placeholder="Organizator"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        
          <button class="ui pink button"  onClick={ (e) =>onClickAction()}> Dodaj</button>
      </form>
      <DisplayData data={data} />
      
      
    </div>
  );
}


