import { useState, useEffect } from "react"
import "./styles.scss"
import Navbar from "../../components/navbar/index"
import { getAllVesselsCo2 } from "../../models/Vessels"
import { formatResponse } from "../../hooks/helper"
import VesselCard from "../../components/vesselCard"

const Report = () => {

    const [vesselCo2, setVesselCo2] = useState({});
    const [co2Info, setCo2Info] = useState([]);


    useEffect(()=> {
        handleCo2Info()
    }, [])

    useEffect(()=> {
        setCo2Info(formatResponse(vesselCo2))
    },[vesselCo2] )

    console.log(co2Info)



    const handleCo2Info = async () => {
        try{
            const res = await getAllVesselsCo2()

            if(res.status == "success"){
                setVesselCo2(res.data)
            }else{
                throw new Error("Nenhuma informação encontrada!")
            }
        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <>
        
        
        <div className="report">
            <Navbar />

            <div className="cards">
                <h2>Análise de emissão de CO2 por embarcação</h2>
            <VesselCard vessels={co2Info}></VesselCard>
            
            </div>
        </div>

        </>
    )
}


export default Report