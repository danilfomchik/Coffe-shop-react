import { Component } from "react";

import './search-panel.scss';

class SearchPanel extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="search-panel">
                <span>Looking for</span>
                <input type="text" placeholder="start typing here..." className="search-panel__searcher"/>
            </div>
        );
    }
}

export default SearchPanel;