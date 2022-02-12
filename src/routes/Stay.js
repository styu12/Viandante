import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 60px;
    flex-direction: column;
  }
`;

const StayPoster = styled.div`
  flex: 1;
  height: 100%;
  background: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  transition: all ease 0.8s;
  &:hover {
    flex: 1.3;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
      url(${(props) => props.bg});
    background-position: center center;
    background-size: cover;
  }
  @media (max-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
      url(${(props) => props.bg});
    background-position: center center;
    background-size: cover;
    &:hover {
      flex: 1;
    }
  }
`;

const StayPosterLink = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span:nth-child(1) {
    font-size: 25px;
  }
  > span:nth-child(2) {
    font-size: 15px;
    display: block;
    margin: 10px 0;
  }
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    color: white;
    > span:nth-child(1) {
      font-size: 17px;
    }
    > span:nth-child(2) {
      font-size: 12px;
    }
  }
`;

const Stay = () => {
  const [stays, setStays] = useState([]);
  const navigate = useNavigate();

  const getStays = async () => {
    await dbService.collection("Stays").onSnapshot((snapshot) => {
      const stayArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStays(stayArray);
    });
  };

  useEffect(() => {
    getStays();
  }, []);

  const toStayDetail = (id) => {
    navigate(`/stay/detail/${id}`);
  };

  return (
    <Container>
      {stays.map((s) => (
        <StayPoster
          key={s.id}
          bg={s.thumbnailUrl}
          onClick={() => toStayDetail(s.id)}
        >
          <StayPosterLink>
            <span>{s.name}</span>
            <span>{s.description}</span>
          </StayPosterLink>
        </StayPoster>
      ))}
    </Container>
  );
};

export default Stay;
