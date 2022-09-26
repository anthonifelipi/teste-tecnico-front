import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TesteProvider } from "./providers/index";

import Routes from "./routes";

function App() {
  return (
    <ChakraProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <TesteProvider>
        <Routes />
      </TesteProvider>
    </ChakraProvider>
  );
}

export default App;
