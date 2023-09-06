import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_RTTBE4PqcZL0OZtN8J7X78X6TAxN8TI",
  authDomain: "vacinamovel-99dcc.firebaseapp.com",
  projectId: "vacinamovel-99dcc",
  storageBucket: "vacinamovel-99dcc.appspot.com",
  messagingSenderId: "110393454853",
  appId: "1:110393454853:web:60406e1bcfb96592a7876c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };