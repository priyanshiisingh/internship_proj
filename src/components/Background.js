import { Image } from "@chakra-ui/react";

function background() {
  return (
    <div>
      <Image
        src="src\assets\Background.jpg"
        alt="bg"
        display={"flex"}
        align={"center"}
      />
    </div>
  );
}

export default background;
