import { Component } from "react";
import Navigation from "../navigation/navigation";

import beansLogo from "../../images/beans-logo-black.png";

import './footer.scss';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footer">
                        <Navigation justify="center"/>
                        <img src={beansLogo} className="beans-divider" alt="Beans logo" />
                </div>
            </footer>
        );
    }
}

export default Footer;