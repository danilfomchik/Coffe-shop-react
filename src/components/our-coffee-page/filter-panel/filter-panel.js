import { Component } from "react";

import './filter-panel.scss';

class FilterPanel extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="filter-panel">
                <span>Or filter</span>

                <button className="filter-panel__button button1 activeButton">All</button>
                <button className="filter-panel__button button2">Brazil</button>
                <button className="filter-panel__button button3">Kenya</button>
                <button className="filter-panel__button button4">Columbia</button>
            </div>
        );
    }
}

export default FilterPanel;