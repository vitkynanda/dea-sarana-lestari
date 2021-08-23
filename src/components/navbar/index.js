import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export default function Navbar({ toggle }) {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <>
      <Nav show={show}>
        <NavbarContainer>
          <NavLogo to="/">DSL</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
                delay={200}
                isDynamic={true}
              >
                <span>Home</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
                delay={200}
                isDynamic={true}
              >
                <span>About</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
                delay={200}
                isDynamic={true}
              >
                <span>Services</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
                delay={200}
                isDynamic={true}
              >
                <span>Contacts</span>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/tracking">Tracking</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  background: ${({ show }) => (show ? "#005792" : "#005792")};
  height: 60px;
  width: 100%;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  padding: 0 55px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;
const NavLogo = styled(LinkR)`
  color: #fff;
  letter-spacing: 1.5px;
  justify-self: flex-start;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    margin-right: 10px;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -60px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 60px;
  font-weight: 500;
  text-transform: uppercase;
`;

const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  color: white;
  text-decoration: none;

  span {
    font-size: 13px;
    letter-spacing: 1.3px;
    position: relative;
    &:after {
      content: "";
      background-color: white;
      height: 2px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavBtnLink = styled(LinkR)`
  border-radius: 7px;
  background-color: #125d98;
  border: 1px solid #f9f9f9;
  color: white;
  white-space: nowrap;
  padding: 5px 25px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.25s ease-in-out;
    background: #005792;
  }
`;
