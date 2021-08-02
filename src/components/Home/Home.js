import homeStyles from './home.module.css';
import iPhone_11 from '../../assets/img/iPhone_11_Pro.png';
import iPhone_11_c from '../../assets/img/iPhone_11_Pro_c.jpg';
import iPhone_XR from '../../assets/img/iPhone_XR_blue.png';
import iPhone_XR_c from '../../assets/img/iPhone_XR_c.jpg';
import S21_Ultra from '../../assets/img/S21_Ultra.png';
import iPhone_XS from '../../assets/img/iPhone_XS.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import product from '../../assets/data/data.js';


const Home = () => {
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

      <div className="container bg-light" style={{ borderTop: '1px solid #60606030', borderBottom: '1px solid #60606030' }}>
        <span className="display-4 fw-lighter">Featured Products</span>
        <div className="container my-2">
          {/* Carousel section */}
          {/* <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={`${iPhone_XR_c}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{product.product[0].product_name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={`${iPhone_11_c}`}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="mb-5">Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>

      <div className="container bg-light" style={{ borderTop: '1px solid #60606030', borderBottom: '1px solid #60606030' }}>
          <div className="row justify-content-center">
            <div className="col-sm col-md-6 text-start">
              <span className="display-6 fw-lighter">Newsletter</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos laudantium, ex maiores id assumenda.</p>
            </div>
            <div className="col-sm">
              
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;