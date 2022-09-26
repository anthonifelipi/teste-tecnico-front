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
import FormAddContact from "../FormAddContact";

const ModalAddContact = ({ listContacts, setTeste }) => {
  const {
    isOpen: isOpenModalContactAdd,
    onOpen: onOpenModalContactAdd,
    onClose: onCloseModalContactAdd,
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
        onClick={onOpenModalContactAdd}
      >
        Adicionar Contato
      </Button>
      <Modal isOpen={isOpenModalContactAdd} onClose={onCloseModalContactAdd}>
        <ModalOverlay />
        <ModalContent width="320px" display="flex" alignItems="center">
          <ModalHeader textAlign="center" fontSize="16px">
            Registrar contato
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormAddContact
              onClose={onCloseModalContactAdd}
              listContacts={listContacts}
              setTeste={setTeste}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalAddContact;
