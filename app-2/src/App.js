import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
    names:['Eric', 'Jeffrey', 'Mark', 'Shawna', 'Jenel']
  };
}
render() {
  let namesToDisplay=this.state.names.map((element, index) =>{
    return <h2 key={index}>{element}</h2>
  });
  
return (
    <div className="App">{namesToDisplay}
      
    </div>
  );
}
}
export default App;
