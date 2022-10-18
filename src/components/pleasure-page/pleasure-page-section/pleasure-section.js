import { Component } from "react";

import PleasureHeader from "../pleasure-header/pleasure-header";
import AboutGoods from '../about-goods/about-goods';
import ProductCards from "../../product-cards/products-cards";
import Footer from "../../footer/footer";

import divider from '../../../images/our-coffee/line.png';

import './pleasure-section.scss';

class PleasureSection extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 2 kg', country: 'Brazil', id: 1, image: this.props.importImages[1], className: 'pleasure__card', price: 15.50},
                {name: 'AROMISTICO Coffee 1.750 kg', country: 'Columbia', id: 2, image: this.props.importImages[1], className: 'pleasure__card', price: 12.30},
                {name: 'AROMISTICO Coffee 0.500 kg', country: 'Kenya', id: 3, image: this.props.importImages[1], className: 'pleasure__card', price: 8},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', id: 4, image: this.props.importImages[1], className: 'pleasure__card', price: 10.25},
                {name: 'AROMISTICO Coffee 1.500 kg', country: 'Columbia', id: 5, image: this.props.importImages[1], className: 'pleasure__card', price: 14.10},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', id: 6, image: this.props.importImages[1], className: 'pleasure__card', price: 6.99},
            ]
        }
    }

    render(){
        return(
            <section className="pleasure__section">
                <PleasureHeader/>
                <AboutGoods/>

                <img src={divider} alt="Divider" className="main-divider" style={{padding: '0px 0px 30px'}}/>

                <ProductCards updateCardInfo={this.props.updateCardInfo} cards={this.state.data}/>
                <Footer/>
            </section>
        );
    }
}

export default PleasureSection;