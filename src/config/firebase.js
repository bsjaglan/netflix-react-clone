import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCp7h6tPWglah8B-LlOgJahf_vBo3uqm34",
  authDomain: "netflix-clone-react-6ee3b.firebaseapp.com",
  projectId: "netflix-clone-react-6ee3b",
  storageBucket: "netflix-clone-react-6ee3b.appspot.com",
  messagingSenderId: "377651657834",
  appId: "1:377651657834:web:8f92edfb1a0a546f4d1e13",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;
