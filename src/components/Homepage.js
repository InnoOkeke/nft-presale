import React from "react";
import HeadBanner from "./partials/HeadBanner";
import SchedulePage from "./partials/SchedulePage";
import ContactPage from "./partials/ContactPage";
import WhatWeDo from "./partials/WhatWeDo";
import FreqAskedQuest from "../components/partials/FreqAskedQuest";
import Dapp from "./Dapp";

const Homepage = () => {
  return (
    <div>
      <HeadBanner />
      <div style={{ marginTop: "2rem" }}>
        <Dapp />
      </div>
      <WhatWeDo />
      <SchedulePage />

      <FreqAskedQuest />

      <ContactPage />
    </div>
  );
};

export default Homepage;
