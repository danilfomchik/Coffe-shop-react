import { Component } from "react";
import Navigation from "../../navigation/navigation";

import './pleasure-header.scss';

class PleasureHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="pleasure__header">
                <header>
                    <Navigation/>
                </header>
                <h1 className="main-title">For your pleasure</h1>
            </div>
        );
    }
}

export default PleasureHeader;