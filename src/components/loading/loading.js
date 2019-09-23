import React from 'react';
import './loading.css';

export default class Loading extends React.Component{
    render() {
        return(
            <div className="wrapper-loading">
                 <img src={require("../../image/logo.png")} alt="logo" style={{width: '150px', height: '150px', margin: 0}} className="img_nav"/>
                 <br/>
                 <span>Loading...</span>
            </div>
        )
    }
}