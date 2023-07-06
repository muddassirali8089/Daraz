
import React from 'react';

const Carosal = () => {

  
  return (
    <div id="carouselExampleCaptions" className="carousel slide my_carosal w-100">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://gcp-img.slatic.net/lazada/298b1220-df61-4c09-9ffa-b8f533e9217e_PK-1920-300.png"
            className="d-block w-100"
            alt="..."
            style={{
              height: "400px",
              justifyContent: "center",
              objectFit: "cover",
            }}
          />
          <div className="carousel-caption ">
            <div className="carosal_text">
              <h3>Welcome to our place...</h3>
              <h2>Grow your business with Ongshon Digital</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://gcp-img.slatic.net/lazada/e9ef6d19-ba54-4ab3-adcc-c6db4e4dd41e_PK-1920-300.png"
            className="d-block w-100"
            alt="..."
            style={{
              height: "400px",
              justifyContent: "center",
              objectFit: "cover",
            }}
          />
          <div className="carousel-caption ">
            <div className="carosal_text">
              <h3>Welcome to our place...</h3>
              <h2>Grow your business with Ongshon Digital</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://icms-image.slatic.net/images/ims-web/cf07e1fa-e3ec-4c2d-a1eb-aea1a2e6a34e.jpg"
            className="d-block w-100"
            alt="..."
            style={{
              height: "400px",
              justifyContent: "center",
              objectFit: "cover",
            }}
          />
          <div className="carousel-caption ">
            <div className="carosal_text">
              <h3>Welcome to our place...</h3>
              <h2>Grow your business with Ongshon Digital</h2>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carosal;
