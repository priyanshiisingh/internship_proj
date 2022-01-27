import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ModalBod from "../components/ModalBod.js";

export default function Modalwindow() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg="white" fontSize="4xl" borderWidth="1px">
        Card Title
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth={{ md: "75%" }}>
          <ModalCloseButton />
          <ModalBody>
            <ModalBod
              display={{ md: "flex" }}
              justifyContent={{ md: "space-evenly" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
