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
            "title": "Length",
            "field": "length",
        },

        {
            "title": "Max Draft",
            "field": "maxDraft",
        },

        {
            "title": "Name",
            "field": "name",
        },

        {
            "title": "Width",
            "field": "width",
        },

    ]
    
    console.log(vessels)

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

            <DataTable columns={columns} registers={vessels}></DataTable>

            </section>

        </>
    )
}


export default Vessels