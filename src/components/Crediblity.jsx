import "../components/css/cred.css";

function Credibility() {
  return (
    <>
      <section className="credible">
        <div className="container">
          <div className="col-md-12 p-4">
            <div className="row gap-auto">
              {/* Premium Quality */}
              <div className="col-md-4 d-flex">
                <div className="emoji fs-1 me-4">
                  <i className="fas fa-medal  color"></i> {/* Use medal icon */}
                </div>
                <div className="text">
                  <h2 className="ubuntu-regular color">Premium Quality</h2>
                  <p className="color fw-light">
                    We provide the best to our customers
                  </p>
                </div>
              </div>

              {/* Cruelty Free */}
              <div className="col-md-4 d-flex">
                <div className="emoji fs-1 me-4">
                  <i className="fas fa-leaf color"></i> {/* Use leaf icon */}
                </div>
                <div className="text">
                  <h2 className="ubuntu-regular color">Cruelty Free</h2>
                  <p className="color fw-light">
                    We are cruelty free and do not test on animals
                  </p>
                </div>
              </div>

              {/* Vegan Product */}
              <div className="col-md-4 d-flex">
                <div className="emoji fs-1 me-4">
                  <i className="fas fa-seedling color"></i>{" "}
                  {/* Use seedling icon */}
                </div>
                <div className="text">
                  <h2 className="ubuntu-regular color">Vegan Product</h2>
                  <p className="color fw-light">
                    We provide vegan products to our customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Credibility;
