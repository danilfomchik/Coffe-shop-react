import { Component } from "react";
import SecondTitle from "../second-title/second-title";
import ProductCards from '../product-cards/products-cards';

import './our-best.scss';

class OurBest extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {name: 'Solimo Coffee Beans 2 kg', id: 1, image: this.props.importImages[0], price: 10.73},
                {name: 'Presto Coffee Beans 1 kg', id: 2, image: this.props.importImages[1], price: 15.99},
                {name: 'AROMISTICO Coffee 1 kg', id: 3, image: this.props.importImages[2], price: 6.99},
            ]
        }
    }

    
      

    render(){

        console.log(this.state.data);

        return(
            <div className="our-best">
                <SecondTitle titleText="Our Best" isLogo={false}/>

                <ProductCards cards={this.state.data}/>
                {/* <img src={images[0]} className="beans-divider" alt="Beans logo" /> */}
            </div>
        );
    }
}

export default OurBest;