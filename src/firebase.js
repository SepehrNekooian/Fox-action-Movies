import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDHdODSeVfsjqzWKAXs6J3nsZx7HrqKA2s",
  authDomain: "react-learning-669b9.firebaseapp.com",
  projectId: "react-learning-669b9",
  storageBucket: "react-learning-669b9.firebasestorage.app",
  messagingSenderId: "32582688190",
  appId: "1:32582688190:web:803d06508e22cca4382def"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,


    })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));   
    }

}


const login = async (email, password)=>{

    try {
       await signInWithEmailAndPassword(auth, email, password);
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
        
    }

}

const logout =()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};