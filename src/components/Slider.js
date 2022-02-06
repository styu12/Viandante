import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const SliderContainer = styled(PhotoBackground)`
  width: 100%;
  height: 600px;
  position: relative;
  transition: background 0.3s;
`;

const SliderControlBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 60px;
`;

const SliderControlBtn = styled.span`
  font-size: 28px;
  color: white;
  cursor: pointer;
`;

const SliderControlBar = styled.span`
  display: block;
  margin: 0 15px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.3);
`;

const Slider = (photosObj) => {
  const { photoArray } = photosObj;
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderMax, setSliderMax] = useState(0);

  const sliderNext = () => {
    sliderIndex >= sliderMax
      ? setSliderIndex(0)
      : setSliderIndex(sliderIndex + 1);
  };
  const sliderPrev = () => {
    sliderIndex <= 0
      ? setSliderIndex(sliderMax)
      : setSliderIndex(sliderIndex - 1);
  };

  useEffect(() => {
    setSliderMax(photoArray.length - 1);
  }, [photoArray]);

  return (
    <SliderContainer bg={photoArray[sliderIndex]}>
      <SliderControlBox>
        <SliderControlBtn onClick={sliderPrev}>&larr;</SliderControlBtn>
        <SliderControlBar> | </SliderControlBar>
        <SliderControlBtn onClick={sliderNext}>&rarr;</SliderControlBtn>
      </SliderControlBox>
    </SliderContainer>
  );
};

export default Slider;
