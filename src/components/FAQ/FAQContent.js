import React from "react";
import styled from "styled-components";

const FAQContent = styled.div`
  width: 70%;
`;

const FAQContentTitle = styled.h4`
  font-size: 19px;
  margin-bottom: 10px;
`;

const FAQContentDesc = styled.p`
  font-size: 14px;
  font-family: "GmarketSansLight";
  line-height: 1.8;
  margin-bottom: 25px;
  > span {
    /* font-weight: 900;
    font-size: 15px; */
    font-family: "GmarketSansMedium";
  }
`;

const FAQTable = styled.table`
  width: 100%;
  margin: 25px 0;
`;

const FAQTableRow = styled.tr`
  height: 50px;
`;

const FAQTableItem = styled.td`
  border: 1px solid black;
  border-collapse: separate;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
`;

const FAQTableHead = styled(FAQTableItem)`
  background-color: black;
  font-size: 13px;
  color: white;
  font-family: "GmarketSansLight";
  border: 1px solid gray;
`;

export const FAQPrice = ({ rooms }) => {
  return (
    <FAQContent>
      <FAQContentTitle>인원기준</FAQContentTitle>
      <FAQTable>
        <tbody>
          <FAQTableRow>
            <FAQTableHead>객실</FAQTableHead>
            <FAQTableHead>기준인원</FAQTableHead>
            <FAQTableHead>최대인원</FAQTableHead>
          </FAQTableRow>
          {rooms.map((r) => (
            <FAQTableRow key={r.id}>
              <FAQTableItem>{r.name}</FAQTableItem>
              <FAQTableItem>{r.people[0]}</FAQTableItem>
              <FAQTableItem>{r.people[1]}</FAQTableItem>
            </FAQTableRow>
          ))}
        </tbody>
      </FAQTable>

      <FAQContentTitle>요금기준</FAQContentTitle>
      <FAQTable>
        <tbody>
          <FAQTableRow>
            <FAQTableHead>객실</FAQTableHead>
            <FAQTableHead>성수기 주중</FAQTableHead>
            <FAQTableHead>성수기 주말</FAQTableHead>
            <FAQTableHead>비수기 주중</FAQTableHead>
            <FAQTableHead>비수기 주말</FAQTableHead>
          </FAQTableRow>
          {rooms.map((r) => (
            <FAQTableRow key={r.id}>
              <FAQTableItem>{r.name}</FAQTableItem>
              <FAQTableItem>{r.price[0]}</FAQTableItem>
              <FAQTableItem>{r.price[1]}</FAQTableItem>
              <FAQTableItem>{r.price[2]}</FAQTableItem>
              <FAQTableItem>{r.price[3]}</FAQTableItem>
            </FAQTableRow>
          ))}
        </tbody>
      </FAQTable>
      <FAQContentDesc>
        * 성수기(6~8월) / 비수기(그 외) | 주말(금,토 입실) / 주중(그 외)
      </FAQContentDesc>
    </FAQContent>
  );
};

export const FAQTime = () => {
  return (
    <FAQContent>
      <FAQContentTitle>입실시간</FAQContentTitle>
      <FAQContentDesc>15시</FAQContentDesc>
      <FAQContentTitle>퇴실시간</FAQContentTitle>
      <FAQContentDesc>11시 반드시 준수하여 주세요!!</FAQContentDesc>
    </FAQContent>
  );
};

export const FAQDog = ({ dog }) => {
  return (
    <FAQContent>
      <FAQContentTitle>반려견 유의사항</FAQContentTitle>
      <FAQContentDesc>
        실내에서 반려동물이 배변 시 반드시 직접 치워주세요!
      </FAQContentDesc>
      <FAQContentDesc>
        {dog.banBigDog && "대형견(12kg 이상)은 입장이 불가합니다."}
      </FAQContentDesc>
      <FAQContentDesc>구비된 용품: {dog.dogGoods}</FAQContentDesc>
      <FAQContentDesc>
        {dog.dogFence
          ? "애견펜스가 설치되어 있으니 안심하셔도 됩니다 :)"
          : "애견펜스는 설치되어 있지 않습니다. 주변에 차가 다니는 큰 도로는 없지만, 더욱 안전한 여행을 위해 리드줄을 구비하시는 것을 추천드립니다 :)"}
      </FAQContentDesc>
      <FAQContentDesc>
        아이들이 마당에서 뛰어다닐 때 관심을 갖고 함께 있어주세요!
      </FAQContentDesc>
    </FAQContent>
  );
};

export const FAQRefund = () => {
  return (
    <FAQContent>
      <FAQContentTitle>환불규정</FAQContentTitle>
      <FAQContentDesc>기본 취소 수수료: 0%</FAQContentDesc>
      <FAQContentDesc>예약 7일 후부터 이용 6일 전: 0%</FAQContentDesc>
      <FAQContentDesc>예약 8일 후부터 이용 5일 전: 10%</FAQContentDesc>
      <FAQContentDesc>이용 4일 전: 20%</FAQContentDesc>
      <FAQContentDesc>이용 3일 전: 30%</FAQContentDesc>
      <FAQContentDesc>이용 2일 전: 50%</FAQContentDesc>
      <FAQContentDesc>이용 1일 전: 70%</FAQContentDesc>
      <FAQContentDesc>이용일 당일: 100%(환불불가)</FAQContentDesc>
      <FAQContentDesc>
        * 이용 당일 예약 후 바로 취소한 경우에도 이용 당일 취소이므로 환불이
        불가합니다.
      </FAQContentDesc>
      <FAQContentTitle>예약 및 결제</FAQContentTitle>
      <FAQContentDesc>
        예약신청 후 결제방식에 따라 결제가 완료되면, 예약완료 및 안내문자가
        송부됩니다.
      </FAQContentDesc>
    </FAQContent>
  );
};

export const FAQFacility = ({ facility }) => {
  const { facilities, facilityDesc } = facility;
  const facArray = [];
  for (let i = 0; i < facilities.length; i++) {
    const facItem = {
      id: i,
      title: facilities[i],
      desc: facilityDesc[i],
    };
    facArray.push(facItem);
  }
  return (
    <FAQContent>
      <FAQContentTitle>더 편한 여행을 위한 정보</FAQContentTitle>
      {facArray.map((f) => (
        <FAQContentDesc key={f.id}>
          <span>• {f.title}</span> {f.desc}
          <br></br>
        </FAQContentDesc>
      ))}
    </FAQContent>
  );
};
