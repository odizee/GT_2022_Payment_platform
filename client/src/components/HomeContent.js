import React from "react";
import NavBar from "./NavBar";

function HomeContent() {
  return (
    <div>
      <NavBar />
      <div id='header'>
        <div id='left'>
          <div id='sec2'>
            <h1>
              Enjoy<span> Easy</span>,<span> Fast</span> and<span> Secure</span>{" "}
              Banking
            </h1>

            <p>
              Manage everyting directly and easily with GT2022 Set your payment
              limit, send money to friends and families, give monthly salary to
              your employees. All-in-one app.
            </p>

            <p>
              <button id='btn1'>Get Started</button>
              <a href='#'>Get a Demo</a>
            </p>

            <p>We are working with</p>

            <footer>
              <div>
                <h6>
                  <img src='../images/three.svg' />
                  Paypall
                </h6>
              </div>

              <div>
                <img src='../images/two.png' />
                <h6>Interswitch</h6>
              </div>

              <div>
                <img src='../images/two.svg' />
                <h6>MTN</h6>
              </div>
            </footer>
          </div>
        </div>

        <div id='right'></div>
      </div>
    </div>
  );
}

export default HomeContent;
