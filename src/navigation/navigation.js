import React from "react";
import './navigation.css';

export default class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation_wrapper">
	            <a name="home"><img src={require("../image/logo.png")} className="img_nav"/></a> 
	            <div className="container">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#donuts">Donuts</a></li>
                    <li><a href="#footer">Partnership</a></li>
                </ul>
                </div>
            </div>

        );
    }
}