import React from "react";
import styled from "styled-components/macro";

export default function Footer() {
  const data = [1, 2, 3, 4];
  return (
    <Container>
      <FooterTitle>Test</FooterTitle>
      <FooterBreak />
      <FooterContainer>
        {data.map((data) => (
          <FooterRow>
            <FooterColumn>
              <FooterLink>Menu 1</FooterLink>
              <FooterLink>Menu 2</FooterLink>
              <FooterLink>Menu 3</FooterLink>
            </FooterColumn>
          </FooterRow>
        ))}
      </FooterContainer>
      <FooterBreak />
      <FooterText>&copy; dea-sarana-lestari 2021</FooterText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 10px 30px;
  }
`;
const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterTitle = styled.p`
  color: #757575;
  margin: 30px 0;
  font-size: 16px;
`;

const FooterText = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 15px;
`;

const FooterBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const FooterLink = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    transition: all 0.5s ease-in-out;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
