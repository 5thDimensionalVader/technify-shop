import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import shippingStyles from './shipping.module.css';

const Shipping = ({ cart }) => {
  const history = useHistory();
  // subtotal, taxes and net total calculation
  const subTotal = cart.map((item) => item.price).reduce((acc, next) => acc + next, 0);
  const taxes = (subTotal * 7.5) / 100;
  const netTotal = (subTotal + taxes).toFixed(2);

  // State Mgt
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  //formik hook set up
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      addressOne: '',
      addressTwo: '',
      postalCode: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Please, enter first name'),
      lastName: Yup.string()
        .required('Please, enter last name'),
      addressOne: Yup.string()
        .required('Please, enter the first address'),
      addressTwo: Yup.string()
        .required('Please, enter the second address'),
      postalCode: Yup.string()
        .required('Please, enter the postal code'),
      phoneNumber: Yup.string()
        .required('Please, enter the phone number'),
    }),
    onSubmit: values => {
      history.push('/payment')
    },
  });


  return (
    <div className="container text-sm-center text-md-start">
      <div className="row g-5">
        {/* Shipping Details */}
        <div className="col-sm col-md-9">
          <div className="text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
            <h4 className="display-6">Shipping Details</h4>
          </div>

          {/* Form section */}
          <form className="my-5 needs-validation" noValidate style={{ borderBottom: '1px solid #60606030' }} autoComplete="false" onSubmit={formik.handleSubmit}>

            <div className="row g-3">
              <div className="col-sm col-md-5">
                <input type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (<div className="invalid-feedback">{formik.errors.firstName}</div>) : null}
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (<div className="invalid-feedback">{formik.errors.lastName}</div>) : null}
              </div>
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                id="addressOne"
                name="addressOne"
                placeholder="Address"
                className="form-control"
                value={formik.values.addressOne}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.addressOne && formik.errors.addressOne ? (<div className="invalid-feedback">{formik.errors.addressOne}</div>) : null}
            </div>

            <div className="mt-3" style={{ maxWidth: '48rem' }}>
              <input type="text"
                id="addressTwo"
                name="addressTwo"
                placeholder="Address 2"
                className="form-control"
                value={formik.values.addressTwo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.addressTwo && formik.errors.addressTwo ? (<div className="invalid-feedback">{formik.errors.addressTwo}</div>) : null}
            </div>

            <div className="row g-3 mt-3">
              <div className="col-sm col-md-5">
                <select
                  className="form-select text-muted"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>Country</option>
                  <option value="Ghana">Ghana</option>
                </select>

              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  className="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}

                />

              </div>
            </div>

            <div className="row g-3 mt-3 mb-4">
              <div className="col-sm col-md-5">
                <input type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  className="form-control"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.postalCode && formik.errors.postalCode ? (<div className="invalid-feedback">{formik.errors.postalCode}</div>) : null}
              </div>
              <div className="col-sm col-md-5">
                <input type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="form-control"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div className="invalid-feedback">{formik.errors.phoneNumber}</div>) : null}
              </div>
            </div>
            {/* Shipping options section */}
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" />
              <label className="form-check-label"> Free Shipping (2-5 working days) </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" />
              <label className="form-check-label"> Next Day Delivery - $20 </label>
            </div>
            {/* Buttons section */}
            <div className="mt-3 justify-content-start" style={{ borderTop: '1px solid #60606030' }}>
              <div className="row-cols-4 my-3">
                <button type="submit" className="btn btn-secondary me-2">Next</button>
                <button type="button" className="btn btn-light" onClick={() => {
                  cart.length = 0;
                  history.push('/shop');
                }}>Cancel</button>
              </div>
            </div>

          </form>

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