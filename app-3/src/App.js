import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      filterString:'',
     groceries: ['apples', 'bananas', 'ground beef', 'cheese', 'spaghetti sauce']
    
  };
}
handleChange(filter){
  this.setState({filterString: filter})
}

render() {
  let groceriesToDisplay=this.state.groceries.filter((element, index) => {
    return element.includes(this.state.filterString);
  })
  .map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });
  return (
    <div className="App">
     <input onChange={e => this.handleChange(e.target.value)} type="text"/>
     {groceriesToDisplay}
    </div>
  );
}
}
export default App;
