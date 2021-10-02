import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  /* width: 16.3rem; */
  position: fixed;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (min-width: 576px) {
    /* transform: translateX(-100%); */
    width: 6.3rem;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
  }
  @media screen and (max-width: 576px) {
    /* transform: translateX(-100%); */
    width: 4.3rem;
    height: 100vh;
    /* z-index: 20; */
  }
`;

export default Sidebar;
