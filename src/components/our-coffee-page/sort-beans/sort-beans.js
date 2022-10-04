import { Component } from "react";

import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";

import './sort-beans.scss';

class SortBeans extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="sort-beans__wrapper">
                <SearchPanel/>
                <FilterPanel/>
            </div>
        );
    }
}

export default SortBeans;