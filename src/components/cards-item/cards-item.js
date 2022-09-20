import { Component } from "react";

import './cards-item.scss';

class CardsItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { itemProps } = this.props;

        console.log(itemProps);

        
        return(
            <div className="cards-item">
                <img className="cards-item__image" src={itemProps.image} alt="Beans" />
                <p className="cards-item__name">{itemProps.name}</p>
                <p className="cards-item__price">{itemProps.price + '$'}</p>
            </div>
        );
    }
}

export default CardsItem;