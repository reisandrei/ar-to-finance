// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9agZqz5UPkzYyUmH0cBpv2mMLjYFPkPs",
  authDomain: "ar-to-finance.firebaseapp.com",
  projectId: "ar-to-finance"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de login
window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Login bem-sucedido!";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
};

// Função de cadastro
window.signup = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Conta criada com sucesso!";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
};
