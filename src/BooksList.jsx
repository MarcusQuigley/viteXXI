import MyButton from "./components/MyButton";

function BooksList({list,  searchTerm, onDismiss}){

    const isSearched = (searchTerm) => (item) =>{
         return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return(
        <div className="table">
            {list.filter(isSearched(searchTerm)).map(item=>
                <div key={item.objectID} className="table-row">
                    <span style={{width:'15%'}}>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    &nbsp;
                    <span style={{width:'10%'}}>{item.author}</span>
                    <span style={{width:'10%'}}>{item.num_comments}</span>
                    <span style={{width:'10%'}}>{item.points}</span>
                    <span style={{width:'10%'}}></span>
                    <MyButton 
                            _onClick={()=>onDismiss(item.objectID)}
                            className="button-inline"
                    >
                        Dismiss
                    </MyButton>
                </div>
            )}
            </div>
    );
}

export default BooksList