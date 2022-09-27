import {
  Flex,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorIcon,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import api from "../../services/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { contactContext } from "../../providers";

import { toast } from "react-toastify";

const FormAddContact = ({ listContacts, setTeste, onClose }) => {
  const { contactsState, setContactsState } = useContext(contactContext);
  const formSchema = yup.object().shape({
    fullName: yup.string().required("Insira seu nome completo"),
    email: yup.string().email("Email Inválido"),
    email2: yup.string().email("Email Inválido"),
    phone: yup.string().required("Você precisa inserir pelo menos 1 telefone"),
    phone2: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    const user = localStorage.getItem("token");
    await api
      .post(`/users/contacts`, data, {
        headers: {
          Authorization: `Token ${user}`,
        },
      })
      .then((response) => {
        setContactsState([...contactsState, response.data]);
        toast.success("Contato adicionado com sucesso");
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  
  const submitFunction = () => {
    onClose();
    setTeste(true);
  };

  return (
    <Flex width="100%" display="flex" justifyContent="center">
      <Box
        width="90%"
        display="flex"
        flexDir="column"
        bgColor="#FFF"
        alignContent="center"
        alignItems="center"
        borderRadius="8px"
      >
        <Text
          fontWeight="bold"
          fontSize="20px"
          marginTop="20px"
          color="#2A4058"
        >
          Adicione um contato
        </Text>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
          >
            <FormControl padding="12px" isInvalid={errors.fullname}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Nome completo"
                {...register("fullName")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.fullName && errors.fullName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.email}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Insira seu e-mail"
                {...register("email")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.email2}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Segundo e-mail"
                {...register("email2")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email2 && errors.email2.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.phone}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Telefone ou Celular"
                {...register("phone")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.phone2}>
              <Input
                borderColor="#855050"
                width="100%"
                placeholder="Telefone ou celular"
                {...register("phone2")}
                color="black"
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.phone2 && errors.phone2.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              width="100%"
              marginTop="20px"
              type="submit"
              colorScheme="#2c2121"
              color="white"
              bgColor="#2A4058"
              marginBottom="20px"
              onClick={() => submitFunction()}
              _hover={{
                background: "#FFF",
                color: "#000",
                border: "2px solid #000000",
              }}
            >
              Adicionar Contato
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
export default FormAddContact;
