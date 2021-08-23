import React from "react";
import styled from "styled-components";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Pengiriman Via Udara",
      desc: "Pengiriman barang melalui pesawat terbang dengan satuan per-KG atau kilogram. Solusi tepat untuk pengiriman yang cepat dan mudah dalam jumlah kecil ataupun besar.",
      imgUrl: "/images/flight.png",
    },
    {
      id: 2,
      title: "Pengiriman Via Laut",
      desc: "Pengiriman barang melalui kapal menggunakan container dengan satuan per kubikasi (LCL & FCL). Solusi pengiriman dalam jumlah besar dengan menghemat biaya pengiriman.",
      imgUrl: "/images/cargo-ship.png",
    },
    {
      id: 3,
      title: "Custom Clearence",
      desc: "Solusi untuk pengurusan dokumen biaya pajak, administrasi dan hal-hal yang terkait lainnya atas barang impor hingga memperoleh persetujuan agar barang tersebut bisa dikeluarkan.",
      imgUrl: "/images/documents.png",
    },
  ];
  return (
    <Container id="services">
      <h2>Our Services</h2>
      <ContainerContent>
        {services.map((service) => (
          <Wrap key={service.id}>
            <ImageWrapper>
              <img src={service.imgUrl} alt="" />
            </ImageWrapper>
            <TextContainer>
              <h1>{service.title}</h1>
              <p>{service.desc}</p>
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  align-items: center;
  box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 0.25s ease-in-out;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

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

const ImageWrapper = styled.div`
  background-color: whitesmoke;
  margin: 10px;
  border-radius: 5px;
  height: 100px;
  text-align: center;
  padding: 10px;
  &:nth-child(2) {
    width: 1200px;
  }
  img {
    width: 60%;
  }
`;
