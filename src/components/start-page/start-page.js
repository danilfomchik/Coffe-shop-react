import { Component } from "react";
import HeaderBlock from "../header-block/header-block";
import './start-page.scss';

class FirstBlock extends Component{
    render(){
        return(
            <section className="start-page">
                <div>
                    <HeaderBlock/>
                    <span>First block</span>
                </div>
            </section>
        );
    }
}

export default FirstBlock;