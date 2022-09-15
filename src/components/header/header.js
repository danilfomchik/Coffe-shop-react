import { Component } from "react";
import './header.scss';

class Header extends Component{
    render(){
        return(
            <header>
                <ul className="menu-list">
                    <li className="menu-list__item">Coffee house</li>
                    <li className="menu-list__item">Our coffee</li>
                    <li className="menu-list__item">For your pleasure</li>
                </ul>
            </header>
        );
    }
}

export default Header;