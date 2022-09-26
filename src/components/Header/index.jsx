import { Container } from "./styles";
import header from "../../assets/header.png"

const Header = ({ children }) => {
  return (
    <Container>
      <img src={header} alt="" />
      {children}
    </Container>
  );
};
export default Header;
