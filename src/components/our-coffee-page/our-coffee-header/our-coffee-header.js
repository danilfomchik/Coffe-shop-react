import { Component } from "react";
import Navigation from "../../navigation/navigation";

import './our-coffee-header.scss';

class OurCoffeeHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { importImages } = this.props;

        return(
            <div className="our-coffee__header">
                <header>
                    <Navigation logo="white" justify="flex-start"/>
                </header>
                <h1 className="main-title">Our Coffee</h1>
            </div>
        );
    }
}

export default OurCoffeeHeader;