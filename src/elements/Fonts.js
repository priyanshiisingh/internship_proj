import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family:'IBM Plex Serif';
        font-style: serif;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,100&display=swap');
      }
      `}
  />
);

export default Fonts;
