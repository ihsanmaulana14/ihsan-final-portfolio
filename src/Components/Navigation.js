import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/PersonSharp';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';

function Navigation() {
    return (
        <NavigationStyled>
            
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>
                    <HomeIcon />
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>
                    <FaUserAlt />
                        About
                    
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>
                        Resume
                    
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            {/* <footer className="footer">
                <p>@2021 <b>Lorem Ipsum</b></p>
            </footer> */}
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    

    .nav-items{
        width: 100%;
        
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        /* margin-top: .2rem;
        margin-bottom: .2rem; */
        margin: auto;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: flex;
            a{
                display: flex;
                /* flex-direction: column; */
                padding: .45rem .1rem;
                position: relative;
                z-index: 10;
                gap: .2rem;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                    border-radius: 5px;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
                @media screen and (max-width:576px){
                    display: block;
                    font-size: .5rem;
                }
                @media screen and (min-width:576px){
                    display: flex;
                    font-size: .8rem;
                    padding: .45rem 1rem;
                }
            }
            svg{
                .active-line{
                height: .2rem;
                width: 2rem;
                color: wheat;
                background-color: wheat;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }

        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
            @media screen and (max-width:576px){
                font-size: .5rem;
            }
        }
        b{
            @media screen and (max-width:576px){
                font-size: .5rem;
            }
        }
    }
`;
export default Navigation;
