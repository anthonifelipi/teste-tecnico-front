import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormUpdateContact from "../FormUpdateContact";
import { BiEditAlt } from "react-icons/bi";


const ModalUpdateContact = ({ contactId, contacts }) => {
  const {
    isOpen: isOpenModalContactUpdate,
    onOpen: onOpenModalContactUpdate,
    onClose: onCloseModalContactUpdate,
  } = useDisclosure();

  return (
    <>
      <Button
        margin="2%"
        size="60px"
        padding="2px"
        backgroundColor="#F8F8FF"
        border="2px solid"
        _hover={{
          background: "	#e74843",
          color: "#FFF",
          border: "2px solid #000000",
        }}
        onClick={() => onOpenModalContactUpdate()}
      >
        <BiEditAlt />
      </Button>
      <Modal
        isOpen={isOpenModalContactUpdate}
        onClose={onCloseModalContactUpdate}
      >
        <ModalOverlay />
        <ModalContent width="320px" display="flex" alignItems="center">
          <ModalHeader textAlign="center" fontSize="16px">
            Editar Contato
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormUpdateContact contactId={contactId} contacts={contacts} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalUpdateContact;
