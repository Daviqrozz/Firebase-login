import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Sua config
const firebaseConfig = {
  apiKey: "AIzaSyBpoQvSuYSn3MFbEm1oIopANFwHzNDLuws",
  authDomain: "login-teste-73b99.firebaseapp.com",
  projectId: "login-teste-73b99",
  storageBucket: "login-teste-73b99.appspot.com",
  messagingSenderId: "688537856629",
  appId: "1:688537856629:web:bb7f0d9b4754758119663c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    document.getElementById("user-email").textContent = email;
  } else {
    window.location.href = "index.html";
  }
});