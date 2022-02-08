import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const SliderContainer = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  transition: background 0.3s;
  /* background-size: contain;
  background-repeat: no-repeat; */
`;

const SliderControlBox = styled.div`
  position: absolute;
  ${(props) => (props.left ? "left: 5%;" : "right: 5%;")};
  bottom: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 70px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
`;

const SliderControlBtn = styled.span`
  font-size: 28px;
  color: white;
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
      {/* <SliderControlBox>
        <SliderControlBtn onClick={sliderPrev}>&larr;</SliderControlBtn>
        <SliderControlBar> | </SliderControlBar>
        <SliderControlBtn onClick={sliderNext}>&rarr;</SliderControlBtn>
      </SliderControlBox> */}
      <SliderControlBox left={true} onClick={sliderPrev}>
        <SliderControlBtn>&larr;</SliderControlBtn>
      </SliderControlBox>
      <SliderControlBox left={false} onClick={sliderNext}>
        <SliderControlBtn>&rarr;</SliderControlBtn>
      </SliderControlBox>
    </SliderContainer>
  );
};

export default Slider;
