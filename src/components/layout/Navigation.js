import { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [burger, setBurger] = useState(false);

  useLayoutEffect(() => {
    window.innerWidth > 900 ? setBurger(false) : setBurger(true);
    console.log(props);
  }, []);
  const dispatch = useDispatch();

  function toggleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
    sendAction();
  }

  function closeMenu() {
    if (showMenu) {
      var y = document.getElementById("menuList");
      y.classList.replace("menuList", "hide");
      setShowMenu(false);
    }
  }

  function sendAction() {
    showMenu ? dispatch({ type: "hide" }) : dispatch({ type: "show" });
  }

  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {burger ? (
        <section className="navigation">
          <Link to="/" onClick={() => closeMenu()}>
            <p>Nemeson</p>
          </Link>
          <img
            onClick={toggleMenu}
            src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/hamburger-menu.png"
            alt="menu"
          />
        </section>
      ) : (
        <section className="navigation">
          <Link to="/">
            <p>Nemeson</p>
          </Link>
          <div>
            <Link to="/nemesonOne">Nemeson One</Link>
            <Link to="/nemesonHunt" style={{ marginRight: 20 }}>
              Nemeson Hunt
            </Link>
          </div>
        </section>
      )}

      {showMenu && (
        <section id="menuList" className="menuList">
          <Link to="/nemesonOne" onClick={toggleMenu}>
            Nemeson One
          </Link>
          <Link to="/nemesonHunt" onClick={toggleMenu} style={{ marginBottom: 20 }}>
            Nemeson Hunt
          </Link>
        </section>
      )}
    </>
  );
};

export default Navigation;
