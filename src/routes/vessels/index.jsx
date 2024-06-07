import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/index"
import "./styles.scss"
import { getAllVessels } from "../../models/Vessels"
import { formatResponse } from "../../hooks/helper"
import DataTable from "../../components/dataTable"



const Vessels = () => {
    const [vesselsInfo, setVesselsInfo] = useState({});
    const [vessels, setVessels] = useState([]);

    const columns = [
        {
            "title": "IMO",
            "field": "imo",
        },
         {
            "title": "Embarcação",
            "field": "name",
        },

        {
            "title": "Comprimento",
            "field": "length",
        },

         {
            "title": "Largura",
            "field": "width",
        },

        {
            "title": "Max Draft",
            "field": "maxDraft",
        },

       

       

    ]
    
    const handleVessels = async () => {
        try{
            
            const res = await getAllVessels()
            if(res.status == "success") {
                setVesselsInfo(res.data)
                }
            else throw new Error("Não foi possivel encontrar embarcações!")
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        handleVessels()
    }, [])

    useEffect(() => {
        setVessels(formatResponse(vesselsInfo))
        
    }, [vesselsInfo])

    return(
        <>
            <section className="vessels">
            <Navbar></Navbar>
            <div className="vessel-info">
                <DataTable registers={vessels} columns={columns}></DataTable>
            </div>
            

            </section>

        </>
    )
}


export default Vessels