import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .block {
    max-width: 350px;
    padding: 1rem;
    position: relative;
    border: solid linear-gradient(to right, red, purple);
    padding: 2px;
  }
  .content {
    background: #1b262c;
    color: white;
    padding: 2rem;
  }

  h3 {
    font-size: 1.3em;
    margin-left: 35%;
  }
  ul {
    list-style-type: none;
    margin-left: 10%;
  }
`;

export const Links = () => (
  <Styles>
    <div className="block">
      <div className="content">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="www.musixmatch.com">MusixMatch</a>
          </li>
          <li>
            <a href="www.lyricsmania.com">Lyrics Mania</a>
          </li>
          <li>
            <a href="www.genius.com">Genius</a>
          </li>
          <li>
            <a href="www.quicklyric.com">Quicklyric</a>
          </li>
          <li>
            <a href="www.lyrically.com">Lyrics Mania</a>
          </li>
          <li>
            <a href="www.lyricsmania.com">Lyrically</a>
          </li>
          <li>
            <a href="www.lyricsgrabber.com">Lyrics Grabber</a>
          </li>
          <li>
            <a href="www.lyricsmania.com">Lyrics Mania</a>
          </li>
          <li>
            <a href="www.lyricsmania.com">Lyrics Mania</a>
          </li>
          <li>
            <a href="www.lyricsmania.com">Lyrics Mania</a>
          </li>
        </ul>
      </div>
    </div>
  </Styles>
);
