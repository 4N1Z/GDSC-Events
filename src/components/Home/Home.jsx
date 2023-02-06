import React from "react";
import "./Home.css";

import { HomeVideo } from "../../assets/export";

function Home() {
  return (
    <section className="HomeSection">
      {/* <div className="video-container">
        <video width="100%" height="100%" autoplay>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div className="gdscHome">
        <h1 className="HomeHeading commonHeadng">We are GDSC SCTCE</h1>
        <p className="HomeSubHeading">
          We are packed with a team of Elite Computer Engineers who excel in
          which ever field they come inn contact with. We also strive to help
          the poor when in need and support the needy
        </p>
      </div>

      {/* <div class="video-background">
        <video width="100%" height="100%" autoplay>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="video-text">
          <div className="gdscHome">
            <h1 className="HomeHeading commonHeadng">We are GDSC SCTCE</h1>
            <p className="HomeSubHeading">
              We are packed with a team of Elite Computer Engineers who excel in
              which ever field they come inn contact with. We also strive to
              help the poor when in need and support the needy
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Home;
