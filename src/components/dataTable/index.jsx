
import * as React from 'react';
import "./styles.scss";
import SearchInput from '../searchInput';
import { useState } from 'react';
import { useEffect } from 'react';



const DataTable = ({ columns, registers, title = "Embarcações" }) => {

    const [searchValue, setSearchValue] = useState("");
    const [entries, setEntries] = useState(registers)

    const handleSearchValue = (e) =>{
        const value = e.target.value;
        setSearchValue(value)
    }

    useEffect(() => {
        if (searchValue === "") {
            setEntries(registers);
        } else {
            const filteredEntries = registers.filter(register => {
                return columns.some(column => {
                    return register[column.field]
                        .toString()
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                });
            });
            setEntries(filteredEntries);
        }
    }, [searchValue, registers, columns]);




    return (
        <>  
            <div>
            
            <div className="table-header">
            
                <span>{title}</span> 
                <SearchInput placeholder="Embarcação..." type="text" onChange={(e) => {
                    handleSearchValue(e)
                }}/>
            </div>
            <section className="tableSection">
                
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map((column, index) => {
                                    return (
                                        <th colWidth={column.width} key={index}>{column.title}</th>
                                    )
                                })
                            }
                        </tr>

                    </thead>

                    <tbody>
                        {entries.map((register, index) => {
                            return (
                                <tr key={index}>
                                    {columns.map((column, index) => (<td key={index}>{register[column.field]}</td>))}
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </section>
            </div>
            

        </>
    )
}


export default DataTable;