import React, { useState } from "react";
import About from "./about";
import Banner from "./banner";
import CarouselImage from "./carousel";
import Services from "./services";
import Whyus from "./whyus";
import styled from "styled-components";
import Sidebar from "../navbar/sidebar";
import Navbar from "../navbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container id="home">
        <CarouselImage />
        <Banner />
        <About />
        <Services />
        <Whyus />
      </Container>
    </>
  );
}

const Container = styled.div``;
