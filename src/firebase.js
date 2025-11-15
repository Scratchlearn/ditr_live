// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmKd402V3unnYCzyLoqFHH7Q7MQDphhek",
  authDomain: "educational-website-f4f85.firebaseapp.com",
  projectId: "educational-website-f4f85",
  storageBucket: "educational-website-f4f85.appspot.com", // ✅ FIXED HERE
  messagingSenderId: "217329461495",
  appId: "1:217329461495:web:d42b26480949ba4e338bf2",
  measurementId: "G-VBQ63N4N6M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
  }
  return window.recaptchaVerifier;
};

export { signInWithPhoneNumber };
