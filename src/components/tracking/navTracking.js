import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function NavTracking() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <NavLogo onClick={handleClick}>DSL</NavLogo>
      <NavTitle>Tracking System</NavTitle>
      <NavBtn onClick={handleClick}>Home</NavBtn>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  background-color: #005792;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  color: white;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const NavLogo = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const NavTitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const NavBtn = styled.p`
  font-size: 13px;
  padding: 5px 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: #185adb;
  border-radius: 5px;
  border: 1px #fff solid;
  cursor: pointer;
`;
