import './App.css'
import React, { useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Para mostrar en un componente de React se debe volver a llamar a la función getUsuarios
const getUsuarios = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = [];
    querySnapshot.forEach((doc) => {
      usuarios.push(doc.data());
    });
    return usuarios;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
};

function Usuarios() {
  // Custom hook to fetch usuarios from Firestore
  const [usuarios, setUsuarios] = React.useState(null);

  // Fetch usuarios when the component mounts
  useEffect(() => {
    const fetchUsuarios = async () => {
      const usuariosData = await getUsuarios();
      setUsuarios(usuariosData);
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        {usuarios && usuarios.map((usuario, index) => (
          <li key={index} className='left-align'>
            Nombre: {usuario.nombre} - Email: {usuario.email}
          </li>
        ))}
        {!usuarios && <li className='left-align'>No hay usuarios disponibles.</li>}
      </ul>
    </div>
  );
}

function iniciarSesionConGoogle() {
  const provider = new GoogleAuthProvider();

  // Configura el proveedor de Google para que muestre el selector de cuentas
  // Esto es útil si el usuario tiene varias cuentas de Google y quieres forzar la selección
  provider.setCustomParameters({
    prompt: "select_account" // fuerza el selector de cuentas
  });

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// Función para obtener los datos de los usuarios y mostrarlos en la consola
function obtenerDatos() {  
  getUsuarios().then((usuarios) => {
    usuarios.forEach((usuario) => {
      console.log("Nombre: " + usuario.nombre, "Email: " + usuario.email);
    });
  }).catch((error) => {
    console.error("Error getting usuarios: ", error);
  });
}

function cerrarSesion() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("User signed out successfully.");
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out:", error);
  });
}

function checkSesion() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      console.log("User is signed in:", user);
    } else {
      // User is signed out
      console.log("No user is signed in.");
    }
  });
}

function App() {
  useEffect(() => {
    // This code will run after the component mounts
    console.log("App component mounted");

    checkSesion(); // Check if a user is signed in
    // You can perform actions like fetching data, setting up timers, etc.

    obtenerDatos(); // Muestra los datos de los usuarios en la consola
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <h1> Firebase running</h1>

      <button onClick={iniciarSesionConGoogle}>
        <span>Sign in with Google</span>
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
      </button>

      <button onClick={cerrarSesion}>Cerrar sesion</button>

      <Usuarios />
    </>
  )
}

export default App
