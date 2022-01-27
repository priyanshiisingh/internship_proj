import Background from "../components/Background.js";
import Samplecard from "../components/SampleCard.js";
import Editcards from "../components/EditCards.js";
import Carousel from "../components/MobileViewCarousel.js";
import BgText from "../components/BgText.js";

export default function Body() {
  return (
    <div>
      <Background />
      <BgText />
      <Samplecard />
      <Editcards />
      {/* <Carousel /> */}
    </div>
  );
}
