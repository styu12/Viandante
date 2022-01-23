import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
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
`;

const StayPosterLink = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: white;
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
  console.log(stays);

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
            {s.name}
            <br></br>
            {s.description}
          </StayPosterLink>
        </StayPoster>
      ))}
    </Container>
  );
};

export default Stay;
