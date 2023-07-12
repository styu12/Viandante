import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FAQDog,
  FAQFacility,
  FAQPrice,
  FAQRefund,
  FAQTime,
  FAQUsage,
} from "./FAQ/FAQContent";

const FAQContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 50px 8%;
  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const FAQTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const FAQWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FAQFilterWrapper = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
  }
`;

const FAQFilter = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 30px;
  }
`;

const FAQContentWrapper = styled.div`
  flex: 3;
`;

const FAQ = ({ rooms, faqRef }) => {
  const [dog, setDog] = useState(null);
  const [facility, setFacility] = useState(null);
  const [type, setType] = useState("price");
  const handleType = (newType) => {
    setType(newType);
  };

  // react에서 enum 사용하기! enum 변수 지정
  const currentFAQ = {
    price: <FAQPrice rooms={rooms} />,
    time: <FAQTime />,
    dog: <FAQDog dog={dog} />,
    facility: <FAQFacility facility={facility} />,
    refund: <FAQRefund />,
    usage:  <FAQUsage />
  };

  const getData = async () => {
    await faqRef.get().then((res) =>
      res.forEach((doc) => {
        switch (doc.id) {
          case "dog":
            setDog({
              id: doc.id,
              ...doc.data(),
            });
            break;
          case "facility":
            setFacility({
              id: doc.id,
              ...doc.data(),
            });
            break;
          default:
            break;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FAQContainer>
      {faqRef && (
        <>
          <FAQTitle>FAQ</FAQTitle>
          <FAQWrapper>
            <FAQFilterWrapper>
              <FAQFilter
                active={type === "price"}
                onClick={() => handleType("price")}
              >
                인원 및 금액
              </FAQFilter>
              <FAQFilter
                active={type === "time"}
                onClick={() => handleType("time")}
              >
                입/퇴실시간
              </FAQFilter>
              <FAQFilter
                active={type === "dog"}
                onClick={() => handleType("dog")}
              >
                반려견 유의사항
              </FAQFilter>
              <FAQFilter
                active={type === "facility"}
                onClick={() => handleType("facility")}
              >
                부대시설
              </FAQFilter>
              <FAQFilter
                active={type === "refund"}
                onClick={() => handleType("refund")}
              >
                환불규정
              </FAQFilter>
              <FAQFilter
                active={type === "usage"}
                onClick={() => handleType("usage")}
              >
                이용안내
              </FAQFilter>

            </FAQFilterWrapper>
            <FAQContentWrapper>
              {/* react에서 enum사용하기!! type 이랑 enum 변수 연결 */}
              {currentFAQ[type]}
            </FAQContentWrapper>
          </FAQWrapper>
        </>
      )}
    </FAQContainer>
  );
};

export default FAQ;
