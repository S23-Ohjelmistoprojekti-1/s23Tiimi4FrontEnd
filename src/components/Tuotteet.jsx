import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Tuotteet() {

    const [vaatteet, setVaatteet] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredVaatteet, setFilteredVaatteet] = useState([]);



    const rest_url = ''
    useEffect(() => { getVaatteet() }, [])


    const columns = [
        { field: 'tyyppi' },
        { field: 'vari' },
        { field: 'koko' },
        { field: 'hinta' },
        { field: 'valmistaja' }
    ]
    const getVaatteet = () => {
        fetch(rest_url)
            .then(Response => Response.json())
            .then(responseData => {
                setVaatteet(responseData)
                setFilteredVaatteet(responseData); // Set filteredVaatteet initially
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    };
    const handleSearch = () => {
        console.log('Search Term:', searchTerm);
    
        // Filter vaatteet based on the search term
        const filteredData = vaatteet.filter(vaate => {
            console.log('Vaate:', vaate);
    
            // Check if valmistaja is a string
            if (vaate && typeof vaate.valmistaja === 'string') {
                console.log('Valmistaja:', vaate.valmistaja);
    
                const valmistajaNimi = vaate.valmistaja.toLowerCase();
                console.log('Valmistaja Nimi:', valmistajaNimi);
    
                return valmistajaNimi.includes(searchTerm.toLowerCase());
            }
    
            return false;
        });
    
        console.log('Filtered Data:', filteredData);
    
        setFilteredVaatteet(filteredData);
    };
    
    
    
    


    return (
        <>
            <h1>Tuotteet:</h1>
            <div>
                <input
                    type="text"
                    placeholder="Hae valmistajan mukaan"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Hae</button>
            </div>

            <div className="ag-theme-material"
                style={{ height: '700px', width: '70%', margin: 'auto' }}>
                <AgGridReact
                    rowData={filteredVaatteet}
                    columnDefs={columns}
                >

                </AgGridReact>
            </div>
        </>
    );

}