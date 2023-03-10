import React from "react";
import "./Events.css";

function Events() {
  return (
    <section class="hero-section">
        <h1 className="EventsHead commonHeading"> What do we do ? </h1>
      <div class="card-grid">
        <a class="card_Events" href="#">
          <div
            class="card__background"
            // style="background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Events</h3>
          </div>
        </a>
        <a class="card_Events" href="#">
          <div
            class="card__background"
            // style="background-image: url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">RebootEd</h3>
          </div>
        </a>
        <li class="card_Events" href="#">
          <div
            class="card__background"
            // style="background-image: url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Study Jam</h3>
          </div>
        </li>
        <a class="card_Events" href="#">
          <div
            class="card__background"
            // style="background-image: url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
          ></div>
          <div class="card__content">
            <p class="card__category">Category</p>
            <h3 class="card__heading">Google</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Events;
