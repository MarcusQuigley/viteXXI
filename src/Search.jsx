function Search({val, onChanged, children}){
    return(
        <form>
           {children} <input type='text'
                   value={val}
                   onChange = {onChanged}
            />
        </form>
    );
}

export default Search;