import{useState} from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import eventicon from "./images/eventicon.png"
const EventsList = ({events}) => {
  events = Array.from(events);   
  const [data, setData] = useState('');
  
 
   const deleteEvent= (id)=>{
     axios.delete("http://localhost:5000/parties/"+ id)
     .then(Response=> {
      console.log(
      Response.data)
      setData(Response.data);
    })
    .catch(error => {console.log(error.Response)})
    
  }
  


return(
  <div className="Search" class="ui  center aligned container" >
      <h1 class="ui huge center aligned  header">
      
        <div class="content">
      Lista Wydarzeń   <div class="sub header">Tutaj możesz przeglądać dodane wydarzenia.</div>
        </div>
      </h1>
      <DisplayData data={data} />
    <div class="ui centered three doubling stackable cards" >

         {events.map(event =>(
<div class ="pink card" key={event._id} >


  
  <div class=" left aligned content" >
  
      <div class="header">
     < h2 class="ui centered pink header">{event.title}</h2>
     <div class="ui   segment">
     <img class="ui small center floated image" src={eventicon} />
      <h4 class="ui black header">Miejsce: {event.place} </h4>
      <h4 class="ui black header">Data: {event.date} </h4>
      <h4 class="ui black header"> Organizator:{event.author} </h4>
      </div>
      
      <div class="ui  teal inverted segment"><h4 class="ui centered  header">  <br></br> Szczegóły wydarzenia</h4>
      <h5 class="paragraph">
      {event.description}
        
      </h5>
      </div>
      <button class="ui  pink button"  onClick={(e) => deleteEvent(event._id)}>Usuń </button>
     

      <div class="ui animated button" tabIndex="0"   >
  <div class="visible content"><i class="edit outline icon"></i></div>
  <div class="hidden content">
    Edytuj
  </div>
</div>
      
    </div>
  </div>
  <div class="extra content">
    


  </div>
  
</div>


        ))}
        
</div>
</div>
)
}
export default EventsList;
