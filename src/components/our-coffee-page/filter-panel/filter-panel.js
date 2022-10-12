import { Component } from "react";

import './filter-panel.scss';

class FilterPanel extends Component{
    constructor(props){
        super(props);

        this.state={
            activeClass: 'all'
        }
    }

    changeActiveButton = (e) => {
        this.setState({
            activeClass: e.target.getAttribute('data-filter')
        })
    }

    render(){
        const { activeClass } = this.state;

        let button = 'filter-panel__button';
        let activeButton = 'filter-panel__button activeButton';

        return(
            <div className="filter-panel" onClick={this.props.filterBeans}>
                <span>Or filter</span>

                <button className={activeClass == 'all' ? activeButton : button} data-filter="all" onClick={this.changeActiveButton}>All</button>
                <button className={activeClass == 'brazil' ? activeButton : button} data-filter="brazil" onClick={this.changeActiveButton}>Brazil</button>
                <button className={activeClass == 'kenya' ? activeButton : button} data-filter="kenya" onClick={this.changeActiveButton}>Kenya</button>
                <button className={activeClass == 'columbia' ? activeButton : button} data-filter="columbia" onClick={this.changeActiveButton}>Columbia</button>
            </div>
        );
    }
}

export default FilterPanel;