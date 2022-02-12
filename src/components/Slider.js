import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding-bottom: 85%;
  }
`;

const SliderContainer = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 50%;
  position: absolute;
  top: 0;
  left: ${(props) => `${props.left}vw`};
  transition: left 0.3s;
  @media (max-width: 768px) {
    padding-bottom: 85%;
  }
`;

const SliderControlBox = styled.div`
  position: absolute;
  ${(props) => (props.left ? "left: 5%;" : "right: 5%;")};
  bottom: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 40%;
  }
`;

const SliderControlBtn = styled.span`
  font-size: 37px;
  color: white;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SliderMarkContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  bottom: 10px;
  @media (max-width: 768px) {
    height: 25px;
  }
`;

const SliderMark = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "rgba(0,0,0,0.6)" : "rgba(255, 255, 255, 0.6)"};
  &:not(:last-child) {
    margin-right: 8px;
  }
  @media (max-width: 768px) {
    width: 7px;
    height: 7px;
  }
`;

const Slider = (photosObj) => {
  const { photoArray } = photosObj;
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderMax, setSliderMax] = useState(0);
  let prevX;

  useEffect(() => {
    setSliderMax(photoArray.length - 1);
  }, [photoArray]);

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

  const handleMouseDown = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    if (event.touches) {
      event.stopPropagation();
    }
    prevX = clientX;
  };

  const handleMouseUp = (event) => {
    const clientX = event.touches
      ? event.changedTouches[0].clientX
      : event.clientX;
    if (event.touches) {
      event.stopPropagation();
    }
    const walk = clientX - prevX;
    if (walk > 50) {
      return sliderPrev();
    }
    if (walk < -50) {
      return sliderNext();
    }
  };

  return (
    <SliderWrapper
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {photoArray.map((p, i) => (
        <SliderContainer key={i} bg={p} left={(i - sliderIndex) * 100} />
      ))}
      <SliderControlBox left={true} onClick={sliderPrev}>
        <SliderControlBtn>&larr;</SliderControlBtn>
      </SliderControlBox>
      <SliderControlBox left={false} onClick={sliderNext}>
        <SliderControlBtn>&rarr;</SliderControlBtn>
      </SliderControlBox>

      <SliderMarkContainer>
        {photoArray.map((p, i) => (
          <SliderMark key={i} active={i === sliderIndex} />
        ))}
      </SliderMarkContainer>
    </SliderWrapper>
  );
};

export default Slider;
