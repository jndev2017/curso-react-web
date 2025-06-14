import { useEffect, useState } from 'react'
import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc, setDoc, doc, getDoc, getDocs,
  query, where, updateDoc,
  deleteDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Obtiene la informacion de un usuario por su nombre
async function getUsuario(nombre) {
  const collectionRef = collection(db, "usuarios");

  const queryDoc = query(collectionRef, where("nombre", "==", nombre));

  const querySnapshot = await getDocs(queryDoc);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Obtiene un usuario por su ID
async function getUsuarioById(id) {
  const docRef = doc(db, "usuarios", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Actualiza un usuario por su ID
async function updateUsuario(id, formData) {
  const docRef = doc(db, "usuarios", id);

  await updateDoc(docRef, {
    nombre: formData.nombre,
    edad: formData.edad,
    email: formData.email
  })
  .then(() => {
    console.log("Usuario actualizado correctamente");
  })
  .catch((error) => {
    console.error("Error al actualizar el usuario:", error);
  });
}

async function deleteUsuario(id) {
  const docRef = doc(db, "usuarios", id);

  await deleteDoc(docRef)
    .then(() => {
      console.log("Usuario eliminado correctamente");
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });
}

function addUsuario(formData){
  const usuario = {
    nombre: formData.nombre,
    edad: formData.edad,
    email: formData.email
  }

  // Aquí iría la lógica para agregar el usuario a Firestore
  console.log("Usuario agregado:", usuario);

  const collectionRef = collection(db, "usuarios");

  addDoc(collectionRef, usuario)
    .then(() => {
      console.log("Usuario agregado correctamente");
    })
    .catch((error) => {
      console.error("Error al agregar el usuario:", error);
    });
}

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
  });

  // Efecto para obtener un usuario por nombre al cargar el componente
  useEffect(() => {
    console.log(getUsuario("Consulta por nombre: ", "Jorge"));
    console.log(getUsuario("Consulta por ID: ", "kX3Ro0lK3KrN3JgsfAI0"));

    updateUsuario("kX3Ro0lK3KrN3JgsfAI0", {
      email: "juanperez@gmail.com",
      nombre: "Juan Perez",
      edad: 30
    })

    deleteUsuario("wr4PzOm80aUFsluqwqYf");
  }, []);

  return (
    <>
      <h1>Firebase CRUD</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        addUsuario(formData);

        setFormData({
          nombre: '',
          email: '',
          edad: '',
        });
      }
      }>
        <input
          className='input-block'
          type="text"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={ (e) => setFormData({...formData, nombre: e.target.value}) }
        />
        <input
          className='input-block'
          type="number"
          placeholder="Edad"
          value={formData.edad}
          onChange={(e) => setFormData({...formData, edad: e.target.value})}
        />
        <input
          className='input-block'
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />

        <input className='input-block' type="submit" value="Agregar Usuario" />
      </form>
    </>
  )
}

export default App
