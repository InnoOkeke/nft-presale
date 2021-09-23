import React from "react";
import img4 from "../assets/img/bag-nft.jpg";
import SectionHeader from "./SectionHeader";

function ContactPage() {
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <SectionHeader
            heading="Sign up for more info"
            slogan="In depth product info, roadmap, collaborations, pre sale date"
          />

          <div class="row">
            <div
              class="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="info">
                <img
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                  src={img4}
                />
              </div>
            </div>

            <div
              class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form method="post" className="php-email-form">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="fName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      class="form-control"
                      id="fName"
                      placeholder="First Name"
                      autoComplete="Off"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lName">Last Name</label>
                    <input
                      type="text"
                      name="lName"
                      class="form-control"
                      id="lName"
                      placeholder="Last Name"
                      autoComplete="Off"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      autoComplete="Off"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="twitterHandle">Twitter Handle</label>
                    <input
                      type="text"
                      name="twitterHandle"
                      class="form-control"
                      id="twitterHandle"
                      placeholder="Twitter handle"
                      autoComplete="Off"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label for="name">Enquiry</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="10"
                    required
                    autoComplete="Off"
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
