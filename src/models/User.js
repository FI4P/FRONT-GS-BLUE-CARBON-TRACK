import { database } from "../sevices/firebase";
import { ref, set } from "firebase/database";

const insertNewUser = async (nodePath, userData) => {
    try {
        await set(ref(database, nodePath), userData);
        console.log("Usuário cadastrado com sucesso!");
        return "success";
    } catch (error) {
        console.error("Não foi possível cadastrar o usuário: ", error);
        return "failure";
    }
}

export {
    insertNewUser,
}
