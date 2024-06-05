import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAjuN33o31Gz2bQ6yHvU90SWQ_nebaxJrk",
    authDomain: "bluecarbontracking.firebaseapp.com",
    databaseURL: "https://bluecarbontracking-default-rtdb.firebaseio.com",
    projectId: "bluecarbontracking",
    storageBucket: "bluecarbontracking.appspot.com",
    messagingSenderId: "1022764235544",
    appId: "1:1022764235544:web:01f616ee2d1d6de9c8bc6d"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)


  export {
    database
  }