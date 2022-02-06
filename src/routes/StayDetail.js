import Slider from "components/Slider";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CustomContainer } from "styles/Container-style";

const StayDetail = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);

  const getStay = async () => {
    //review data call
    await dbService
      .collection("Stays")
      // .where("id", "==", id)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          if (doc.id === id) {
            setStay({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
      });
  };

  useEffect(() => {
    getStay();
    console.log(stay);
  }, []);

  return (
    <CustomContainer>
      {stay ? <Slider photoArray={stay.photosOut} /> : "No Stay"}
    </CustomContainer>
  );
};

export default StayDetail;
