import paymentStyles from './payment.module.css';
import { BsCreditCard, BsInfoCircle } from 'react-icons/bs';
import { ImPaypal } from 'react-icons/im';

const Payment = ({ cart }) => {
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
                <input type="radio" className="form-check-input" />
                <label className="form-check-label">
                  <h6 className="fs-5">Credit Card</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odit!</p>
                </label>
              </div>

              <div className="row g-3">
                <div className="col-sm col-md-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                    <span className="input-group-text bg-white"><BsCreditCard /></span>
                  </div>
                </div>
                <div className="col-sm col-md-3">
                  <input type="text" className="form-control" placeholder="MM/YY" />
                </div>
                <div className="col-sm col-md-3">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="CVV" />
                    <span className="input-group-text bg-white"><BsInfoCircle /></span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <input type="text" className="form-control" placeholder="Card Holder Name" />
              </div>
            </div>

          </div>
          {/* Paypal section */}
          <div className="">
            <div className="border border-1 border-secondary p-3">
              <div className="form-check ps-3">
                <input type="radio" className="form-check-input" />
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
              <button className="btn btn-secondary me-2">Pay Now</button>
              <button className="btn btn-light">Cancel</button>
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
              <h4 className="fw-light fs-6 mb-3">SUBTOTAL</h4>
              <h4 className="fw-light fs-6 mb-3">SHIPPING</h4>
              <h4 className="fw-light fs-6 mb-3">TAXES</h4>
            </div>
          </div>
          <div className="row py-3" style={{ borderTop: '1px solid #60606030' }}>
            <div className="col-sm col-md text-sm-center text-md-start">
              <h4 className="fw-light fs-4 mb-3">TOTAL</h4>
            </div>
            <div className="col-sm col-md text-sm-center text-md-end">
              <h4 className="fw-bold fs-4 mb-3">TOTAL</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;