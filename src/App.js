import { ChakraProvider, Container } from "@chakra-ui/react";
import Navbar from "./layouts/Navbar.js";
import Body from "./layouts/Body.js";
import Fonts from "./elements/Fonts.js";
import theme from "./elements/Theme.js";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Fonts />
        <Navbar />
        <Body />
      </ChakraProvider>
    </div>
  );
}

export default App;
