import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  h2 {
    font-size: 3em;
    text-align: center;
  }
`;

export const Songs = () => (
  <Styles>
    <h2>Top 20 Songs of the Day!</h2>
  </Styles>
);
