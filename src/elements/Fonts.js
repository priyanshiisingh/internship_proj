import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Aref Ruqaa';
        font-style: serif;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap');
      }
      `}
  />
);

export default Fonts;
