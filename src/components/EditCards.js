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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

export default function Samplecard() {
  return (
    <Center py={6}>
      <Stack
        display="flex"
        borderColor="#b7b7a4"
        alignItems="center"
        justifyContent="space-around"
        borderWidth="1px"
        borderRadius="50px"
        mx={{ base: "70px", lg: "70px" }}
        w={{ sm: "100%", md: "83%" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2lg"}
        padding={4}>
        <Stack
          width={{ sm: "50%" }}
          direction={{ base: "row", md: "column" }}
          justifyContent={{ base: "center" }}
          alignItems="center">
          <Icon as={MdSettings} boxSize="4em" />
          <Stack
            flex={1}
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}>
              Create your card in 5 minutes
            </Text>
          </Stack>
        </Stack>

        <Stack
          width={{ sm: "50%" }}
          direction={{ base: "row", md: "column" }}
          justifyContent={{ base: "center" }}
          alignItems="center">
          <Icon as={MdSettings} boxSize="4em" />
          <Stack
            flex={1}
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}>
              Create your card in 5 minutes
            </Text>
          </Stack>
        </Stack>

        <Stack
          width={{ sm: "50%" }}
          direction={{ base: "row", md: "column" }}
          justifyContent={{ base: "center" }}
          alignItems="center">
          <Icon as={MdSettings} boxSize="4em" />
          <Stack
            flex={1}
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}>
              Create your card in 5 minutes
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
