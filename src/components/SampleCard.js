import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Box,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import source1 from "../assets/Page1.jpg";
import source2 from "../assets/Page2.jpg";
import source3 from "../assets/Page3.jpg";
import Modalwindow from "../components/Modalwindow.js";

export default function Samplecard() {
  return (
    <Center py={6}>
      <Stack
        borderColor="#b7b7a4"
        borderWidth="1px"
        borderRadius="50px"
        mx={{ base: "70px", lg: "70px" }}
        w={{ sm: "100%", md: "83%" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}>
        <Box
          maxH="full"
          borderWidth="1px"
          borderRadius="50px"
          overflow="hidden"
          alignItems="center">
          <Image objectFit="cover" boxSize="100%" src={source1} />
        </Box>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Card Details
          </Heading>
          <HStack width="50%" display="flex" justifyContent="space-around">
            <HStack>
              <Text fontWeight={600} color={"gray.500"} size="sm">
                $499
              </Text>
              <Text as="s">$2000</Text>
            </HStack>
            <Text fontWeight={600} color={"green"} size="sm">
              75% Off
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
              bg={"black"}
              color={"white"}
              _hover={{
                bg: "blue.300",
              }}
              _focus={{
                bg: "blue.300",
              }}>
              Try this Card
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
