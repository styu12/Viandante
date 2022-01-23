import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StayDetail = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);

  const getStay = async () => {
    await dbService.collection("Stays").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.id === id) {
          const currentStay = {
            id: doc.id,
            ...doc.data(),
          };
          setStay(currentStay);
          return null;
        }
        return null;
      });
    });
  };

  useEffect(() => {
    getStay();
  }, []);
  console.log(stay);
  return (
    <>
      <h1>{stay?.name}</h1>
      <p>{stay?.description}</p>
      <img src={stay?.thumbnailUrl} alt="image" width="150px" height="150px" />
    </>
  );
};

export default StayDetail;
