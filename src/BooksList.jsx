import MyButton from "./components/MyButton";

function BooksList({list,  searchTerm, onDismiss}){

    const isSearched = (searchTerm) => (item) =>{
         return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
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
                    <MyButton 
                            _onClick={()=>onDismiss(item.objectID)}
                    >
                        Dismiss
                    </MyButton>
                </div>
            )}
            </div>
    );
}

export default BooksList