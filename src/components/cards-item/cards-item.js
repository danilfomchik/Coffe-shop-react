import { Component } from "react";

import './cards-item.scss';

class CardsItem extends Component{
    // constructor(props){
    //     super(props);
    // }


    getCardInfo = (e) => {
        const { children } = e.currentTarget;
        const childrenArray = [...children];

        let r = {};

        childrenArray.forEach(item => {
            if(item.getAttribute('data-info')){
                r[item.getAttribute('data-info')] = item.textContent;
            }
        })

        return  r;
    }

    render(){
        const { image, name, country, price, className } = this.props.itemProps;
        let clazzes = 'cards-item ';

        if(className){
            clazzes += className;
        }
        
        // console.log(this.props.updateCardInfo);

        return(
            <div className={clazzes} onClick={(e) => this.props.updateCardInfo(this.getCardInfo(e))}>
            {/* // <div className={clazzes} onClick={(e) => this.getCardInfo(e)}> */}
                <img className="cards-item__image" src={image} alt="Beans" />
                <p className="cards-item__name" data-info="description">{name}</p>
                <p className="cards-item__country" data-info="country">{country ? country : ''}</p>
                <p className="cards-item__price" data-info="price">{price.toFixed(2) + '$'}</p>
            </div>
        );
    }
}

export default CardsItem;