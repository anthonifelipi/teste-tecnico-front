import {
  Flex,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorIcon,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import api from "../../services/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const loginSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = async (data) => {
    await api
      .post("/login/", data)
      .then((response) => {
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("token", response.data.token);

        toast.success("Login realizado com sucesso");
        return history.push("/home");
      })
      .catch((err) => toast.error("Email ou senha invalidas"));
  };

  return (
    <Flex justifyContent="center" width="100%">
      <Box
        width="100%"
        maxWidth="400px"
        bgColor="#FFF"
        padding="20px"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="2px solid #2A4058"
      >
        <Text
          fontWeight="bold"
          fontSize="20px"
          color="#2A4058"
          marginTop="20px"
        >
          Login
        </Text>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
          >
            <FormControl padding="12px" isInvalid={errors.email} width="100%">
              <Input
                color="#000"
                w="100%"
                borderColor="#855050"
                placeholder="Digite seu E-mail"
                {...register("email")}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl padding="12px" isInvalid={errors.password}>
              <InputGroup>
                <Input
                  color="#000"
                  w="100%"
                  type={show ? "text" : "password"}
                  placeholder="Digite sua Senha"
                  {...register("password")}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    marginRight="5%"
                    h="1.75rem"
                    fontSize="12px"
                    size="lg"
                    onClick={handleClick}
                  >
                    {show ? <GrFormViewHide /> : <GrFormView />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Box
              width="100%"
              maxWidth="400px"
              bgColor="#FFF"
              padding="20px"
              borderRadius="10px"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                width="130px"
                marginTop="20px"
                type="submit"
                colorScheme="#2c2121"
                color="white"
                bgColor="#2A4058"
                marginBottom="20px"
                _hover={{
                  background: "#FFF",
                  color: "#000",
                  border: "2px solid #000000",
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => history.push("/register")}
                width="130px"
                marginTop="20px"
                type="submit"
                colorScheme="#2c2121"
                color="white"
                bgColor="#2A4058"
                marginBottom="20px"
                _hover={{
                  background: "#FFF",
                  color: "#000",
                  border: "2px solid #000000",
                }}
              >
                Cadastre-se
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
export default Login;
