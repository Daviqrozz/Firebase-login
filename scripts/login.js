import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpoQvSuYSn3MFbEm1oIopANFwHzNDLuws",
    authDomain: "login-teste-73b99.firebaseapp.com",
    projectId: "login-teste-73b99",
    storageBucket: "login-teste-73b99.appspot.com",
    messagingSenderId: "688537856629",
    appId: "1:688537856629:web:bb7f0d9b4754758119663c"
};

const app = initializeApp(firebaseConfig);


const submit = document.getElementById('submit')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (password === '' && email === ''){
        document.getElementById('ErrorSpan').textContent = 'Campos nao podem estar vazios!'
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "welcome.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             document.getElementById('ErrorSpan').textContent = 'Credenciais invalidas!'
        });
})