import React from "react";
import styled from "styled-components";

export default function Whyus() {
  const datas = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <h2>Why Us ?</h2>
      <p>
        This test description This test description This test description This
        test description
      </p>
      <ContainerContent>
        {datas.map((data) => (
          <Wrap key={data}>
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

  p {
    text-align: center;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    h2 {
      font-size: 15px;
    }
    p {
      padding: 15px;
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
  background: transparent
    url("http://menncctv.com/front/assets/img/features-1.jpg") no-repeat center;

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
  background: whitesmoke;
  margin: 50px 20px 20px 20px;
  padding: 20px;
  border-radius: 5px;
  opacity: 0.8;
  h1 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    h1,
    p {
      text-align: center;
    }
  }
`;
