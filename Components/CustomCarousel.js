import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CustomArrorw = ({ className, style, onClick }) => {
  let icon;
  if (className.includes("slick-next")) {
    icon = <FiChevronRight color="#fff" size={30} />;
  }

  if (className.includes("slick-prev")) {
    icon = <FiChevronLeft color="#fff" size={30} />;
  }

  return (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  );
};

const CustomCarousel = ({ children, settings }) => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite:
      children?.length >= settings?.slidesToShow || children?.length >= 2,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrorw />,
    prevArrow: <CustomArrorw />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    ...settings,
  };
  return (
    <>
      <Slider {...sliderSettings}>{children}</Slider>
    </>
  );
};

export default CustomCarousel;
