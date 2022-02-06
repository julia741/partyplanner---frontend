import React, {Component} from "react";
import Calendar from 'react-calendar';
import axios from "axios";
import Menu from "./Menu";
//import Navbar from "./Navbar";
import Create from "./Create";
import Home from "./Home";
import EventsList from "./EventsList";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

class App extends Component {

  state={events:[]}
  componentDidMount(){
    axios.get("http://localhost:5000/parties")
    .then(result =>{
    this.setState({
        events: result.data
        
    })
  })
}
  


    render (){
      return (
        <div>
        <Router>
        <Menu />  
<Routes>
<Route path="Create" element={<Create/>}/>
<Route path="Home" element ={<Home />} />
<Route path="EventsList" element ={<EventsList  events ={this.state.events} />} />

</Routes>

</Router>

</div>

    );
          }
         
      
}
  

export default App;
