import { Component } from "react";
import Navigation from "../../navigation/navigation";

import beansLogo from "../../../images/start-page/beans-logo-white.png";
import './header-block.scss';

class HeaderBlock extends Component{
    render(){
        return(
            <header>
                <div className="header-block">
                    <Navigation justify="flex-start"/>

                    <h1 className="main-title" style={{padding: '80px 0px 0px'}}>Everything You Love About Coffee</h1>
                    <img src={beansLogo} className="beans-divider" alt="Beans logo" />

                    <p className="header-block__description">We makes every day full of energy and taste<br/>Want to try our beans?</p>
                    <button className="header-block__button">More</button>
                </div>
            </header>
        );
    }
}

export default HeaderBlock;