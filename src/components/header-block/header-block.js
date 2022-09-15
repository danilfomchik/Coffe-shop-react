import { Component } from "react";
import Header from "../header/header";

import './header-block.scss';

class HeaderBlock extends Component{
    render(){
        return(
            <div className="header-block">
                <Header/>
            </div>
        );
    }
}

export default HeaderBlock;