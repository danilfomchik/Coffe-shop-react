import { Component } from "react";
import HeaderBlock from "../header-block/header-block";
import AboutUs from "../about-us-block/about-us";
import OurBest from '../our-best/our-best';

import './start-page.scss';

class StartPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { importImages } = this.props;

        // const images = this.importAll(require.context('../../images/first-block/our-best/', false, /\.(png|jpe?g|svg)$/));

        return(
            <section className="start-page">
                <HeaderBlock/>
                <AboutUs/>
                <OurBest importImages={importImages(require.context('../../images/first-block/our-best/', false, /\.(png|jpe?g|svg)$/))}/>
            </section>
        );
    }
}

export default StartPage;