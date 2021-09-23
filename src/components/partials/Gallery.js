import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { makeStyles } from "@material-ui/core";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/3.png";
import img3 from "../assets/img/2.png";

const useStyle = makeStyles((theme) => ({
  testimonyDiv: {
    margin: "2rem auto",
    maxWidth: "120px",
  },
}));
const TestimonyCaruorel = () => {
  const classes = useStyle();
  return (
    <div className={classes.tesimonyiv}>
      <Carousel autoPlay infiniteLoDop>
        <div data-aos="fade-up">
          <div>
            <img style={{ width: "50rem" }} src={img1} alt="" />
            <p>See On Upwork</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <img style={{ width: "50rem" }} src={img2} alt="" />
            <p>See On Upwork</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <img style={{ width: "50rem" }} src={img3} alt="" />
            <p>See On Upwork</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonyCaruorel;
