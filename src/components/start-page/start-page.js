import { Component } from "react";
import HeaderBlock from "../header-block/header-block";
import AboutUs from "../about-us-block/about-us";

import './start-page.scss';

class StartPage extends Component{
    render(){
        return(
            <section className="start-page">
                <>
                    <HeaderBlock/>
                    <AboutUs/>
                </>
            </section>
        );
    }
}

export default StartPage;