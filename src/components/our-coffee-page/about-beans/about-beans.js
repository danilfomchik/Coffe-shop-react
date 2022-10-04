import { Component } from "react";
import SecondTitle from '../../second-title/second-title';

import previewImage from '../../../images/our-coffee/about-beans-image.png';

import './about-beans.scss';

class AboutBeans extends Component{

    render(){
        return(
            <div className="about-beans__wrapper">
                <div className="about-beans__preview">
                    <img src={previewImage} alt="Girl" />
                </div>

                <div className="about-beans__description">
                    <SecondTitle titleText="About our beans" isLogo={true}/>
                    <p className="about-beans__description__p1">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p className="about-beans__description__p2">Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                    <p className="about-beans__description__p3">As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                </div>
            </div>
        );
    }
}

export default AboutBeans;