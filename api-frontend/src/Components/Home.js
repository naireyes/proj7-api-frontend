import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import taylorSwft from "../assets/taylor-swift-thumb.png";
import { TopSongsWindow } from "./TopSongsWindow";
import { TopArtistWindow } from "./TopArtistWindow";
import { Links } from "./Links";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "./Footer";

const Styles = styled.div`
  .jumbo {
    background: url(${taylorSwft}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    font-size: 4em;
    height: 300px;
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
    font-size: 1.5em;
    margin-left: 10%;
  }
  p {
    margin-left: 20%;
  }
  .box {
      display: grid:
      
  }
`;

export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <h1>Taylor Swift</h1>
      <p>"the 1"</p>
    </Jumbo>
    <Container>
      <Row>
        <Col>
          <TopSongsWindow />
        </Col>
        <Col>
          <TopArtistWindow />
        </Col>
        <Col>
          <Links />
        </Col>
      </Row>
    </Container>
    <Footer />
  </Styles>
);
