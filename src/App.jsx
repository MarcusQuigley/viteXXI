import React, { Component } from 'react';
import './App.css'
import Search from  './Search.jsx'
import Booklist from './BooksList.jsx'

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

    
    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChanged = this.onSearchChanged.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  } 


  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({ list: updatedList })
    //console.log(updatedList)
  }

  onSearchChanged(event){
    this.setState({searchTerm: event.target.value})
  }


  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <Search value={searchTerm}
                onChanged={this.onSearchChanged} />
       
        <Booklist list={list}
                  searchTerm={searchTerm}
                  onDismiss={this.onDismiss}
                  />
        
      </div>
    );
  }
}

export default App;

