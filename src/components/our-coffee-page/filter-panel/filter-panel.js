import { Component } from "react";

import './filter-panel.scss';

class FilterPanel extends Component{

    render(){
        const { filterParam, getFilterParam } = this.props;

        let button = 'filter-panel__button';
        let activeButton = 'filter-panel__button activeButton';

        return(
            <div className="filter-panel">
                <span>Or filter</span>

                <div className="filter-panel__controlls" 
                    onClick={(e) => getFilterParam(e.currentTarget.getAttribute('data-param'), e.target.getAttribute('data-filter'))}
                    data-param='filterParam'
                >
                    <button className={filterParam === 'all' ? activeButton : button} 
                        data-filter="all"
                    >
                        All
                    </button>
                    <button className={filterParam === 'brazil' ? activeButton : button} 
                        data-filter="brazil"
                    >
                        Brazil
                    </button>
                    <button className={filterParam === 'kenya' ? activeButton : button} 
                        data-filter="kenya"
                    >
                        Kenya
                    </button>
                    <button className={filterParam === 'columbia' ? activeButton : button} 
                        data-filter="columbia"
                    >
                        Columbia
                    </button>
                </div>
            </div>
        );
    }
}

export default FilterPanel;