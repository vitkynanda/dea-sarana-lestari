import React from "react";
import styled from "styled-components";

export default function Services() {
  const datas = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <h2>Our Services</h2>
      <ContainerContent>
        {datas.map((data) => (
          <Wrap key={data}>
            <img src="/images/cargo.png" alt="" />
            <TextContainer>
              <h1>Air Freight</h1>
              <p>
                This test description This test description This test
                description This test description
              </p>
            </TextContainer>
          </Wrap>
        ))}
      </ContainerContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    h2 {
      font-size: 15px;
    }
  }
`;
const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 50px;
  padding: 0 60px;
  margin: 40px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 10px 0;
    grid-gap: 20px;
    padding: 0 30px;
  }
`;
const Wrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 0.25s ease-in-out;
  padding: 40px 0;
  img {
    width: 30%;
    margin-left: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-right: 20px;
  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    h1,
    p {
      font-size: 80%;
    }
  }
`;
