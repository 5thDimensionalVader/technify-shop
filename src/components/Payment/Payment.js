import paymentStyles from './payment.module.css';
import { BsCreditCard, BsInfoCircle } from 'react-icons/bs';
import { ImPaypal } from 'react-icons/im';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

const Payment = ({ cart, setCart }) => {

  // State Mgt
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [holderName, setHolderName] = useState('');
  const [show, setShow] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');
  // history 
  const history = useHistory();
  const location = useLocation();

  // subtotal, taxes and net total calculation
  const subTotal = location.state?.subTotal;
  const taxes = location.state?.taxes;
  const netTotal = location.state?.netTotal;




  // expiryMonth & expiryYear 
  const expiryMonth = `${expiry[0]}${expiry[1]}`;
  const expiryYear = `${expiry[3]}${expiry[4]}${expiry[5]}${expiry[6]}`;

  // Credit Card validation
  const CreditCard = require('credit-card');
  const card = {
    number: number.trim(),
    expiryMonth,
    expiryYear,
    cvv,
  }

  // function for the Pay now button
  const handlePayment = () => {
    if (paymentOption === 'creditCard') {
      const validation = CreditCard.validate(card);
      if (!validation.validCardNumber && !validation.validExpiryMonth && !validation.validExpiryYear && !validation.validCvv) {
        setShow(true);
        <Alert show={show} variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh Snap! Your credit card information is not valid!</Alert.Heading>
          <p>Try going back to the fields and input the correct credit card information!</p>
        </Alert>
      } else if (!validation.validCardNumber) {
        return
      } else if (!validation.validExpiryMonth) {
        return
      } else if (!validation.validExpiryYear) {
        return
      } else if (!validation.validCvv) {
        return
      } else {
        alert(`Payment was successful, ${holderName}. You will receive an email soon.\nThank you for shopping with us!`);
        setCart([]);
        history.push('/');
      }
    } else if(paymentOption === 'paypal') {
        alert(`Please, confirm the Paypal transaction prompt to complete the order.\nThank you for shopping with us!`);
        setCart([]);
        history.push('/');
    }
  }

  return (
    <div className="container text-sm-center text-md-start">
      <div className="row g-5">
        {/* Payment Method */}
        <div className="col-sm col-md-9">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6">Payment Method</h4>
          </div>

          {/* Credit Card section */}
          <div className="my-4" style={{ borderBottom: '1px solid #60606030' }}>

            <div className="border border-1 border-secondary p-3 my-4">
              <div className="form-check ps-3">
                <input type="radio"
                  className="form-check-input"
                  name="paymentOption"
                  value="creditCard"
                  onChange={(e) => setPaymentOption(e.target.value)}
                />
                <label className="form-check-label">
                  <h6 className="fs-5">Credit Card</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit!</p>
                </label>
              </div>

              <div className="row g-3">
                <div className="col-sm col-md-6">
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="0000 0000 0000 0000"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <span className="input-group-text bg-white"><BsCreditCard /></span>
                  </div>

                </div>
                <div className="col-sm col-md-3">
                  <input type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />

                </div>
                <div className="col-sm col-md-3">
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCVV(e.target.value)}
                    />
                    <span className="input-group-text bg-white"><BsInfoCircle /></span>
                  </div>

                </div>
              </div>

              <div className="mt-3">
                <input type="text"
                  className="form-control"
                  placeholder="Card Holder Name"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                />
              </div>

            </div>

          </div>
          {/* Paypal section */}
          <div className="">
            <div className="border border-1 border-secondary p-3">
              <div className="form-check ps-3">
                <input type="radio"
                  className="form-check-input"
                  name="paymentOption"
                  value="paypal"
                  onChange={(e) => setPaymentOption(e.target.value)}
                />
                <label className="form-check-label">
                  <h6 className="fs-5">Paypal</h6>
                  <div className="row align-self-center">
                    <div className="col-sm col-md-10">
                      <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit suscipit officia itaque inventore minus tenetur placeat ducimus temporibus aspernatur nisi dignissimos, nihil hic eaque.</p>
                    </div>
                    <div className="col-sm col-md-2 align-self-center">
                      <span><ImPaypal size={60} /></span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* Buttons section */}
          <div className="mt-3 justify-content-start" style={{ borderTop: '1px solid #60606030' }}>
            <div className="row-cols-4 my-3">
              <button type="button" className="btn btn-secondary me-2" onClick={() => handlePayment()}>Pay Now</button>
              <button type="button" className="btn btn-light" onClick={() => {
                setCart([]);
                history.push('/shop');
              }}>Cancel</button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="col-sm col-md-3">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6">Summary</h4>
          </div>
          {/* Cart product section */}
          <div className="mt-2 py-2" style={{ borderBottom: '1px solid #60606030' }}>
            {
              cart.map((item, key) => (
                <div key={key} className="row">
                  <div className="col-sm col-md-6">
                    <img src={item?.img_main} alt="" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
                  </div>
                  <div className="col-sm col-md-6 align-self-center text-sm-center text-md-start">
                    <h5 className="fs-6">{item?.product_name}</h5>
                    <h5 className="fs-6 text-muted">{`${item?.currency}${item?.price}`}</h5>
                  </div>
                </div>
              ))
            }
          </div>
          {/* Voucher section */}
          <div className="py-2" style={{ borderBottom: '1px solid #60606030' }}>
            <select className="form-select border-0 text-secondary">
              <option>HAVE A VOUCHER?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          {/* Total section */}
          <div className="row my-4">
            <div className="col-sm col-md text-sm-center text-md-start">
              <h4 className="fw-light fs-6 mb-3">SUBTOTAL</h4>
              <h4 className="fw-light fs-6 mb-3">SHIPPING</h4>
              <h4 className="fw-light fs-6 mb-3">TAXES</h4>
            </div>
            <div className="col-sm col-md text-sm-center text-md-end">
              <h4 className="fw-light fs-6 mb-3">{`$${subTotal}`}</h4>
              <h4 className="fw-light fs-6 mb-3">{`$${location.state?.shippingOption}`}</h4>
              <h4 className="fw-light fs-6 mb-3">{`$${taxes}`}</h4>
            </div>
          </div>
          <div className="row py-3" style={{ borderTop: '1px solid #60606030' }}>
            <div className="col-sm col-md text-sm-center text-md-start">
              <h4 className="fw-light fs-4 mb-3">TOTAL</h4>
            </div>
            <div className="col-sm col-md text-sm-center text-md-end">
              <h4 className="fw-bold fs-4 mb-3">{`$${netTotal}`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;