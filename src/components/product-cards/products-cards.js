import CardsItem from '../cards-item/cards-item';

import './product-cards.scss';

const ProductCards = ({cards, updateCardInfo}) => {
    const elements = cards.map(card => {
        const { id, ...itemProps } = card;

        // console.log('-->', updateCardInfo);

        return (
            <CardsItem key={id} id={id} itemProps={itemProps} updateCardInfo={updateCardInfo}/>
        );
    });

    return (
        <div className='product-cards__wrapper'>{elements}</div>
    );
}

export default ProductCards;