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
          <div class="card"><h3 className="ExecomPosition">Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Tech Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Design Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Operation Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">App Dev Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Social Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Content Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Graphic Design Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Outreach Lead</h3> </div>
          <div class="card"><h3 className="ExecomPosition">Web Lead</h3> </div>
          
         
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
