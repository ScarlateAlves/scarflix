import React from "react";
import Slider from "react-slick";
import { Heading } from "rebass";

interface MultipleProps {
  children: any
}

export const MultipleItems = ({ children }: MultipleProps) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 7
    };

    return (
      <>
        <Slider {...settings}>
          { children }
        </Slider>
      </>
    );
  }
