// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjJa8HkPREBxMgvheSQpzyhBY1RiY45w4",
  authDomain: "ar-2-finance-7adc8.firebaseapp.com",
  projectId: "ar-2-finance-7adc8",
  storageBucket: "ar-2-finance-7adc8.appspot.com",
  messagingSenderId: "859218907573",
  appId: "1:859218907573:web:a778994c283ceab90e49fc"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Evento do botão de login
document.getElementById("btn-login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Login bem-sucedido!";
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
      }, 1500);
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro ao fazer login: " + error.message;
    });
});

// Evento do botão de cadastro
document.getElementById("btn-signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Conta criada com sucesso!";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro ao criar conta: " + error.message;
    });
});
