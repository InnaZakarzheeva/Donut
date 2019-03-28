import React from "react";
import './main.css';

export default class Main extends React.Component{
    state = {
        open: false,
        openD: false,
      };
    render(){
        return(
           
	          
             
		            <div className="product_element">
                  {this.props.item.photo.map(photo => <img src={photo} className="donut_image"/>)}
                    <div className="product_price">
                      <span className="product_name">{this.props.item.name}</span><span className="price">Price 1$</span>
                    </div>
                  <div className="seeMore" onClick={() =>this.setState({openD: !this.state.openD})}>
                    About donut 
                  </div>{
                          this.state.openD ? (
                              <div className="seeMoreText">
                              <p>{this.props.item.seeMoreText}</p>
                              </div>
                        ):null}
		          </div>
           
      

        );
    }
}