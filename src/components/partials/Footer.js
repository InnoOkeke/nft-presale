import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <img
                  src="/assets/img/artfact-logo.PNG"
                  alt="TheEvenet"
                  style={{ width: "10rem", height: "10rem" }}
                />
                <p>
                  In alias aperiam. Placeat tempore facere. Officiis voluptate
                  ipsam vel eveniet est dolor et totam porro.
                </p>
              </div>

              <div className="col-lg-5 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-house-fill"></i>{" "}
                    <a href="www.google.com">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-cart-check"></i>{" "}
                    <a href="www.google.com">Shop</a>
                  </li>
                  <li>
                    <i className="bi bi-people"></i>{" "}
                    <a href="www.google.com">About</a>
                  </li>
                  <li>
                    <i className="bi bi-wrench"></i>{" "}
                    <a href="www.google.com">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-hand-thumbs-up"></i>{" "}
                    <a href="www.google.com">Terms of service</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> admin@artifactnft.io
                  <br />
                </p>

                <div className="social-links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ArtifactNFT"
                    className="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/artifactnft/"
                    className="instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://facebook.com/ArtifactNFT"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            © <strong>Artifact NFT</strong>
          </div>
          <div className="credits">
            Designed by <a href="www.google.com"> Agho.dev </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
