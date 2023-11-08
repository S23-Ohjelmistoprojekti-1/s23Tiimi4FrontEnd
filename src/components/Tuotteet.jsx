import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Tuotteet() {

const [vaatteet, setVaatteet]=useState([]);

const rest_url= 'http://localhost:8080/vaatteet'
useEffect(()=>{getVaatteet()}, [])


    const columns= [
        {field: 'tyyppi'},
        {field: 'vari'},
        {field: 'koko'},
        {field: 'hinta'},
    ]
    const getVaatteet=()=>{
    fetch(rest_url)
    .then(Response=>Response.json())
    .then(responseData=> {
        setVaatteet(responseData)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
})};
    return(
        <>
        <h1>Tuotteet:</h1>
        <div className="ag-theme-material"
        style={{height: '700px', width: '70%', margin: 'auto'}}>
            <AgGridReact 
            rowData={vaatteet}
            columnDefs={columns}
            >
                
            </AgGridReact>
            </div>
            </>
    );
    
}