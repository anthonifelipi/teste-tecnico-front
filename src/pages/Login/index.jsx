import { Flex, Box } from "@chakra-ui/react";
import Login from "../../components/FormLogin";

const LoginPage = () => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Box w={{ md: "100%" }} display="flex" justifyContent="center">
        <Login />
      </Box>
    </Flex>
  );
};

export default LoginPage;
