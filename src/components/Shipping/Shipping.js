import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shippingStyles from './shipping.module.css';

const Shipping = ({ cart }) => {
  const history = useHistory();
  // subtotal, taxes and net total calculation
  const subTotal = cart.map((item) => item.price).reduce((acc, next) => acc + next, 0);
  const taxes = (subTotal * 7.5) / 100;
  const netTotal = (subTotal + taxes).toFixed(2);

  // State Mgt
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // function to handleValidation
  const handleValidation = () => {
    history.push("/payment");
  }

  return (
    <div className="container text-sm-center text-md-start">
      <div className="row g-5">
        {/* Shipping Details */}
        <div className="col-sm col-md-9">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6">Shipping Details</h4>
          </div>

          {/* Form section */}
          <form className="my-5 needs-validation" noValidate style={{ borderBottom: '1px solid #60606030' }}>

            <div className="row g-3">
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please, enter first name</div>
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please, enter last name</div>
              </div>
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                className="form-control"
                placeholder="Address"
                value={addressOne}
                onChange={(e) => setAddressOne(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please, enter Address 1</div>
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                className="form-control"
                placeholder="Address 2"
                value={addressTwo}
                onChange={(e) => setAddressTwo(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please, enter Address 2</div>
            </div>

            <div className="row g-3 mt-3">
              <div className="col-sm col-md-5">
                <select
                  className="form-select text-muted"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required>
                  <option>Country</option>
                  <option value="Ghana">Ghana</option>
                </select>
                <div className="invalid-feedback">Please, select a country</div>
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please, enter a city</div>
              </div>
            </div>

            <div className="row g-3 mt-3 mb-4">
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Zip/Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please, enter a zip/postal code</div>
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please, enter a phone number</div>
              </div>
            </div>

          </form>

          {/* Shipping options section */}
          <div className="row g-3">
            <div className="col-sm col-md-4">
              <div className="container border border-1 border-secondary py-2">
                <div className="form-check text-start pe-3">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label">
                    <h6 className="fs-5">Free Shipping</h6>
                    <p className="text-muted">Between 2-5 working days</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-4">
              <div className="container border border-1 border-secondary py-2">
                <div className="form-check text-start pe-3">
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
          <div className="mt-3 justify-content-start" style={{ borderTop: '1px solid #60606030' }}>
            <div className="row-cols-4 my-3">
              <button type="submit" className="btn btn-secondary me-2" onClick={() => history.push("/payment")}>Next</button>
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
              <h4 className="fw-light fs-6 mb-3">{subTotal}</h4>
              <h4 className="fw-light fs-6 mb-3">FREE</h4>
              <h4 className="fw-light fs-6 mb-3">{taxes}</h4>
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

export default Shipping;