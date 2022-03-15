import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { PhotoBackground } from "styles/Container-style";

// header 전체 컨테이너
const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 2rem;
    height: 60px;
  }
`;

// 페이지 네비게이션 ul
const CustomNavigator = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-end;
  }
`;

// 페이지 네비게이션 li
const CustomNavigatorLi = styled.li`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

// 페이지 네비게이션 li 속 링크
const CustomNavigatorLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  color: ${(props) => (props.active === "true" ? "black" : "#636e72")};
  &:hover {
    color: black;
  }
`;

const HeaderSpaceBar = styled.span`
  width: 5%;
  font-size: 27px;
  font-family: "GmarketSansLight";
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoIcon = styled(PhotoBackground)`
  width: 100px;
  height: 55px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const MobileMenuIcon = styled(LogoIcon)`
  display: none;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileCancelIcon = styled(MobileMenuIcon)`
  position: absolute;
  top: 20px;
  right: 15px;
`;

const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    width: 90vw;
    height: 100vh;
    top: 0;
    right: ${(props) => (props.active ? "0" : "-90vw")};
    transition: right 0.5s ease;
    background-color: white;
    z-index: 999;
    padding: 100px 50px;
  }
`;

const MobileMenuUl = styled.ul`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const MobileMenuLi = styled.li`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const MobileMenuLink = styled(Link)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 15px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
    color: black;
    text-decoration: none;
    color: ${(props) => (props.active === "true" ? "black" : "#636e72")};
  }
`;

const BookBtnContainer = styled.div`
  width: 110px;
  height: 200px;
  transform: translateY(80px);
  @media (max-width: 768px) {
    width: 70px;
    height: 120px;
    transform: translateY(45px);
  }
`;

const BookBtn = styled.p`
  font-size: 15px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 11px;
    height: 30px;
  }
`;

const BookLink = styled.a`
  width: 100%;
  background-color: black;
  text-decoration: none;
  font-size: 15px;
  padding: 15px 0;
  text-align: center;
  color: white;
  display: ${(props) => (props.active ? "block" : "none")};
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 0;
  }
`;

// 상단 메뉴바
const Header = () => {
  const { pathname } = useLocation();
  const [bookShowing, setBookShowing] = useState(false);
  const [menuShowing, setMenuShowing] = useState(false);
  const showBook = () => {
    setBookShowing(true);
  };

  const hideBook = () => {
    setBookShowing(false);
  };

  const showMenu = () => {
    setMenuShowing(true);
  };

  const hideMenu = () => {
    setMenuShowing(false);
  };

  return (
    <Container>
      <CustomNavigatorLink to="/">
        <LogoIcon bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FlogoText.png?alt=media&token=8a65e8a1-2043-4d36-b606-2a125cd73016" />
      </CustomNavigatorLink>

      <CustomNavigator>
        <CustomNavigatorLi>
          <CustomNavigatorLink
            to="/stay"
            active={pathname.includes("stay").toString()}
          >
            STAY
          </CustomNavigatorLink>
        </CustomNavigatorLi>
        <CustomNavigatorLi>
          <CustomNavigatorLink
            to="/review"
            active={pathname.includes("review").toString()}
          >
            REVIEW
          </CustomNavigatorLink>
        </CustomNavigatorLi>
        <CustomNavigatorLi>
          <CustomNavigatorLink
            to="/magazine"
            active={pathname.includes("magazine").toString()}
          >
            MAGAZINE
          </CustomNavigatorLink>
        </CustomNavigatorLi>
        <CustomNavigatorLi>
          <CustomNavigatorLink
            to="/event"
            active={pathname.includes("event").toString()}
          >
            EVENT
          </CustomNavigatorLink>
        </CustomNavigatorLi>
        <MobileMenuIcon
          bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FhambugMenu.png?alt=media&token=386a8a08-de80-490a-aae5-c59dc027db32"
          onClick={() => showMenu()}
        />
        <MobileMenuContainer active={menuShowing === true}>
          <MobileCancelIcon
            bg="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Icons%2FmenuCancel.png?alt=media&token=6861b26e-c769-46d3-835f-9fb9e2e0d4c3"
            onClick={() => hideMenu()}
          />
          <MobileMenuUl>
            <MobileMenuLi>
              <MobileMenuLink
                to="/stay"
                active={pathname.includes("stay").toString()}
                onClick={() => hideMenu()}
              >
                STAY
              </MobileMenuLink>
            </MobileMenuLi>

            <MobileMenuLi>
              <MobileMenuLink
                to="/review"
                active={pathname.includes("review").toString()}
                onClick={() => hideMenu()}
              >
                REVIEW
              </MobileMenuLink>
            </MobileMenuLi>
            <MobileMenuLi>
              <MobileMenuLink
                to="/magazine"
                active={pathname.includes("magazine").toString()}
                onClick={() => hideMenu()}
              >
                MAGAZINE
              </MobileMenuLink>
            </MobileMenuLi>
          </MobileMenuUl>
        </MobileMenuContainer>
        <HeaderSpaceBar> | </HeaderSpaceBar>
        <BookBtnContainer
          onMouseOver={() => showBook()}
          onMouseLeave={() => hideBook()}
        >
          <BookBtn>예약하기</BookBtn>
          <BookLink
            href="https://rev.yapen.co.kr/external?ypIdx=62417"
            target="_blank"
            active={bookShowing === true}
          >
            춘천점
          </BookLink>
          <BookLink
            href="https://rev.yapen.co.kr/external?ypIdx=62408"
            target="_blank"
            active={bookShowing === true}
          >
            원주점
          </BookLink>
        </BookBtnContainer>
      </CustomNavigator>
    </Container>
  );
};

export default Header;
