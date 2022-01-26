import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./layouts/Navbar.js";
import Background from "./components/Background.js";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Background />
      </ChakraProvider>
    </div>
  );
}

export default App;
