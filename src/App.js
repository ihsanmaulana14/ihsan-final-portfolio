import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ServicesPage from "./Pages/ServicesPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
import { BiSun, BiMoon } from "react-icons/bi";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch as Switching } from "react-router";
// import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";
// import avatar from "./img/im-logo-512px.png";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [navToggleTheme, setNavToggleTheme] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div
        // className="header-l"
        className={`header-l ${navToggle ? "nav-toggle-header" : "_header"}`}
      >
        <div className="container-l">
          <div className="ham-burger-menu">
            <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
            </IconButton>
          </div>
          <div
            className="ham-burger-theme"
            checked={checked}
            inputProps={{ "aria-label": "" }}
            size="medium"
            onClick={themeToggler}
          >
            <IconTheme onClick={() => setNavToggleTheme(!navToggleTheme)}>
              <BiSun className={`${navToggleTheme ? "_theme" : ""}`} />
              <BiMoon className={`${navToggleTheme ? "" : "_theme"}`} />
            </IconTheme>
          </div>
        </div>
      </div>

      <MainContentStyled className={`${navToggle ? "nav-toggle-main" : ""}`}>
        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/services" exact>
            <ServicesPage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  /* margin-left: 16.3rem; */
  min-height: 100vh;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 576px) {
    margin-left: 4.3rem;
  }
  @media screen and (min-width: 576px) {
    margin-left: 6.3rem;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

const IconTheme = styled.div`
  display: flex;
  /* transition: all 0.4s ease-in-out; */
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.75);
  }

  ._theme {
    display: none;
  }
`;

export default App;
