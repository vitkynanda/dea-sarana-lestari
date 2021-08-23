import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container id="about">
      <h2>About us</h2>
      <ContainerContent>
        <Wrap>
          <img src="/images/cargo.png" alt="" />
        </Wrap>
        <Wrap>
          <h3>Story about us</h3>
          <p>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <MoreButton to="/">Read More</MoreButton>
        </Wrap>
      </ContainerContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 50px 0 26px;

  h2 {
    text-align: center;
    font-size: 21px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    h2 {
      font-size: 15px;
    }
  }
`;

const ContainerContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 5px;
  padding: 0 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 0 40px;
  }
`;
const Wrap = styled.div`
  img {
    width: 85%;
    margin-right: -30px;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    text-align: center;
    img {
      width: 85%;
    }
    h3,
    p {
      font-size: 13px;
      text-align: left;
    }
  }
`;

const MoreButton = styled(Link)`
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid #005792;
  font-size: 13px;
  padding: 10px 20px;
  color: #005792;
  background-color: transparent;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #005792;
    color: white;
  }
`;
