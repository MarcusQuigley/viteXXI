import React, { Component } from "react";

const isSearched = (searchitem) => (item) =>
    {
      //console.log(searchitem, item.objectID)
      return !searchitem || item.title.toLowerCase().includes(searchitem.toLowerCase())
    }

class BooksList extends Component{

    render(){
        const {list,  searchTerm, onDismiss} = this.props;
        return(
            <div>
            {list.filter(isSearched(searchTerm)).map(item=>
                <div key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    &nbsp;
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    &nbsp;
                    <button type='button'
                            onClick={()=>onDismiss(item.objectID)}
                    >
                        Dismiss
                    </button>
                </div>
            )}
            </div>
        );
    }
}
export default BooksList