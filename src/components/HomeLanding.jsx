import "../components/css/HomeLanding.css";
import Landing from "/src/assets/image/landing.png";
import vidbg from "/src/assets/videobg.mp4";


function HomeLanding() {
  return (
    <section className="home-landing position-relative" id="Home">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src={vidbg} type="video/mp4" />
      </video>

      {/* Overlay Container */}
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row w-100">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start p-4">
            <p className="color h0">PREMIUM PRODUCTS</p>
            <h3 className="color merriweather-bold display-4 fw-bold">
              Radiant Beauty
            </h3>
            <p className="lead color dancing-script">
              Elevate your confidence with radiant, healthy skin—crafted by the
              experts at Verah Pure Cosmetics.
            </p>
            <button className="button mt-4">Shop Now</button>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            {/* Image of the woman */}
            <img
              src={Landing}
              alt="Radiant Beauty Woman"
              className="img-fluid woman-image rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLanding;
