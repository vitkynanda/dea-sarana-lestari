/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container id="footer">
      <FooterBreak>
        <hr />
      </FooterBreak>
      <FooterTitle>DEA SARANA LESTARI</FooterTitle>
      <FooterContainer>
        <FooterRow>
          <FooterTitle>LINK LANGSUNG</FooterTitle>
          <FooterColumn>
            <FooterScroll
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              delay={200}
              isDynamic={true}
              onClick={handleClick()}
            >
              Home
            </FooterScroll>
            <FooterScroll
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              delay={200}
              isDynamic={true}
              onClick={handleClick}
            >
              About us
            </FooterScroll>
            <FooterScroll
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              delay={200}
              isDynamic={true}
              onClick={handleClick}
            >
              Services
            </FooterScroll>
            <FooterScroll
              to="footer"
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              delay={200}
              isDynamic={true}
            >
              Contacts
            </FooterScroll>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <FooterTitle>SOCIAL MEDIA </FooterTitle>
          <FooterColumn>
            <FooterLink href="https://www.instagram.com/">
              <img src="/assets/instagram.svg" alt="instagram" />
              <span>Instagram</span>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/">
              <img src="/assets/facebook.svg" alt="instagram" />
              <span>Facebook</span>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <img src="/assets/twitter.svg" alt="instagram" />
              <span>Twitter</span>
            </FooterLink>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <FooterTitle>HUBUNGI KAMI</FooterTitle>
          <FooterColumn>
            <FooterLink href="https://www.instagram.com/">
              <img src="/assets/telephone.svg" alt="instagram" />
              <span>Telephone</span>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/">
              <img src="/assets/mail.svg" alt="instagram" />
              <span>Email</span>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <img src="/assets/whatsapp.svg" alt="instagram" />
              <span>Whatsapp</span>
            </FooterLink>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <FooterTitle>ALAMAT</FooterTitle>
          <FooterColumn>
            <span style={{ paddingRight: "20px" }}>
              Mangga 2 Square Lantai 2 Blok No. 62, Jalan Gunung Sahari No. 1
              Ancol, Jakarta Utara
            </span>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <FooterTitle>LOKASI</FooterTitle>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="130"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mangga%202%20square+(Dea%20Saran%20Lestari)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </FooterRow>
      </FooterContainer>
      <FooterBreak>
        <hr />
      </FooterBreak>
      <FooterText>&copy; dea-sarana-lestari 2021</FooterText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  flex-direction: column;
  background-color: #f9f9f9;
  @media (max-width: 1000px) {
    padding: 10px 30px;
  }
`;
const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
  }
  div iframe {
    margin-bottom: 10px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  span {
    color: #757575;
    font-size: 14px;
    line-height: 25px;
  }
`;

const FooterTitle = styled.p`
  color: #757575;
  margin: 25px 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
`;

const FooterText = styled.p`
  color: #757575;
  margin-bottom: 40px;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

const FooterBreak = styled.div`
  flex-basis: 100%;
  height: 100px;
  hr {
    height: 1px;
    background-color: #e8f0f2;
    border: none;
    margin-bottom: 5px;
  }
`;

const FooterLink = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  display: flex;

  &:hover {
    font-weight: bold;
    transition: all 0.2s ease;
  }
  img {
    width: 22px;
    margin-top: -5px;
  }
  span {
    margin-top: -5px;
    margin-left: 10px;
  }
`;

const FooterContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FooterScroll = styled(Link)`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  display: flex;

  &:hover {
    font-weight: bold;
    transition: all 0.2s ease;
  }
`;
