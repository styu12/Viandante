import React, { useState } from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const PopWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
`;

const PopContainer = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  padding: 50px;
  left: 8vw;
  top: 10vh;
  width: 84vw;
  height: 80vh;
  z-index: 99;
  border-radius: 20px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
`;

const PopCloseBtn = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  position: absolute;
  text-align: center;
  cursor: pointer;
  top: 30px;
  right: 30px;
`;

const PopThumb = styled(PhotoBackground)`
  flex: 1;
  max-width: 90%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background 0.3s ease;
  margin-right: 20px;
`;

const PopContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ReviewType = styled.p`
  border: 1px solid gray;
  padding: 5px;
  font-size: 13px;
  width: 65px;
  text-align: center;
  margin-bottom: 10px;
`;

const PopTitle = styled.h2`
  font-size: 22px;
  margin: 5px 0;
`;

const PopText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 15px 0;
`;

const PopPhotoWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const PopPhoto = styled(PhotoBackground)`
  width: 23%;
  padding-bottom: 23%;
  cursor: pointer;
  margin-right: 10px;
  outline: none;
`;

const ReviewDate = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: "MarketSansLight";
`;

const Popup = ({ setIsPop, r }) => {
  const [popThumb, setPopThumb] = useState(r.photos[0]);

  const closePop = () => {
    setIsPop(false);
  };
  const popPhotoClick = (photoUrl) => {
    setPopThumb(photoUrl);
  };

  return (
    <>
      <PopWrapper onClick={closePop} />
      <PopContainer>
        <PopCloseBtn onClick={closePop}> X </PopCloseBtn>
        <PopThumb bg={popThumb} />
        <PopContent>
          <PopTitle>{r.title}</PopTitle>
          <ReviewType>{r.type}</ReviewType>
          <ReviewDate>
            {new Date(r.date.seconds * 1000).toLocaleDateString()}
          </ReviewDate>
          <PopText>{r.description}</PopText>
          <PopPhotoWrapper>
            {r.photos.map((p) => (
              <PopPhoto key={p} bg={p} onClick={() => popPhotoClick(p)} />
            ))}
          </PopPhotoWrapper>
        </PopContent>
      </PopContainer>
    </>
  );
};

export default Popup;
