import React, { Component } from 'react';
import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


class App extends Component {

  constructor(props) {
    super(props);
  
  this.onDismiss = this.onDismiss.bind(this)

  this.state = {
    list,
  };

 }
 

 onDismiss(id){
  const updatedList = this.state.list.filter( item => item.objectID != id )
  this.setState({list: updatedList})
  console.log(updatedList)
 }

 
  render() {
    return (
      <div className="App">
      {this.state.list.map(item =>
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          &nbsp;
          <span>{item.author}</span>
          &nbsp;
         <button type='button' 
                 onClick={()=>this.onDismiss(item.objectID)}
         >
          Dismiss
         </button>
        </div>
      )}
      </div>
    );
  }
}

export default App;

 