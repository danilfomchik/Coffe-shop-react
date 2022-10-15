import { Component } from "react";

import './search-panel.scss';

class SearchPanel extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { searchValue, searchItem } = this.props;

        return(
            <div className="search-panel">
                <span>Looking for</span>
                <input type="text" 
                    placeholder="start typing here..." 
                    className="search-panel__searcher" 
                    value={searchValue}
                    data-param='searchValue'
                    onChange={(e) => searchItem(e.target.getAttribute('data-param'), e.target.value)}
                />
            </div>
        );
    }
}

export default SearchPanel;