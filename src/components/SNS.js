import React from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const SNSContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogIcon = styled(PhotoBackground)`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    &:hover {
      transform: none;
    }
  }
`;

const InstaIcon = styled(BlogIcon)`
  width: 60px;
  height: 60px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const KakaoIcon = styled(BlogIcon)`
  width: 60px;
  height: 60px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SNS = () => {
  return (
    <SNSContainer>
      <BlogIcon
        bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FblogIcon.png?alt=media&token=e13100f3-57f0-4a01-84e6-44145989d9ac"
        onClick={() => window.open("https://blog.naver.com/viandantedog177")}
      />
      <InstaIcon
        bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FinstaIcon.png?alt=media&token=53281be8-969d-4880-9b53-a33afa592808"
        onClick={() =>
          window.open("https://www.instagram.com/viandante_official/")
        }
      />
      <KakaoIcon
        bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FkakaoIcon.png?alt=media&token=112a0dc5-756b-4fef-952c-2727b46887a8"
        onClick={() => window.open("http://pf.kakao.com/_xdxhaxab/chat")}
      />
    </SNSContainer>
  );
};

export default SNS;
