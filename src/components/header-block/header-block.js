import { Component } from "react";
import Header from "../header/header";

import beansLogo from "../../images/first-block/beans-logo-white.png";
import './header-block.scss';

class HeaderBlock extends Component{
    render(){
        return(
            <div className="header-block">
                <Header/>

                <h1 className="main-title">Everything You Love About Coffee</h1>
                <img src={beansLogo} className="beans-divider" alt="Beans logo" />

                <p className="header-block__description">We makes every day full of energy and taste<br/>Want to try our beans?</p>
                <button className="header-block__button">More</button>
            </div>
        );
    }
}

export default HeaderBlock;