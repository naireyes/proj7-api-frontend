import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import taylorSwft from "../assets/taylor-swift-thumb.png";

const Styles = styled.div`
  .jumbo {
    background: url(${taylorSwft}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    font-size: 4em;
    height: 400px;
    position: relative;
    z-index: -2;
    width: 100vw;
  }
  .overlay {
    background-color: #cf1b1b;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  h1 {
    font-size: 2em;
  }
`;

export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <h1>Taylor Swift</h1>
      <p>"the 1"</p>
    </Jumbo>
  </Styles>
);
