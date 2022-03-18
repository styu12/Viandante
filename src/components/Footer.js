import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #c6c6c6;
  padding: 3% 10%;
  @media (max-width: 768px) {
    padding: 5% 10%;
    height: 200px;
  }
`;

const FooterLogoLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 18px;
  font-size: 18px;
  display: block;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const LogoIcon = styled(PhotoBackground)`
  width: 100px;
  height: 55px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const FooterText = styled.span`
  font-size: 13px;
  font-family: "GmarketSansLight";
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 2;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoLink to="/">
        <LogoIcon bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FlogoText.png?alt=media&token=8a65e8a1-2043-4d36-b606-2a125cd73016" />
      </FooterLogoLink>
      {/* <ul>
        <li>
          <FooterText>
            상호 : 비안단테 &nbsp;&nbsp; 대표자 : 송승빈외 1명
          </FooterText>
        </li>
        <li>
          <FooterText>사업자 등록번호 : 575-28-01415</FooterText>
        </li>
      </ul> */}
    </FooterContainer>
  );
};

export default Footer;
