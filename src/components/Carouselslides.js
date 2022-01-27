import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import source1 from "../assets/Page1.jpg";
import source2 from "../assets/Page2.jpg";
import source3 from "../assets/Page3.jpg";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    slidesToShow: 1.4,
    slidesToScroll: 1,
    infinite: false,
  };

  const imageCards = [
    {
      imageSrc: source1,
      title: "page1",
    },
    {
      imageSrc: source2,
      title: "page2",
    },
    {
      imageSrc: source3,
      title: "page3",
    },
  ];

  return (
    <div className="content">
      <button onCLick={sliderRef?.slickPrev}></button>
      <button onCLick={sliderRef?.slickNext}></button>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {imageCards.map((card, index) => (
          <div key={index}>
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={{ base: "200", sm: "250", md: "300", lg: "350" }}
              height={{ base: "200", sm: "250", md: "300", lg: "350" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
