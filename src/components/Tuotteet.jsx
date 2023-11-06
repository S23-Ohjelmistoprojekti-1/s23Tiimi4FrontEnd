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
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    .then(responseData=> {
        setVaatteet(responseData.vaatteet)
    })}
    return(
        <div className="ag-theme-material"
        style={{height: '700px', width: '70%', margin: 'auto'}}>
            <AgGridReact 
            rowData={vaatteet}
            columnDefs={columns}
            >
                
            </AgGridReact>
            </div>
    )
    
}