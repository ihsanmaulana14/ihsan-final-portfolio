import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
// import UserIcon from '@material-ui/icons/PersonSharp';
import {
  BiHomeAlt,
  BiUser,
  BiImage,
  BiBriefcase,
  BiSend,
} from "react-icons/bi";
// import { FaUserAlt } from 'react-icons/fa';
// import { AiOutlineLine } from 'react-icons/ai';
import { IconButton } from "@material-ui/core";
import avatar from "../img/im-logo-512px.png";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="ham-burger-avatar">
        <IconButton>
          <img src={avatar} alt="" />
        </IconButton>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            <BiHomeAlt />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            <BiUser />
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            <BiImage />
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" activeClassName="active-class" exact>
            <BiBriefcase />
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            <BiSend />
            Contact
          </NavLink>
        </li>
      </ul>
      {/* <footer className="footer">
                <p>@2021 <b>Lorem Ipsum</b></p>
            </footer> */}
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .ham-burger-avatar {
    /* position: fixed;
              left: 5%;
              top: 3%;  */
    /* display: none; */
    /* background-color: var(--background-dark-color); */
    border-radius: 10%;
    z-index: 15;
    margin-top: 1rem;

    img {
      width: 30px;
      height: auto;
      /* text-align: center;
                  padding: 1rem 0; */
      @media screen and (min-width: 576px) {
        width: 40px;
      }
    }
  }

  .nav-items {
    width: 100%;

    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-top: .2rem;
        margin-bottom: .2rem; */
    margin: auto;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    /* .active-class {
      background-color: var(--primary-color-light);
      color: white;
    } */
    .active-class {
      color: var(--white-color);
    }
    .active-class::before {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--primary-color);
      transition: All 0.4s ease-in-out;
      opacity: 0.4;
      z-index: -1;
      border-radius: 5px;
    }
    li {
      display: flex;
      width: 100%;
      a {
        display: flex;
        flex-direction: column;
        color: gray;
        padding: 0.45rem 0.1rem;
        position: relative;
        z-index: 10;
        gap: 0.2rem;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 100%;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
          border-radius: 5px;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 4px;
          background-color: var(--primary-color);
          /* transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95); */
          transition: All 0.4s ease-in-out;
          opacity: 0.4;
          z-index: -1;
          border-radius: 5px;
        }
        svg {
          font-size: 1.5rem;
        }
        @media screen and (max-width: 576px) {
          /* display: block; */
          font-size: 0.5rem;
        }
        @media screen and (min-width: 576px) {
          /* display: block; */
          font-size: 0.8rem;
          /* padding: 0.45rem 0.1rem; */
        }
      }

      a:hover::before {
        width: 100%;
        height: 4px;
        left: 0;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
      @media screen and (max-width: 576px) {
        font-size: 0.5rem;
      }
    }
    b {
      @media screen and (max-width: 576px) {
        font-size: 0.5rem;
      }
    }
  }
`;
export default Navigation;
