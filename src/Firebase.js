import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createRoot } from "react-dom/client";
import { LPRedirect } from "./LPRedirect";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Redirect(){
    root.render(
        <LPRedirect/>
    );}


const firebaseConfig = {
  apiKey: "AIzaSyBh8nuGpSnoAmFAr5_luaJBpunoVSu115s",
  authDomain: "miniproyecto2-e7043.firebaseapp.com",
  projectId: "miniproyecto2-e7043",
  storageBucket: "miniproyecto2-e7043.appspot.com",
  messagingSenderId: "805236167124",
  appId: "1:805236167124:web:acc5ec439e799a7b3ac641"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    Redirect();
} ).catch((error) => {console.log(error);});
}