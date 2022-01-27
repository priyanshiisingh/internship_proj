import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Box,
  Image,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Carousel from "../components/Carouselslides.js";

export default function ModalBod() {
  return (
    <Center py={6}>
      <Stack
        mt={"35px"}
        display={{ md: "flex" }}
        alignItems="center"
        w={{ sm: "100%", md: "100%" }}
        direction={{ base: "column", md: "row" }}
        padding={4}>
        <Box
          maxH={{ sm: "full" }}
          width={{ sm: "100%", md: "50%" }}
          overflow="hidden"
          alignItems="center">
          <Carousel />
        </Box>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Text fontSize="1.5em">Your Better Half</Text>
          <HStack width="50%" display="flex" justifyContent="space-around">
            <HStack>
              <Text fontWeight={600} color={"gray.500"} size="sm">
                $399
              </Text>
              <Text as="s">$1000</Text>
            </HStack>
            <Text fontWeight={600} color={"green"} size="sm">
              60% Off
            </Text>
          </HStack>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            perspiciatis cumque eum. Soluta cupiditate dolorum ab deleniti
            officiis delectus minima, laborum repellat adipisci veniam placeat
            nisi obcaecati mollitia aliquid. Soluta.
          </Text>

          <Stack
            w={"50%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Button
              flex={1}
              height={"70px"}
              fontSize={"lg"}
              rounded={{ sm: "full", md: "lg" }}
              bg={"red"}
              color={"white"}
              _hover={{
                bg: "#ae2012",
              }}
              _focus={{
                bg: "#ae2012",
              }}>
              Try this Card
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
