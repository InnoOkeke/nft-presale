import React, { useState } from "react";
import VideoModal from "../partials/VideoModal";
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-router-dom"

function HeadBanner() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div id="topTop"></div>
      <section id="hero">
        <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <h1 class="mb-4 pb-0">
            THE <ReactTypingEffect text={["FIRST", "BEST", "FINEST"]} />{" "}
            PHYSICAL
            <br />
            NFT KEYCHAIN
          </h1>
          <p class="mb-4 pb-0">
            Showing off your favourite Artwork and Collections...
          </p>
          <a
            href="#here"
            onClick={() => {
              setOpen(!isOpen);
            }}
            class="glightbox play-btn mb-4"
          >
            {" "}
          </a>
          <Link to="/app"> 
            <a href="/" class="about-btn scrollto">
            BUY NOW
          </a>
          </Link>
          <div id="toShop"></div>
        </div>
      </section>
      {isOpen && <VideoModal />}
    </div>
  );
}

export default HeadBanner;
