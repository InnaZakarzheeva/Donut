import React from "react";
import './main.css';
import {store} from '../../index';
import {addProduct, deleteProduct} from '../../actions/actions';
import swal from 'sweetalert';
import { connect } from 'react-redux';

export default class Main extends React.Component{
  state = {
    open: false,
    openD: false
  };
  render(){
    return(
		  <div className="product_element">
        {
          this.props.item.photo.map(photo => <img src={photo} className="donut_image" alt='donut' key={photo}/>)
        }
        <div className="product_price">
          <span className="product_name">{this.props.item.name}</span>
          <button className="price" onClick={() => {
            store.dispatch(addProduct(this.props.item.name,this.props.item.price))
            swal({
              text: 'Product added to cart',
              icon: 'success',
              buttons: {close: 'Close'}
              })
            this.props.product.map(item => {
              if(this.props.item.name === item.text) {
                store.dispatch(deleteProduct(item.id))
                return swal({
                          text: 'You have already bought this product',
                          icon: 'error',
                          buttons: {close: 'Close'}
                          })
              } 
            })
          }}>Price {this.props.item.price}$</button>
        </div>
        <div className="seeMore" onClick={() =>this.setState({openD: !this.state.openD})}>About donut</div>
        {
          this.state.openD ? (
            <div className="seeMoreText">
              <p>{this.props.item.seeMoreText}</p>
            </div>
          ):null
        }
		  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state
  }
}

Main = connect(mapStateToProps)(Main)