import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components/macro";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/slick-2.png" alt="gambar-1" />
          <Content>
            <h1>Dea Sarana Lestari</h1>
            <p>Leading in freight forwarder</p>
          </Content>
        </Wrap>
        <Wrap>
          <img
            src="https://accurate.id/wp-content/uploads/2020/11/accurate.id-Pengertian-Logistik-Tujuan-Manfaat-dan-Peran-Logistik-Dalam-Perusahaan.jpg"
            alt="gambar-1"
          />
          <Content>
            <h1>Our Commitment</h1>
            <p>We want to serve you better than others</p>
          </Content>
        </Wrap>
        <Wrap>
          <img src="/images/slick-3.jpg" alt="gambar-1" />
          <Content>
            <h1>Our Commitment</h1>
            <p>We want to serve you better than others</p>
          </Content>
        </Wrap>
      </Carousel>
    </div>
  );
}

const Carousel = styled(Slider)`
  transition: all 0.4s ease-in-out;

  ul li button {
    &:brfore {
      font-size: 100px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  position: relative;

  img {
    max-height: 500px;
    border: 4px solid transparent;
    -webkit-filter: brightness(0.8);
    filter: brightness(0.8);
    border-radius: 10px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 0.25s ease-in-out;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
      border: 4px solid whitesmoke;
    }

    @media (max-width: 768px) {
      max-height: 140px;
    }
  }
`;

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
