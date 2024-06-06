import { database, authentication } from "../sevices/firebase";
import { ref, set } from "firebase/database";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";


const insertNewUser = async (userData) => {
    let errorMessage
    try {
        if (!userData.email || !userData.password) {
            errorMessage = "Os campos devem ser preenchidos!"
            throw new Error(errorMessage);
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
            errorMessage = "Insira um email válido!"
            throw new Error(errorMessage);
        }
        if(userData.password.length < 6){
            errorMessage = "A senha deve conter no minimo 6 caracteres!"
            throw new Error(errorMessage);  
        } 
        const email = userData.email
        const password = userData.password
        await createUserWithEmailAndPassword(authentication, email, password)
        return {status: "success", errorMessage: ""}
    } catch (error) {
        console.error("Não foi possível cadastrar o usuário: ", error);
        if(error.message == "Firebase: Error (auth/email-already-in-use).") errorMessage = "Email já cadastrado!"
        return {status: "failure", errorMessage: errorMessage};
    }
}

const authUser = async (userData) => {
    let errorMessage;
    try{
        if (!userData.email || !userData.password) {
            
            errorMessage = "Os campos devem ser preenchidos!"
            throw new Error(errorMessage);
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
            errorMessage = "Insira um email válido!"
            throw new Error(errorMessage);
        }
        const {email, password} = userData
        await signInWithEmailAndPassword(authentication, email, password)
        return {status: "success", errorMessage: ""}
    }catch(error){
        errorMessage = error.message
        if(error.message == "Firebase: Error (auth/invalid-credential).") errorMessage = "Usuário ou senha incorretos!"
        
        return {status: "failure", errorMessage: errorMessage};
        
    }
}

const isUserLogged = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      resolve(!!user);
      unsubscribe();
    }, reject);
  });
};

export {
    insertNewUser,
    authUser,
    isUserLogged
}
