import React from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

// 가장 기본 이미지상자 ... 정사각형
const BasicPhotoBox = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
`;

//매거진 관련 components
const MagazineBox = styled.div`
  width: 100%;
  padding: 15px;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MagazineTitleWrapper = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  position: relative;
`;

const MagazineTitle = styled.h4`
  font-size: 17px;
  text-align: center;
  margin: 10px 0;
`;

const MagazineSubTitle = styled.p`
  font-size: 11px;
  text-align: center;
  margin-bottom: 40px;
  font-family: "GmarketSansLight";
`;

const MagazineBarcode = styled.img`
  position: absolute;
  width: 30px;
  left: 10px;
  bottom: 15px;
  display: block;
  object-fit: contain;
`;

const MagazineMonth = styled.span`
  font-size: 11px;
  font-weight: 300;
  font-family: "GmarketSansLight";
  font-size: 9px;
  position: absolute;
  right: 10px;
  bottom: 15px;
`;

const MagazinePhotoBox = styled(BasicPhotoBox)`
  padding-bottom: 70%;
  margin-bottom: 0;
  cursor: pointer;
`;

const MagazineCreatedAt = styled.p`
  font-size: 17px;
  font-family: "GmarketSansLight";
  text-align: center;
  > span {
    font-size: 10px;
  }
`;

const MagazineSpace = ({ m }) => {
  return (
    <>
      <MagazineBox
        onClick={() => {
          window.open(m.blogUrl);
        }}
      >
        <MagazineTitleWrapper>
          <MagazineTitle isCenter={false}>{m.title}</MagazineTitle>
          <MagazineSubTitle>Viandante Rental Cottage</MagazineSubTitle>
          <MagazineBarcode src={require("../assets/main/barcode.png")} />
          <MagazineMonth>{m.month}</MagazineMonth>
        </MagazineTitleWrapper>
        <MagazinePhotoBox bg={m.thumbnailUrl}></MagazinePhotoBox>
      </MagazineBox>
      <MagazineCreatedAt>
        <span>Written by &nbsp;</span>
        {m.author}
      </MagazineCreatedAt>
      {/* <MagazineCreatedAt>
        작성일자 {new Date(m.createdAt.seconds * 1000).toLocaleDateString()}
      </MagazineCreatedAt> */}
    </>
  );
};

export default MagazineSpace;
