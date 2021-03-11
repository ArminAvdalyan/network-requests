import React from "react";
import AppRoutes from "routes/AppRoutes";
import { ToastContainer, toast } from 'react-toastify';

import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "api/FireBaseConfig";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer 
        position="bottom-right"
        className="app-toast-container"
      />
    </div >
  );
}

export default App;
