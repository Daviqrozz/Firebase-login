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
        document.getElementById('ErrorSpan').textContent = 'Credenciais invalidas!'
        // ..
      });
  });
});

//styles
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email')

const passwordRules = document.querySelector('#passwordRules');

passwordInput.addEventListener('focus', () => {
  passwordRules.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
  document.querySelector('#passwordRulesListMinCharacters').style.color = 'yellow'
  passwordRules.style.display = 'none';
});

passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value
  const passwordLength = passwordValue.length

  if (passwordLength >= 8) {
    document.querySelector('#passwordRulesListMinCharacters').style.color = 'green'
  } else if (passwordLength <= 0) {
    document.querySelector('#passwordRulesListMinCharacters').style.color = 'red'
  } else {
    document.querySelector('#passwordRulesListMinCharacters').style.color = 'yellow'
  }

  const regex = passwordValue.match(/[@#&\/]/)

  if (regex) {
    document.querySelector('#passwordRulesListMinEspecialCharacters').style.color = 'green'
  }else{
    document.querySelector('#passwordRulesListMinEspecialCharacters').style.color = 'red'
  }
})

