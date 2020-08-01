import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Styles = styled.div`
  .navbar {
    background-color: #1b262c;
    height: 3.5em;
  }
  a {
    text-align: center;
  }
  icon {
    color: white;
  }
`;

export const Footer = () => (
  <Styles>
    <Navbar expand="lg">
      const icon = <FontAwesomeIcon icon={faFacebook} />
    </Navbar>
  </Styles>
);
