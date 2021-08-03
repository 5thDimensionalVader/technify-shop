import shopStyles from './shop.module.css';

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
    </div>
  );
}

export default Shop;