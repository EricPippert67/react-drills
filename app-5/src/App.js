import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {

  render(){
  return (
    <div className="App"> HAPPY DOG
    <Image url={"https://i.embed.ly/1/display/resize?width=800&height=800&key=3e750996b20f47be9451da09d3fffa5b&url=http%3A%2F%2Fimgur.com%2FrYIVcco.jpg"}/>  
    </div>
  );
}
}
export default App;
