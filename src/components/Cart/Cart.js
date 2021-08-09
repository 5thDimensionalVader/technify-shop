import cartStyles from './cart.module.css';
import { M1_Macbook } from '../../assets';

const Cart = () => {
  return (
    <div className="container text-sm-center text-md-start">

      <div className="row g-5">
        {/* Shopping Cart section */}
        <div className="col-sm col-md-7">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6 fw-light">Shopping Cart</h4>
          </div>

          <div className="my-5 p-0">
            <div className="row g-1 mb-3">
              <div className="col-sm col-md-3">
                <img src={M1_Macbook} alt="" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
              </div>

              <div className="col-sm col-md-6">
                <div className="text-sm-center text-md-start">
                  <h4 className="fs-6">Product Name</h4>
                  <p className="text-lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, dignissimos.</p>
                  <h4 className="fs-6 fw-lighter">Price</h4>
                </div>
              </div>
              <div className="col-sm col-md-3">
                <select className="form-select">
                  <option value="1">1 pc</option>
                  <option value="2">2 pc</option>
                </select>
              </div>
            </div>
            <div className="row g-1 mb-3">
              <div className="col-sm col-md-3">
                <img src={M1_Macbook} alt="" className="img-fluid" style={{ maxHeight: '110px', maxWidth: '150px' }} />
              </div>

              <div className="col-sm col-md-6">
                <div className="text-sm-center text-md-start">
                  <h4 className="fs-6">Product Name</h4>
                  <p className="text-lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, dignissimos.</p>
                  <h4 className="fs-6 fw-lighter">Price</h4>
                </div>
              </div>
              <div className="col-sm col-md-3">
                <select className="form-select">
                  <option value="1">1 pc</option>
                  <option value="2">2 pc</option>
                </select>
              </div>
            </div>
          </div>

          <div className="" style={{borderTop:'1px solid #60606030'}}>
            <div className="row-cols-4 my-3">
              <button className="btn btn-secondary me-2">Next</button>
              <button className="btn btn-light">Cancel</button>
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
              <h4 className="fw-light fs-5 mb-3">SUBTOTAL</h4>
              <h4 className="fw-light fs-5 mb-3">SHIPPING</h4>
              <h4 className="fw-light fs-5 mb-3">TAXES</h4>
            </div>
          </div>
          <div className="row py-3" style={{borderTop:'1px solid #60606030'}}>
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

export default Cart;