import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import cartStyles from './cart.module.css';

const Cart = ({ cart }) => {
  const history = useHistory();

  // State Mgt
  const [productQuantity, setProductQuantity] = useState(1);
  const [productCart, setProductCart] = useState(cart);
  const [show, setShow] = useState(false); /* for the Alert component from React Bootstrap */


  // subtotal, taxes and net total calculation
  const subTotal = productCart.map((item) => item.price).reduce((acc, next) => acc + next, 0);
  const taxes = (subTotal * 7.5) / 100;
  const netTotal = (subTotal + taxes).toFixed(2);

  // const handleQuantityCalc = (e, index) => {
  //   setProductQuantity(e.target.value);
  //   const item = productCart[index]; // Find the object with the desired index
  //   item.product_quantity = productQuantity; //setting the object key value to the input

  //   // Now the goal is to replace this updated item with a new product_quantity with the old item in the productCart
  //   setProductCart([...productCart, productCart.splice(index, 0, item)]);
  //   // console.log(productCart);
  // }

  const nextPage = () => {
    if (!productCart.length) {
      setShow(true);
      if (show) {
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh Snap! There's nothing in your cart</Alert.Heading>
          <p>Try going back to the shop page and adding items to the cart!</p>
        </Alert>
      }
    } else {
      history.push("/shipping");
    }
  }

  // useEffect(() => {
  //   console.log("On re-render -> ", productCart);
  // }, []);

  return (
    <div className="container text-sm-center text-md-start">

      <div className="row g-5">
        {/* Shopping Cart section */}
        <div className="col-sm col-md-7">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6 fw-light">Shopping Cart</h4>
          </div>

          <div className="my-5 p-0">
            {
              productCart.map((item, key) => (
                <div key={key} className="row g-1 mb-3">
                  <div className="col-sm col-md-3">
                    <img src={item?.img_main} alt="product_img" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
                  </div>

                  <div className="col-sm col-md-6">
                    <div className="text-sm-center text-md-start">
                      <h4 className="fs-6">{item?.product_name}</h4>
                      <p className="text-lead text-muted">{item?.product_description}</p>
                      <h4 className="fs-6 fw-lighter">{`${item?.currency}${item?.price}`}</h4>
                    </div>
                  </div>
                  <div className="col-sm col-md-3">
                    {/* <input type="number"
                      className="form-control"
                      value={item?.product_quantity}
                      onChange={(e) => handleQuantityCalc(e, key)}
                    /> */}
                  </div>
                </div>
              ))
            }
          </div>

          <div className="" style={{ borderTop: '1px solid #60606030' }}>
            <div className="row-cols-4 my-3">
              <button type="button" className="btn btn-secondary me-2" onClick={() => nextPage()}>Next</button>
              <button type="button" className="btn btn-light" onClick={() => history.push('/shop')}>Cancel</button>
            </div>
          </div>
        </div>
        {/* Summary section */}
        <div className="col-sm col-md-5">
          <div className="text-sm-center text-md-start">
            <h4 className="display-6 fw-light">Summary</h4>
          </div>
          <div>
            <input type="text"
              className="form-control border-top-1 border-bottom-5 border-start-0 border-end-0 fw-bold"
              placeholder="ENTER COUPON CODE"
            />
          </div>
          <div className="row my-4">
            <div className="col-sm col-md text-sm-center text-md-start">
              <h4 className="fw-light fs-5 mb-3">SUBTOTAL</h4>
              <h4 className="fw-light fs-5 mb-3">SHIPPING</h4>
              <h4 className="fw-light fs-5 mb-3">TAXES</h4>
            </div>
            <div className="col-sm col-md text-sm-center text-md-end">
              <h4 className="fw-light fs-5 mb-3">{subTotal}</h4>
              <h4 className="fw-light fs-5 mb-3">FREE</h4>
              <h4 className="fw-light fs-5 mb-3">{taxes.toFixed(2)}</h4>
            </div>
          </div>
          <div className="row py-3" style={{ borderTop: '1px solid #60606030' }}>
            <div className="col-sm col-md text-sm-center text-md-start">
              <h4 className="fw-light fs-4 mb-3">TOTAL</h4>
            </div>
            <div className="col-sm col-md text-sm-center text-md-end">
              <h4 className="fw-bold fs-4 mb-3">{netTotal}</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;