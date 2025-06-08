# Firebase - Ejemplo 1

Este ejemplo configura React y Firebase para ejecutarlo en modo desarrollo y usa servicios como:

* Google Authentication
* Firestore

## Temas que se cubren
* React hooks
* Firebase
* Google Authentication
* Firestore

## Ejecutar del proyecto
Para ejecutar el proyecto, debes seguir los siguientes pasos:

1. Actualiza el objeto de configuración de Firebase con la información de tu proyecto
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```
2. Instalar dependencias:
```npm install```

3. Ejecutar en modo local:
```npm run dev```
