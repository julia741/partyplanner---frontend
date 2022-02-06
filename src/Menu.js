

import React from "react";


const Menu  = () => {

    return (
      
      
      <div class="ui  secondary pointing menu" >
        
        
      <a class="active teal item" href="/Home" >
      <i class ="home icon"></i>
      
      Strona Główna

      </a>
      <a class="teal item" href="/Account" activeclass="active teal item" >
      <i class ="user icon"></i>
      Twoje konto
      </a>
      <a class="teal item" href="/Create">
      <i class ="calendar plus outline icon"></i>
    Dodaj nowe wydarzenie  </a>
      <a class="teal item" href="/EventsList" >
      <i class ="glass martini icon"></i>
        Lista wydarzeń
      </a>
      
      <div class="right menu">
      <a class="ui teal button" href="/Login">
Logowanie   </a>
<a class="ui pink button" href="/Registration">
Rejestracja   </a>
        <a class="ui item">
          <i class ="sign in icon"></i>
          Wyloguj Się
        </a>
        </div>
        </div>
        
      
    )};

    
    export default Menu;