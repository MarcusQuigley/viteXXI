import { Component } from "react";

class MyButton extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const {
            _onClick,
            _className = '', //optional
            children,
        } = this.props;

        return(
            <button 
                type='button'
                onClick={_onClick}
                className={_className}
            >
                {children}
            </button>
        );
    }
}

export default MyButton;