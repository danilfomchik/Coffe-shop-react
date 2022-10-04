import CardsItem from '../cards-item/cards-item';

import './product-cards.scss';

const ProductCards = ({cards}) => {
    const elements = cards.map(card => {
        const { id, ...itemProps } = card;

        // console.log('itemProps-->', itemProps);

        return (
            <CardsItem key={id} id={id} itemProps={itemProps}/>
        );
    });

    return (
        <div className='product-cards__wrapper'>{elements}</div>
    );
}

export default ProductCards;