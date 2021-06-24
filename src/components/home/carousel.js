import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselImage() {
  const settings = {
    showThumbs: false,
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    useKeyboardArrows: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slick-2.png" alt="" />
        <Content>
          <h1>Dea Sarana Lestari</h1>
          <p>Leading in freight forwarder</p>
        </Content>
      </Wrap>
      <Wrap>
        <img src="/images/slick-3.jpg" alt="" />
        <Content>
          <h1>Dea Sarana Lestari</h1>
          <p>Leading in freight forwarder</p>
        </Content>
      </Wrap>
      <Wrap>
        <img src="/images/slick-1.jpg" alt="" />
        <Content>
          <h1>Dea Sarana Lestari</h1>
          <p>Leading in freight forwarder</p>
        </Content>
      </Wrap>
    </Carousel>
  );
}

const Content = styled.div`
  position: absolute;
  top: 35%;
  text-align: center;
  left: 50%;
  font-size: 30px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;

  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    top: 50%;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Wrap = styled.div`
  img {
    max-height: 525px;
    object-fit: cover;
    -webkit-filter: brightness(0.8);
    filter: brightness(0.8);
    @media (max-width: 768px) {
      max-height: 220px;
    }
  }
`;
