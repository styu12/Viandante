import React from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

// 가장 기본 이미지상자 ... 정사각형
const BasicPhotoBox = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
`;

// 이미지 밑의 제목
const ContentTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.3;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
`;

//매거진 관련 components
const MagazineBox = styled.div`
  padding: 30px;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MagazineTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
`;

const MagazineTitle = styled(ContentTitle)`
  grid-row: 1 / 3;
  font-size: 22px;
`;

const MagazineBarcode = styled.img`
  width: 80%;
  display: block;
  margin: auto;
  object-fit: contain;
`;

const MagazineMonth = styled.span`
  font-size: 11px;
  font-weight: 300;
  text-align: center;
  margin-top: 3px;
  font-family: "GmarketSansLight";
  font-size: 9px;
`;

const MagazinePhotoBox = styled(BasicPhotoBox)`
  padding-bottom: 120%;
  margin-bottom: 0;
  cursor: pointer;
`;

const MagazineCreatedAt = styled.p`
  font-size: 17px;
  font-family: "GmarketSansLight";
  text-align: center;
`;

const MagazineDog = ({ m }) => {
  return (
    <>
      <MagazineBox
        onClick={() => {
          window.open("http://www.naver.com");
        }}
      >
        <MagazineTitleWrapper>
          <MagazineTitle isCenter={false}>
            {m.title.split("\\n")[0]}
            <br />
            {m.title.split("\\n")[1]}
          </MagazineTitle>
          <MagazineBarcode src={require("../assets/main/barcode.png")} />
          <MagazineMonth>{m.month}</MagazineMonth>
        </MagazineTitleWrapper>
        <MagazinePhotoBox bg={m.thumbnailUrl}></MagazinePhotoBox>
      </MagazineBox>
      <MagazineCreatedAt>작성일자 {m.createdAt}</MagazineCreatedAt>
    </>
  );
};

export default MagazineDog;
