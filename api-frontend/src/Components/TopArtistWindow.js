import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .block {
    max-width: 350px;
    padding: 1rem;
    position: relative;
    border: solid linear-gradient(to right, red, purple);
    padding: 3px;
  }
  .content {
    background: #1b262c;
    color: white;
    padding: 2rem;
  }

  h3 {
    font-size: 1.3em;
    margin-left: 15%;
  }
`;

export const TopArtistWindow = () => (
  <Styles>
    <div className="block">
      <div className="content">
        <h3>Top 10 Artists</h3>
        <ol>
          <li>Taylor Swift</li>
          <li>Jawsh 685 </li>
          <li>Morgan Wallen</li>
          <li>Luke Combs</li>
          <li>Maroon 5</li>
          <li>Harry Styles</li>
          <li>Megan Thee Stallion</li>
          <li>DaBaby feat. Roddy Ricch</li>
          <li>Blake Shelton</li>
          <li>DJ Khaled feat. Drake</li>
        </ol>
      </div>
    </div>
  </Styles>
);
