import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../assets/img/leather-bag.png";

const useStyles = makeStyles((theme) => ({
  textDiv: {
    marginTop: '1rem',
    [theme.breakpoints.down("sm")]: {
    },
  },
}));

function WhatWeDo() {
  const classes = useStyles();
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="row justify-content-between" >
            <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img src={image1} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>
            <div  class={`col-lg-6 pt-5 pt-lg-0 ${classes.textDiv}`}>
              <h3 data-aos="fade-up">Enjoy our Exclusive Service</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>DIGITAL NFT</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div  class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-cube-alt"></i>
                  <h4>PHYSICAL NFT</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div id="toSchedule"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
