import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const PromiseMessage = () => {
    return(
        <>

        <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
        
         />
        

        </>
    )
}





export default PromiseMessage