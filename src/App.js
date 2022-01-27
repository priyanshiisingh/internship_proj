import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./layouts/Navbar.js";
import Body from "./layouts/Body.js";

function App() {
  return (
    <div className="App" align="center">
      <ChakraProvider>
        <Navbar />
        <Body />
      </ChakraProvider>
    </div>
  );
}

export default App;
