import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .block {
    max-width: 450px;
    padding: 1rem;
    position: relative;
    border: solid linear-gradient(to right, red, purple);
    padding: 3px;
  }
  .content {
    background: #1b262c;
    color: white;
    padding: 2rem 2em 2em 4em;
    width: 300;
  }

  h5 {
    font-size: 1em;
    margin-left: 25%;
  }
`;

export const TopSongsWindow = () => (
  <Styles>
    <div className="block">
      <div className="content">
        <h5>Top 10 Songs</h5>
        <ol>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
          <li>Test - Song of the day</li>
        </ol>
      </div>
    </div>
  </Styles>
);
