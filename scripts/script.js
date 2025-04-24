import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("RegisterButton");

  submit.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert(`Created user ${user.email}`)
      window.location.href = 'index.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao registrar:", error.code, error.message);
      // ..
    });
  });
});
