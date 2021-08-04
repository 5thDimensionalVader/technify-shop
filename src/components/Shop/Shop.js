import shopStyles from './shop.module.css';
import { Link } from 'react-router-dom';
import {c_1} from '../../assets/'

const Shop = () => {
  return (
    <div className="container">

      <div className="container text-center my-4">
        <h4 className="display-4 fw-lighter">Shop for everything tech at Technify!</h4>
        <div className="container align-self-center mt-5 w-75">
          <div className="row row-cols-2 g-3">
            <div>
              <input type="search" className="form-control" placeholder="Search" />
            </div>
            <button className="btn btn-secondary" type="submit">Submit</button>
          </div>
        </div>
      </div>



      {/* Featured Category section */}
      <div className="container bg-light p-5 text-center" style={{ borderTop: '1px solid #60606030', borderBottom: '1px solid #60606030' }}>

        <div className="text-center">
          <h4 className="display-5 fw-lighter">Featured Categories</h4>
        </div>

        <div className="text-muted text-center py-3">
          <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse cumque a rerum omnis accusamus saepe debitis enim nemo. Esse voluptates omnis eligendi, libero maiores enim magnam? Neque, assumenda quos.</p>
        </div>

        {/* Category Section */}
        <div className="container">
          <div className="row justify-content-center g-2">

            <div className="col-md">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h4 className="card-title">Mobile Phones</h4>
                  <p className="text-muted card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!
                  </p>
                  <Link to="#" className="btn btn-warning">Go to Category</Link>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h4 className="card-title">Laptops</h4>
                  <p className="text-muted card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!
                  </p>
                  <Link to="#" className="btn btn-warning">Go to Category</Link>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h4 className="card-title">Gaming Consoles</h4>
                  <p className="text-muted card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!
                  </p>
                  <Link to="#" className="btn btn-warning">Go to Category</Link>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h4 className="card-title">Tablets</h4>
                  <p className="text-muted card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, rem!
                  </p>
                  <Link to="#" className="btn btn-warning">Go to Category</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="container my-4 p-4" style={{borderBottom: '1px solid #60606030'}}>
          <div className="row justify-content-center">
            <div className="col-md">
              <img src={c_1} alt="" className="img-fluid"/>
            </div>
            <div className="col-md text-sm-center text-md-start align-self-center g-3">
              <h4 className="display-5 fw-lighter">Newsletter</h4>
              <div className="row my-3 g-2">
                <div className="col-md">
                  <input type="email" placeholder="Email Address" className="form-control"/>
                </div>
                <div className="col-md">
                  <button className="btn btn-secondary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Product section */}
      

    </div>
  );
}

export default Shop;