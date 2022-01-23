import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import styled from "styled-components";
import MagazineDog from "components/MagazineDog";
import { dbService } from "fbase";
import PageTopBanner from "components/Page/PageTopBanner";

const Container = styled.div`
  width: 100%;
  padding: 40px 14%;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ToggleBtn = styled.button`
  width: 100px;
  height: 60px;
  font-size: 15px;
  margin: 0 15px 20px 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.isOn ? "black" : "#b2bec3")};
  border: none;
`;

const MagazineWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const Magazine = () => {
  const [magazines, setMagazines] = useState([]);
  const [type, setType] = useState("dog");
  const [BannerPhotos, setBannerPhotos] = useState({});

  const getDog = async () => {
    // magazines data call
    await dbService.collection("Magazines").onSnapshot((snapshot) => {
      const magazineArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMagazines(magazineArray);
    });

    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <CustomContainer>
      <PageTopBanner
        bg={BannerPhotos.dogBannerUrl}
        subTitle="Magazine"
        title="비안단테 매거진"
      />

      <Container>
        <ToggleWrapper>
          <ToggleBtn isOn={type === "dog"} onClick={() => setType("dog")}>
            강아지
          </ToggleBtn>
          <ToggleBtn isOn={type === "space"} onClick={() => setType("space")}>
            공간
          </ToggleBtn>
        </ToggleWrapper>

        <MagazineWrapper>
          {magazines.map((m) => {
            return (
              <div key={m.id}>
                <MagazineDog m={m} />
              </div>
            );
          })}
        </MagazineWrapper>
      </Container>
    </CustomContainer>
  );
};

export default Magazine;
