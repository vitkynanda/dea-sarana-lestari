import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <Container>
      <h4>Test we Carry</h4>
      <p>
        We learn about your products for them to arrive safely at their optimum
        condition.
      </p>
      <MoreButton to="/">READ MORE</MoreButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  position: absolute;
  padding: 20px 60px;
  z-index: 1;
  border: 1px solid #005792;
  width: 80%;
  left: 10vw;
  top: 525px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 0.25s ease-in-out;
  align-items: center;

  p {
    margin: 5px;
  }

  h4 {
    margin: 5px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    top: 275px;
    width: 100%;
    left: 0;
    padding: 10px 20px;
    font-size: 14px;
    h4 {
      margin: 0;
      padding-bottom: 8px;
      font-weight: 500;
    }
    p {
      margin: 0;
      padding-bottom: 8px;
    }
  }
`;

const MoreButton = styled(Link)`
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid #005792;
  font-size: 13px;
  padding: 10px 10px;
  background-color: #005792;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #005792;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 10px;
  }
`;
