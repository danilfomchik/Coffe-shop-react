import { Component } from "react";

import OurCoffeeHeader from "../our-coffee-page/our-coffee-header/our-coffee-header";
import SecondTitle from "../second-title/second-title";
import Footer from "../footer/footer";

import previewImage from '../../images/our-coffee/beansPreview.png';

import './our-coffee-item-section.scss';

class OurCoffeeItemSection extends Component{
    constructor(props){
        super(props);
    }


    render(){
        const { country, description, price } = this.props.data;

        console.log(country, description, price);

        return (
            <div className="our-coffee-item__section">
                <OurCoffeeHeader/>

                <div className="our-coffee-item__wrapper">
                    <div className="our-coffee-item__preview">
                        <img src={previewImage} alt="Girl" />
                    </div>

                    <div className="our-coffee-item__description">
                        <SecondTitle titleText="About it" isLogo={true}/>
                        <p className="our-coffee-item__country"><b>Country:</b> {country}</p>
                        <p className="our-coffee-item__description"><b>Description:</b> {description}</p>
                        <p className="our-coffee-item__price"><b>Price: <span className="our-coffee-item__price-total">{price}$</span></b></p>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default OurCoffeeItemSection;