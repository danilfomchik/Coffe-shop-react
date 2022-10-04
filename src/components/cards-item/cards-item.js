import { Component } from "react";

import './cards-item.scss';

class CardsItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { image, name, country, price, className } = this.props.itemProps;
        let clazzes = 'cards-item';

        // console.log(className);
        
        return(
            <div className={className ? clazzes += ' our-coffee__card' : clazzes}>
                <img className="cards-item__image" src={image} alt="Beans" />
                <p className="cards-item__name">{name}</p>
                <p className="cards-item__country">{country ? country : ''}</p>
                <p className="cards-item__price">{price + '$'}</p>
            </div>
        );
    }
}

export default CardsItem;