import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #c6c6c6;
  padding: 5% 10%;
`;

const FooterLogoLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 18px;
  font-size: 18px;
`;

const FooterText = styled.span`
  font-size: 13px;
  font-family: "GmarketSansLight";
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoLink to="/">Viandante</FooterLogoLink>
      <ul>
        <li>
          <FooterText>상호 : 비안단테 &nbsp;&nbsp; 대표자 : 송승빈</FooterText>
        </li>
        <li>
          <FooterText>사업자 등록번호 : 111-22-324298</FooterText>
        </li>
        <li>
          <FooterText>강원도 춘천시 서면 금산리 477-1</FooterText>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
