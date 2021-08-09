import shippingStyles from './shipping.module.css';
import { M1_Macbook } from '../../assets';

const Shipping = () => {
  return (
    <div className="container text-sm-center text-md-start">
      <div className="row g-5">
        {/* Shipping Details */}
        <div className="col-sm col-md-9">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6">Shipping Details</h4>
          </div>

          {/* Form section */}
          <div className="my-5" style={{ borderBottom: '1px solid #60606030' }}>

            <div className="row g-3">
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                className="form-control"
                placeholder="Address 2"
              />
            </div>

            <div className="row g-3 mt-3">
              <div className="col-sm col-md-5">
                <select className="form-select text-muted">
                  <option>Country</option>
                </select>
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-4">
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Zip/Postal Code"
                />
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>

          </div>

          {/* Shipping options section */}
          <div className="row g-3">
            <div className="col-sm col-md-4">
              <div className="container">
                <div className="form-check text-start py-2 border border-1 border-secondary">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label">
                    <h6 className="fs-5">Free Shipping</h6>
                    <p className="text-muted">Between 2-5 working days</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-4">
              <div className="container">
                <div className="form-check text-start py-2 border border-1 border-secondary">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label">
                    <h6 className="fs-5">Next Day Delivery - $20</h6>
                    <p className="text-muted">24 hours from checkout</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons section */}
          <div className="mt-3 justify-content-start" style={{borderTop:'1px solid #60606030'}}>
            <div className="row-cols-4 my-3">
              <button className="btn btn-secondary me-2">Next</button>
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
            <div className="row">
              <div className="col-sm col-md-6">
                <img src={M1_Macbook} alt="" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
              </div>
              <div className="col-sm col-md-6 align-self-center text-sm-center text-md-start">
                <h5 className="fs-6">Product Name</h5>
                <h5 className="fs-6 text-muted">Price</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm col-md-6">
                <img src={M1_Macbook} alt="" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
              </div>
              <div className="col-sm col-md-6 align-self-center text-sm-center text-md-start">
                <h5 className="fs-6">Product Name</h5>
                <h5 className="fs-6 text-muted">Price</h5>
              </div>
            </div>
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

export default Shipping;