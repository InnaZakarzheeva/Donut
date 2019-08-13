import React from 'react';
import {injectStripe,CardElement} from 'react-stripe-elements';
// import AddressSection from './AddressSection';
import './buy.css'

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe
      .createPaymentMethod('card', {billing_details: {name: 'Jenny Rosen'}})
      .then(({paymentMethod}) => {
        console.log('Received Stripe PaymentMethod:', paymentMethod);
      });
    this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}');
    this.props.stripe.handleCardSetup('{PAYMENT_INTENT_CLIENT_SECRET}');
    this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    this.props.stripe.createSource({
      type: 'card',
      owner: {
        name: 'Jenny Rosen',
      },
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='card-form'>
        <span>Card details</span>
        <CardElement style={{base: {fontSize: '18px'}}} />
        <button className='pay'>Confirm order</button>
      </form>
    );
  }
}
export default injectStripe(CheckoutForm);