import { Button, Text, Flex, Box } from "@chakra-ui/react";
import { FcBusinessman, FcConferenceCall } from "react-icons/fc";
import { FiTrash2 } from "react-icons/fi";
import ModalAddContact from "../ModalAddContacts";
import { useState, useEffect } from "react";
import api from "../../services/index";
import ModalUpdateContact from "../ModalUpdateContact";
import { toast } from "react-toastify";
import { useContext } from "react";
import { contactContext } from "../../providers";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [teste, setTeste] = useState();
  const emailLogin = localStorage.getItem("userEmail");
  const userToken = localStorage.getItem("token");

  const { contactsState, setContactsState } = useContext(contactContext);

  const listUsers = () => {
    api
      .get(`/users/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  };
  const user = users.find((item) => item.email === emailLogin);

  const listContacts = () => {
    const user = localStorage.getItem("token");
    api
      .get(`/users/contacts`, {
        headers: {
          Authorization: `Token ${user}`,
        },
      })
      .then((response) => {
        setContactsState(response.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteContact = (id) => {
    const user = localStorage.getItem("token");
    const deleteContactId = contactsState.find((item) => item.id === id);
    const contactsFilter = contactsState.filter((item) => item.id !== id);

    api
      .delete(`users/contacts/${deleteContactId.id}`, {
        headers: {
          Authorization: `Token ${user}`,
        },
      })
      .then((response) => {
        toast.success("Contato deletado");
        setContactsState(contactsFilter);
      });
  };

  useEffect(() => {
    listUsers();
    listContacts();
  }, []);

  return (
    <Flex
      backgroundColor="#f1f1f1"
      width="100%"
      height="70vh"
      justifyContent="space-around"
      alignItems="center"
      marginTop="20px"
      borderRadius="5px"
      boder="solid 2px"
      boxShadow="0 3px 2px 2px #333333"
      margin="20px"
    >
      <Flex
        bgColor="#ffffff"
        width="35%"
        justifyContent="space-around"
        flexDirection="column"
        alignItems="center"
        border="solid 2px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #333333"
        margin="2%"
      >
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            display="flex"
            w="100%"
            justifyContent="center"
            border="1px"
            marginTop="3%"
            bgColor="#f1f1f1"
          >
            <FcBusinessman size="40px" />
          </Box>

          <Text fontWeight="bold">Nome: {user?.fullName} </Text>
          <Text fontWeight="bold">email: {user?.email} </Text>
          <Text fontWeight="bold">email-2: {user?.email2} </Text>
          <Text fontWeight="bold">Phone: {user?.phone} </Text>
          <Text fontWeight="bold">Phone-2: {user?.phone2} </Text>
        </Box>
        <ModalAddContact setTeste={setTeste} />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        border="2px solid"
        borderRadius="5px"
        bgColor="#f1f1f1"
      >
        <Box
          display="flex"
          w="50vw"
          h="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="3%"
          bgColor="#f1f1f1"
        >
          <Box
            display="flex"
            w="100%"
            justifyContent="center"
            bgColor="#f1f1f1"
            flexDirection="column"
            alignItems="center"
          >
            <FcConferenceCall size="40px" />
            <Text fontWeight="800"> CONTATOS </Text>
          </Box>
          <Box
            overflow="scroll"
            w="100%"
            h="300px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {contactsState?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    border="1px solid"
                    borderRadius="5px"
                    w="80%"
                    padding="1%"
                    margin="2px"
                    bgColor="#fff"
                    key={item.id}
                  >
                    <Box>
                      <Text fontSize="12px" fontWeight="bold">
                        Nome: {item.fullName}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        E-mail: {item.email}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        E-mail 2: {item.email2}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        Phone: {item.phone}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        Phone 2: {item.phone2}
                      </Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <ModalUpdateContact
                        contactId={item.id}
                        contacts={contactsState}
                      />
                      <Button
                        type="submit"
                        onClick={() => deleteContact(item.id)}
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
                      >
                        <FiTrash2 />
                      </Button>
                    </Box>
                  </Box>
                );
              } else {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    border="1px solid"
                    borderRadius="5px"
                    w="80%"
                    padding="1%"
                    margin="2px"
                    bgColor="blue.100"
                    key={item.id}
                  >
                    <Box>
                      <Text fontSize="12px" fontWeight="bold">
                        Nome: {item.fullName}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        E-mail: {item.email}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        E-mail 2: {item.email2}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        Phone: {item.phone}
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        Phone 2: {item.phone2}
                      </Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <ModalUpdateContact
                        contactId={item.id}
                        contacts={contactsState}
                      />
                      <Button
                        type="submit"
                        onClick={() => deleteContact(item.id)}
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
                      >
                        <FiTrash2 />
                      </Button>
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
