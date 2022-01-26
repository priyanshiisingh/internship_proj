import { Image } from "@chakra-ui/react";
import source from "../assets/Background.jpg";

function background() {
  return (
    <div>
      <Image src={source} alt="bg" display={"flex"} align={"center"} />
    </div>
  );
}

export default background;
