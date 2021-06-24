import React from "react";
import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <Icon onClick={toggle}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="contacts" onClick={toggle}>
            Contacs
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarRoute to="/tracking" onClick={toggle}>
            Tracking
          </SidebarRoute>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  display: grid;
  z-index: 999;
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background: #005792;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 65px);

  @media screen and (max-width: 768x) {
    grid-template-rows: repeat(4, 65px);
  }
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  font-size: 1.1rem;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    color: cornflowerblue;
  }
`;
const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 20px 0;
`;

const SidebarRoute = styled(LinkR)`
  border-radius: 40px;
  background: cornflowerblue;
  white-space: nowrap;
  padding: 10px 30px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: cornflowerblue;
    color: #fff;
  }
`;
