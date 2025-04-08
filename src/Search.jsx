import React, {Component} from "react";
class Search extends Component{

  render(){
    const{val, onChanged} = this.props;
    return(
        <form>
            <input type='text'
                   value={val}
                   onChange = {onChanged}
            />
        </form>
    )
  }
}
export default Search;