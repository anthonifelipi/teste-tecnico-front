import { Flex, Box } from "@chakra-ui/react";
import Dashboard from "../../components/Dashboard";

const HomePage = () => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Box w={{ md: "100%" }} display="flex" justifyContent="center">
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default HomePage;
