import { ref, get } from "firebase/database";
import { database, authentication } from "../sevices/firebase";

const getAllVessels = async () => {
    let errorMessage
    try{
       const referenceNode = ref(database, "vessels")
       const snapshot = await get(referenceNode)
       const data = snapshot.val();
       if(!data){
        errorMessage = "Não foi possivel localizar embarcações"
        throw new Error(errorMessage)
       }
       return {status: "success", data: data, errorMessage : ""}
    }catch(error){
        console.log(error)
    }
}


export {
    getAllVessels
}