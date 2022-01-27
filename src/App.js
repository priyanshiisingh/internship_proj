import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./layouts/Navbar.js";
import Background from "./components/Background.js";
import Samplecard from "./components/SampleCard.js";
import Editcards from "./components/EditCards.js";

function App() {
  return (
    <div className="App" align="center">
      <ChakraProvider>
        <Navbar />
        <Background />
        <Samplecard />
        <Editcards />
      </ChakraProvider>
    </div>
  );
}

export default App;
