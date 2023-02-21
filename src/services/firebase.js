import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING, APP_ID} from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING,
  appId: APP_ID
};

const app = initializeApp(firebaseConfig)
console.log(getAuth(app).currentUser)
export const auth = getAuth(app);