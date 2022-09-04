import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXPiNR6lk1KuLTHrvNx6_-dovXE4hlM5I",
  authDomain: "petrol-consumption.firebaseapp.com",
  projectId: "petrol-consumption",
  storageBucket: "petrol-consumption.appspot.com",
  messagingSenderId: "1005868941734",
  appId: "1:1005868941734:web:03f6576aa34508a3d0cf67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatDate,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
};
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
export const signOutUser = async () => await signOut(auth);
