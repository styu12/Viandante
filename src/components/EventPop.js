import { useNavigate } from "react-router-dom";
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
  cursor: pointer;
  z-index: 100;
`;

const PopContainer = styled.div`
  position: fixed;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 30vw;
  top: 14vh;
  width: 40vw;
  height: 45vw;
  z-index: 110;
  border-radius: 20px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    width: 80vw;
    height: 100vw;
    left: 10vw;
    flex-direction: column;
  }
`;

const PopCloseBtn = styled.button`
  width: 50px;
  height: 30px;
  font-size: 17px;
  background-color: transparent;
  border: none;
  position: absolute;
  text-align: center;
  cursor: pointer;
  color: black;
  top: 15px;
  right: 15px;
  @media (max-width: 768px) {
    font-size: 15px;
    top: 10px;
    right: 10px;
  }
`;

const PopThumb = styled(PhotoBackground)`
  width: 90%;
  height: 80%;
  margin-top: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background 0.3s ease;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
    max-width: 100%;
  }
`;

const PopText = styled.span`
  font-size: 15px;
  margin-top: 10px;
  padding: 5px 40px;
  cursor: pointer;
`;

const EventPop = ({ setIsPop, imgUrl }) => {
  const navigate = useNavigate();

  const closePop = () => {
    setIsPop(false);
  };

  const toEventPage = () => {
    navigate("/event/detail/1");
  };

  return (
    <>
      <PopWrapper onClick={closePop} />
      <PopContainer>
        <PopCloseBtn onClick={closePop}> X </PopCloseBtn>
        <PopThumb onClick={() => toEventPage()} bg={imgUrl} />
        <PopText onClick={() => toEventPage()}>이벤트 보러가기 &rarr;</PopText>
      </PopContainer>
    </>
  );
};

export default EventPop;
