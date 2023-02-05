import React from "react";
import "./Landing.css";
import { execomDetails } from "../../assets/export";

function Landing() {
  return (
    <section className="OurExecom">
      <h1 className="Execom commonHeading"> MEET OUR TEAM </h1>
      <div className="members_of_GDSC">
        {/* <div className="row"> */}

        <div className="rowCard">
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
          <div class="card">Aniz</div>
         
        </div>

        {/* {execomDetails.map((data)=>{
          <div className="rowCard">
            <div className={data.index + `${"card"}`}>Team</div>
          </div>
          
        })} */}

        {/* </div> */}
      </div>
    </section>
  );
}

export default Landing;
