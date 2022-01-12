// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE_ID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const storageService = firebase.storage();

// ###add Data
// await dbService
//   .collection("users")
//   .doc("Test")
//   .set({
//     name: "seungoh",
//     age: 25,
//     hobby: "work out",
//   })
//   .then(() => {
//     console.log("Success!");
//   });

// ###read Data
// await dbService
//   .collection("users")
//   .doc("Test")
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       console.log(doc.data());
//     } else {
//       console.log("No data");
//     }
//   });

// ## storage photoUrl Reading
// const [photoUrl, setPhotoUrl] = useState("");

//   const getPhotoUrl = async () => {
//     const storageRef = storageService.ref("test.jpeg");
//     // const photoRef = storageRef.child("test.jpeg");
//     const storageUrl = await storageRef.getDownloadURL();
//     setPhotoUrl(storageUrl);
//   };
//   useEffect(() => {
//     getPhotoUrl();
//   }, []);
