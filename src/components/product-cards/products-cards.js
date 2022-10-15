import CardsItem from '../cards-item/cards-item';

import './product-cards.scss';

const ProductCards = ({cards, getCardInfo}) => {
    const elements = cards.map(card => {
        const { id, ...itemProps } = card;

        // console.log('-->', getCardInfo);

        return (
            <CardsItem key={id} id={id} itemProps={itemProps} getCardInfo={getCardInfo}/>
        );
    });

    return (
        <div className='product-cards__wrapper'>{elements}</div>
    );
}

export default ProductCards;