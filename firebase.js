
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaCPkbi3lmoQcpZqfHVEGf-_k2ghmGLdQ",
  authDomain: "hakuafes-2026-34.firebaseapp.com",
  databaseURL: "https://hakuafes-2026-34-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "hakuafes-2026-34",
  storageBucket: "hakuafes-2026-34.firebasestorage.app",
  messagingSenderId: "138331403152",
  appId: "1:138331403152:web:74e7503af8721c3ac43915",
  measurementId: "G-ZFSSEHGTDD"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, set, onValue };

