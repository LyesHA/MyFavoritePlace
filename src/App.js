import React, { Component } from 'react';
import './App.css';
import MyfavoritePlace from './Myfavoriteplace/MyFavPlace'
/*
import Welcome from './Welcome';
import ToDoList from './ToDoList/Todolist';
*/
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <MyfavoritePlace
            ImageUrl="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            Title="Paris, La Ville Lumière."
          />
          <MyfavoritePlace
            ImageUrl="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            Title="Londre, Le Grand brouillard"
          />
          <MyfavoritePlace
            ImageUrl="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            Title="Barcelone,  La cité comtale"
          />

          <MyfavoritePlace
            ImageUrl="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            Title="New York, Big Apple"
          />
          <MyfavoritePlace
            ImageUrl="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            Title="Toronto, La ville reine"
          />
        </div>
      </div>
    );
  }
}

export default App;
