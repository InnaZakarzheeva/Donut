import React from "react";
import './header.css';

export default class Header extends React.Component{
    render(){
        return(
            <div className="header_wrapper">
                <div className="header">
                    D<img src={require("../../image/0.png")} className="img_header" alt='background'/>NUTS
                </div>
                <a name="donuts">
                    <div className="parallax p4">
                    <span className="title_block">THAT YOU LOVE</span>
                    </div>
                </a>           
            </div>
        );
    }
}