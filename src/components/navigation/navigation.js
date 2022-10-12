import { Component } from "react";
import './navigation.scss';


import logoBlack from '../../images/beans-black.png';
import logoWhite from '../../images/beans-white.png';


class Navigation extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { logo, justify } = this.props;


        return(
            <ul className="menu-list" style={{justifyContent: justify}}>
                <li className="menu-list__item"><img src={logo == 'white' ? logoWhite : logoBlack} alt="" /></li>
                <li className="menu-list__item">Coffee house</li>
                <li className="menu-list__item">Our coffee</li>
                <li className="menu-list__item">For your pleasure</li>
            </ul>
        );
    }
}

export default Navigation;