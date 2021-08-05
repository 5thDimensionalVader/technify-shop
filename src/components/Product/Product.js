import productStyles from './product.module.css';
import { iPhone_XR_p } from '../../assets';
import product from '../../assets/data/data.js';
import { FaUserCircle } from 'react-icons/fa';

const Product = () => {
  return (
    <div className="container py-1" style={{ borderTop: '1px solid #60606030' }}>

      {/* Product Information section */}
      <div className="container" style={{ borderBottom: '1px solid #60606030' }}>
        <div className="row">

          <div className="col-md-6 p-4">
            <img src={iPhone_XR_p} alt="iPhone_product_img" className="img-fluid rounded rounded-start" />
          </div>

          <div className="col-md-6 text-sm-center text-md-start p-4 align-self-center">
            <h4 className="display-4 fw-light">Product Name</h4>
            <div>
              <div className="row row-cols-3 mt-5 g-0">
                <span>Rating</span>
                <span>5 reviews</span>
              </div>
              <div className="row row-cols-3 mt-4 g-0">
                <span className="fs-3">Price</span>
                <div>
                  <select className="form-select">
                    <option selected>Select Model</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="my-4 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi quis odit obcaecati et aspernatur maiores nostrum, optio vel, earum non. Sed perspiciatis aperiam facere id qui beatae fugit animi.</p>
            <button className="btn btn-secondary">Add to Cart</button>
          </div>

        </div>
      </div>

      {/* Similar Product section */}
      <div className="container text-center py-3" style={{ borderBottom: '1px solid #60606030' }}>
        <h4 className="display-5 fw-light">Similar Products</h4>

        <div className="row my-3">

          <div className="col-sm">
            <div className="card mb-2 me-1" style={{ maxWidth: '350px' }}>
              <div className="row g-0">
                <div className="col-md-6 align-self-center">
                  <img src={product.product[2].img_main} alt="" srcset="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-sm-center text-md-start">{product.product[2].product_name}</h5>
                    <p className="card-text text-sm-center text-md-start">{product.product[2].rating} stars </p>
                    <p className="card-text text-sm-center text-md-start"><small className="text-muted">{`${product.product[2].currency}${product.product[2].price}`}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-2 me-1" style={{ maxWidth: '350px' }}>
              <div className="row g-0">
                <div className="col-md-6 align-self-center">
                  <img src={product.product[2].img_main} alt="" srcset="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-sm-center text-md-start">{product.product[2].product_name}</h5>
                    <p className="card-text text-sm-center text-md-start">{product.product[2].rating} stars </p>
                    <p className="card-text text-sm-center text-md-start"><small className="text-muted">{`${product.product[2].currency}${product.product[2].price}`}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-2 me-1" style={{ maxWidth: '350px' }}>
              <div className="row g-0">
                <div className="col-md-6 align-self-center">
                  <img src={product.product[2].img_main} alt="" srcset="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-sm-center text-md-start">{product.product[2].product_name}</h5>
                    <p className="card-text text-sm-center text-md-start">{product.product[2].rating} stars </p>
                    <p className="card-text text-sm-center text-md-start"><small className="text-muted">{`${product.product[2].currency}${product.product[2].price}`}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review section */}
      <div className="container py-3 text-sm-center text-md-start" style={{ borderBottom: '1px solid #60606030' }}>
        <h4 className="display-5">Reviews</h4>

        <div className="container mt-4 justify-content-start">
        <div className="row mb-2">
            <div className="col-sm align-self-center">
              <div className="row g-2">
                <div className="col-sm  col-md-3 col-lg-2">
                  <span><FaUserCircle size={55} /></span>
                </div>
                <div className="col-sm col-md-9 col-lg-10">
                  <h5 className="fs-4">John Doe</h5>
                  <h5 className="fs-6 text-muted">August 08, 2021</h5>
                  <h5 className="fs-6 text-muted">Rating</h5>
                </div>
              </div>
            </div>
            <div className="col-sm text-sm-center text-md-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe inventore, est excepturi iste sapiente numquam quas earum odio provident cumque?
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm align-self-center">
              <div className="row g-2">
                <div className="col-sm  col-md-3 col-lg-2">
                  <span><FaUserCircle size={55} /></span>
                </div>
                <div className="col-sm col-md-9 col-lg-10">
                  <h5 className="fs-4">John Doe</h5>
                  <h5 className="fs-6 text-muted">August 08, 2021</h5>
                  <h5 className="fs-6 text-muted">Rating</h5>
                </div>
              </div>
            </div>
            <div className="col-sm text-sm-center text-md-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe inventore, est excepturi iste sapiente numquam quas earum odio provident cumque?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;