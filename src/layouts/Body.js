import Background from "../elements/Background.js";
import Samplecard from "../components/SampleCard.js";
import Editcards from "../components/EditCards.js";
import Carousel from "../components/MobileViewCarousel.js";
import BgText from "../elements/BgText.js";
import FeatureText from "../elements/FeatureText.js";
import Modalwindow from "../components/Modalwindow.js";

export default function Body() {
  return (
    <div align="center">
      <Background />
      <BgText />
      <Samplecard />
      <FeatureText />
      <Editcards />
      <Modalwindow />
      {/* <Carousel /> */}
    </div>
  );
}
