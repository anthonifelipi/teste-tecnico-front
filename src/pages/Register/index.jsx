import { Flex, Box } from "@chakra-ui/react";
import Form from "../../components/Form";

const RegisterPage = () => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={{ md: "100%" }} display="flex" justifyContent="center">
        <Form />
      </Box>
    </Flex>
  );
};

export default RegisterPage;
