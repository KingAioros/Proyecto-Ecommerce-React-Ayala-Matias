import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR1_Ex8s8E5va-0DD_ckInDMHQUahHpnU",
  authDomain: "x-cell-database.firebaseapp.com",
  projectId: "x-cell-database",
  storageBucket: "x-cell-database.appspot.com",
  messagingSenderId: "69007215982",
  appId: "1:69007215982:web:b9ed2570568748057f057f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;