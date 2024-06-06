
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./styles.scss"


const DataTable = ({ columns, registers }) => {



    return (
        <>
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
                        {registers.map((register, index) => {
                            return (
                                <tr key={index}>
                                    {columns.map((column, index) => (<td key={index}>{register[column.field]}</td>))}
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </section>

        </>
    )
}


export default DataTable;