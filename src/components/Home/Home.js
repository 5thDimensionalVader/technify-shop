import homeStyles from './home.module.css';
import { c_1, c_2, c_3, c_4, iPhone_11, iPhone_XR } from '../../assets';
import { Link } from 'react-router-dom';
import product from '../../assets/data/data.js';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const goToProduct = (id) => {
    history.push('/product', {product_id:id});
  }

  return (
    <div className="container">

      <div className="container mb-5">
        <h4 className="display-4 fw-lighter">Shop for everything tech at Technify!</h4>

        <div className="row g-3 my-5">
          <div className="col-sm">
            <img src={`${iPhone_11}`} alt="" className="img-fluid" />
          </div>
          <div className="col-sm">
            <img src={`${iPhone_XR}`} alt="" className="img-fluid" />
          </div>
          <div className="col-sm">
            <img src={`${iPhone_11}`} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="text-center">
          <Link className="btn btn-primary btn-md" to="/shop">Shop Now</Link>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="container bg-light" style={{ borderTop: '1px solid #60606030', borderBottom: '1px solid #60606030' }}>
        <h4 className="display-4 fw-lighter my-4">Featured Products</h4>
        {/* Carousel section */}
        <div className="container my-3">
          <div id="carouselMain" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={c_1} alt="First Slide" className="d-block w-100 img-fluid" />
              </div>
              <div className="carousel-item">
                <img src={c_2} alt="Second Slide" className="d-block w-100 img-fluid" />
              </div>
              <div className="carousel-item">
                <img src={c_3} alt="Third Slide" className="d-block w-100 img-fluid" />
              </div>
              <div className="carousel-item">
                <img src={c_4} alt="Fourth Slide" className="d-block w-100 img-fluid" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Prev</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container bg-light py-5" style={{ borderBottom: '1px solid #60606030' }}>
        <div className="row justify-content-center g-4">
          <div className="col-sm-4 col-md-6 text-sm-center text-md-start">
            <span className="display-4 fw-lighter">Newsletter</span>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos laudantium, ex maiores id assumenda.</p>
          </div>
          <div className="col-sm-8 col-md-6 align-self-center">
            <div className="row row-cols-2 g-3">
              <div className="form-floating">
                <input type="search" id="newsletterSearch" className="form-control" placeholder="Email Address" />
                <label>Email Address</label>
              </div>
              <button className="btn btn-secondary btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-light py-5" style={{ borderBottom: '1px solid #60606030' }}>
        <div className="row justify-content-center">

          <div className="col-sm align-self-center">
            <div className="card mb-3" style={{ maxWidth: '400px' }} onClick={() => goToProduct(2)}>
              <div className="row g-0">
                <div className="col-md-6 align-self-center">
                  <img src={product.product[2].img_main} alt="" srcset="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-sm-center text-md-start">{product.product[2].product_name}</h5>
                    <p className="card-text text-sm-center text-md-start">{product.product[2].product_description}</p>
                    <p className="card-text text-sm-center text-md-start"><small className="text-muted">{`${product.product[2].currency}${product.product[2].price}`}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="container">
              <div className="row justify-content-sm-center g-2">
                {
                  product.product.map((product, key) => (
                    <div key={key} className="col-sm-6">
                      <div className="card" style={{ maxWidth: '18rem', maxHeight: '25rem' }} onClick={() => goToProduct(key)}>
                        {/* <img src={product.img_main} alt="" className="card-img-top img-fluid"/> */}
                        <div className="card-body">
                          <h5 className="card-title">{product.product_name}</h5>
                          <p className="card-text">{product.product_description}</p>
                          <p className="card-text text-muted">{`${product.currency}${product.price}`}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* About Your Shop Section */}
      <div className="container bg-light py-5" style={{ borderBottom: '1px solid #60606030' }}>
        <h4 className="display-5 fw-lighter">About Technify</h4>
        <div className="container w-75">
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, porro. Magni nam sit autem, non commodi ducimus veritatis amet sint?</p>
        </div>
      </div>
    </div>
  );
}

export default Home;