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
    padding: 2em;
    width: 300;
  }

  h3 {
    font-size: 1.3em;
    margin-left: 15%;
  }
`;

export const TopSongsWindow = () => (
  <Styles>
    <div className="block">
      <div className="content">
        <h5>Top 10 Songs</h5>
        <ol>
          <li>the 1</li>
          <li>Happy Anywhere</li>
          <li>Nobody's Love</li>
          <li>Savage Love</li>
          <li>One Margarita</li>
          <li>Blinding Lights</li>
          <li>exile</li>
          <li>Patience</li>
          <li>Roses - Imanbek Remix</li>
          <li>cardigan</li>
        </ol>
      </div>
    </div>
  </Styles>
);
