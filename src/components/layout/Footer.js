import { useSelector } from "react-redux";
import { selectOption } from "../../redux/store";
import { Link } from "react-router-dom";

const Footer = () => {
  const toogleOption = useSelector(selectOption);

  if (toogleOption) {
    return null;
  }

  return (
    <footer>
      <Link to="/nemesonOne">Nemeson One</Link>
      <Link to="/nemesonHunt">Nemeson Hunt</Link>
    </footer>
  );
};

export default Footer;
