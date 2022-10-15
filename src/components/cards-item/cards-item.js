import { Component } from "react";

import './cards-item.scss';

class CardsItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { image, name, country, price, className } = this.props.itemProps;
        let clazzes = 'cards-item ';

        if(className){
            clazzes += className;
        }
        
        // console.log(this.props.getCardInfo);

        return(
            <div className={clazzes} onClick={(e) => this.props.getCardInfo(e.currentTarget)}>
                <img className="cards-item__image" src={image} alt="Beans" />
                <p className="cards-item__name">{name}</p>
                <p className="cards-item__country">{country ? country : ''}</p>
                <p className="cards-item__price">{price.toFixed(2) + '$'}</p>
            </div>
        );
    }
}

export default CardsItem;