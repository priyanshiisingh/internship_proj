import { Image } from "@chakra-ui/react";
import source from "../assets/Background.jpg";
import { Box, Text } from "@chakra-ui/react";

function background() {
  return (
    <div>
      <Box
        mx={{ base: "20px", lg: "70px" }}
        maxH="250px"
        borderWidth="1px"
        borderRadius="50px"
        overflow="hidden"
        alignItems="center">
        <Image src={source} alt="bg" />
      </Box>
    </div>
  );
}

export default background;
