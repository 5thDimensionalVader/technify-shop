import shopStyles from './shop.module.css';
import { Link } from 'react-router-dom';
import { news } from '../../assets/'
import data from '../../assets/data/data.js';
import { useHistory } from 'react-router-dom';

const Shop = () => {
  const history = useHistory();

  const goToProduct = (id) => {
    history.push('/product', { product_id: id });
  }
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
            {
              data.categories.map((category, key) => (
                <div key={key} className="col-md">
                  <div className="card">
                    <div className="card-header">
                      Featured
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{category.name}</h4>
                      <p className="text-muted card-text">
                        {category.category_description}
                      </p>
                      <Link to="#" className="btn btn-warning">Go to Category</Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="container my-4 p-4" style={{ borderBottom: '1px solid #60606030' }}>
        <div className="row justify-content-center">
          <div className="col-md">
            <img src={news} alt="" className="img-fluid" />
          </div>
          <div className="col-md text-sm-center text-md-start align-self-center g-3">
            <h4 className="display-5 fw-lighter">Newsletter</h4>
            <div className="row my-3 g-2">
              <div className="col-md">
                <input type="email" placeholder="Email Address" className="form-control" />
              </div>
              <div className="col-md">
                <button className="btn btn-secondary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className="container mt-4 p-4" style={{ borderBottom: '1px solid #60606030' }}>
        <div className="row g-0">
          <div className="col-md-4 align-self-center">
            <h4 className="display-3 fw-lighter text-md-start text-sm-center">All Products</h4>
            <p className="lead text-md-start text-sm-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maxime impedit natus expedita maiores.</p>
            <div className="text-md-start text-sm-center mt-4">
              <button className="btn btn-secondary justify-content-start">Browse All</button>
            </div>
          </div>
          <div className="col-md-8 mt-2">
            <div className="container">
              <div className="row justify-content-sm-center g-1">
                {
                  data.product.map((product, key) => (
                    <div key={key} className="card mb-2 me-1" style={{ maxWidth: '400px' }} onClick={() => goToProduct(key)}>
                      <div className="row g-0">
                        <div className="col-md-6 align-self-center">
                          <img src={product.img_main} alt="" srcset="" className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h5 className="card-title text-sm-center text-md-start">{product.product_name}</h5>
                            <p className="card-text text-sm-center text-md-start">{product.product_description}</p>
                            <p className="card-text text-sm-center text-md-start"><small className="text-muted">{`${product.currency}${product.price}`}</small></p>
                          </div>
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
    </div>
  );
}

export default Shop;