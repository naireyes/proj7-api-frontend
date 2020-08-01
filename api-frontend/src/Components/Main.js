import React from "react";
// import "./Main.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Main() {
  return (
    <div>
      <Jumbotron>
        <h1 className="text-white">Taylor Swift</h1>
        <p className="text-white">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="default">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Main;
