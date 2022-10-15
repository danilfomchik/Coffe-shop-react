import { Component } from "react";
import OurCoffeeHeader from "../our-coffee-header/our-coffee-header";
import AboutBeans from "../about-beans/about-beans";
import ProductCards from "../../product-cards/products-cards";
import Footer from "../../footer/footer";
import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";

import divider from '../../../images/our-coffee/line.png';

import './our-coffee-section.scss';

class OurCoffeeSection extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 2 kg', country: 'Brazil', id: 1, image: this.props.importImages[2], className: 'our-coffee__card', price: 15.30},
                {name: 'AROMISTICO Coffee 1.5 kg', country: 'Columbia', id: 2, image: this.props.importImages[2], className: 'our-coffee__card', price: 11.20},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', id: 3, image: this.props.importImages[2], className: 'our-coffee__card', price: 7.50},
                {name: 'AROMISTICO Coffee 0.250 kg', country: 'Kenya', id: 4, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', id: 5, image: this.props.importImages[2], className: 'our-coffee__card', price: 9.0},
                {name: 'AROMISTICO Coffee 2 kg', country: 'Brazil', id: 6, image: this.props.importImages[2], className: 'our-coffee__card', price: 13.40},
            ],
            searchValue: '',
            filterParam: 'all'
        }
    }


    filterBeans = (data, param) => {
        let result = data.filter(item => {
            if(param === 'all'){
                return data;
            } else return param === item.country.toLowerCase()
        });

        return result;
    }

    // changeFilterParam = (param) => {
    //     this.setState({
    //         filterParam: param
    //     })
    // }


    // searchItem = (searchInputValue) => {
    //     this.setState({
    //         searchValue: searchInputValue
    //     })

    //     console.log(searchInputValue);
    // }


    changeParam = (param, value) => {
        this.setState({
            [param]: value
        })
    }

    searchBeans = (data, param) => {
        return data.filter(item => item.name.includes(param))
    }


    render(){
        const { data, filterParam, searchValue } = this.state;
        const visibleData = this.filterBeans(this.searchBeans(data, searchValue), filterParam);

        // console.log(this.props.getCardInfo);


        return(
            <section className="our-coffee__section">
                <OurCoffeeHeader/>
                <AboutBeans/>

                <img src={divider} alt="Divider" className="main-divider"/>

                <div className="sort-beans__wrapper">
                    <SearchPanel searchValue={searchValue} searchItem={this.changeParam}/>
                    <FilterPanel filterParam={filterParam} getFilterParam={this.changeParam}/>
                </div>

                <ProductCards getCardInfo={this.props.getCardInfo} cards={visibleData}/>
                <Footer/>
            </section>
        );
    }
}

export default OurCoffeeSection;