import { Component } from "react";
import Navigation from "../navigation/navigation";

import beansLogo from "../../images/first-block/beans-logo-black.png";

import './footer.scss';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <footer>
                    <Navigation justify="center"/>
                    <img src={beansLogo} className="beans-divider" alt="Beans logo" />
                </footer>
            </div>
        );
    }
}

export default Footer;