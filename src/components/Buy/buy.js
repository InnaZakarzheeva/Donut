import React from 'react';
import './buy.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {store} from '../../index';
import {deleteProduct} from '../../actions/actions';
import deleteImg from '../../image/delete.png'
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout.js';
import TextField from '@material-ui/core/TextField';

export default class Buy extends React.Component {
    handleCreateProductsList = (item) => {
        return  <div className='task-wrapper'>
                    <span key={item.id}>{item.text}</span>
                    <span>{item.price}$</span>
                    <img src={deleteImg} alt='delete' 
                        onClick={() => store.dispatch(deleteProduct(item.id))}
                        style={{cursor: 'pointer', width: '30px', height: '30px'}}/>
                </div>
    }
    countPrice = () => {
        let result = 0;
        this.props.product.map(item => {
            result += item.price;
        })
        return result;
    }
    render() {
        return (
            <div className="buy-wrapper">
                <div className='title-buy'>
                    <Link to='/'><img src={require("../../image/logo.png")} className="img_nav" alt='logo'/></Link>
                    <span className='title'>You order {this.props.product.length} donut</span>
                </div>
                <hr color='white' size='2px' width='80%'/>
                <div className='content-wrapper'>
                    <div className='product-wrapper'>
                    {
                        this.props.product.map(this.handleCreateProductsList)
                    }
                    <hr color='white' size='2px' width='100%'/>
                    <span>Summary: {this.countPrice()}$</span>
                    </div>
                    <div className='pay-wrapper'>
                        <span className='title-confirm'>Please, confirm form: </span>
                        <TextField
                            id="standard-dense"
                            label="Enter your name:"
                            margin="dense"
                            style={{width: '90%'}}
                        />
                         <TextField
                            id="standard-dense"
                            margin="dense"
                            label="Enter your surname:"
                            style={{width: '90%'}}
                        />
                         <TextField
                            label="Enter your address:"
                            id="standard-dense"
                            margin="dense"
                            style={{width: '90%'}}
                        />
                        <StripeProvider apiKey="pk_test_12345">
                            <MyStoreCheckout />
                        </StripeProvider>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state
    }
}

Buy = connect(mapStateToProps)(Buy)