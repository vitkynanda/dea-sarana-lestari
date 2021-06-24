import About from "./about";
import Banner from "./banner";
import CarouselImage from "./carousel";
import Services from "./services";
import Whyus from "./whyus";

export default function Home() {
  return (
    <>
      <CarouselImage />
      <Banner />
      <About />
      <Services />
      <Whyus />
    </>
  );
}
