import { Component } from "react";
import './navigation.scss';

class Navigation extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <header>
                <ul className="menu-list" style={{justifyContent: this.props.justify}}>
                    <li className="menu-list__item">Coffee house</li>
                    <li className="menu-list__item">Our coffee</li>
                    <li className="menu-list__item">For your pleasure</li>
                </ul>
            </header>
        );
    }
}

export default Navigation;