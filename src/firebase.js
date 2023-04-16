import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWRJW1GyrWIDeLSR7G1dAUqouGuhjyDWI",
  authDomain: "hydro-61afe.firebaseapp.com",
  projectId: "hydro-61afe",
  storageBucket: "hydro-61afe.appspot.com",
  messagingSenderId: "901168573924",
  appId: "1:901168573924:web:cf7e4353c7f87fa97eebf1",
  measurementId: "G-WBM8MQ0150"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };