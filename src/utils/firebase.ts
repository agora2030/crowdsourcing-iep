import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const FIREBASE_CONFIG = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: `${REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: `${REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

let FirebaseApp;
if (!FirebaseApp) {
  FirebaseApp = initializeApp(FIREBASE_CONFIG);
}
const analytics = getAnalytics(FirebaseApp);
const auth = getAuth(FirebaseApp);
const remoteConfig = getRemoteConfig(FirebaseApp);
remoteConfig.settings.minimumFetchIntervalMillis = 300000;

export const loginGoogle = async (): Promise<{
  message?: string;
  type: "success" | "danger";
}> => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    return { type: "success" };
  } catch (error) {
    let errorMessage: any = (error as Error).message;
    if (errorMessage.includes("auth/popup-closed-by-user"))
      errorMessage = undefined;
    return { message: errorMessage, type: "danger" };
  }
};

// firebase login with email password
export const loginEmailPassword = async (
  email: string,
  password: string,
): Promise<{
  message?: string;
  type: "success" | "danger";
}> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { type: "success" };
  } catch (error) {
    const errorMessage = (error as Error).message;
    return { message: errorMessage || "", type: "danger" };
  }
};

export const getToken = async (): Promise<string> => {
  const token = localStorage.getItem("TOKEN_AUTH");
  if (token) {
    return JSON.parse(token);
  }
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    localStorage.setItem("TOKEN_AUTH", JSON.stringify(token));
    return token;
  }
  return "";
};

export { auth, analytics, remoteConfig };
export default FirebaseApp;
