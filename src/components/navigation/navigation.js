import React from "react";
import './navigation.css';
import {Link} from "react-router-dom";

export default class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation_wrapper">
	            <img src={require("../../image/logo.png")} className="img_nav" alt='logo'/> 
	            <div className="container">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#donuts">Donuts</a></li>
                        <li><a href="#footer">Partnership</a></li>
                    </ul>
                    <Link to='/buy/'><img className='buy' src={require('../../image/buy.png')} alt='buy'/></Link>
                </div>
            </div>

        );
    }
}