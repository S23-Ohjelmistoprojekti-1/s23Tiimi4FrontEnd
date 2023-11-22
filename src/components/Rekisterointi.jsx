import React, { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Rekisterointi() {
  const [asiakas, setAsiakas] = useState({
    etunimi: '',
    sukunimi: '',
    kotiosoite:'' ,
    postinumero:'',
    postitoimipaikka: '',
    puhelinnumero: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsiakas({ ...asiakas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/asiakkaat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(asiakas),

      });
  
      if (response.ok) {
        alert('Rekisteröinti onnistui!');
        navigate('/');
                
               

      } else {
        alert('Failed to add Asiakas to the database.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <h1>Rekisteröinti:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Etunimi:
          <input
            type="text"
            name="etunimi"
            value={asiakas.etunimi}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Sukunimi:
          <input
            type="text"
            name="sukunimi"
            value={asiakas.sukunimi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Kotiosoite:
          <input
            type="text"
            name="kotiosoite"
            value={asiakas.kotiosoite}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Postinumero:
          <input
            type="text"
            name="postinumero"
            value={asiakas.postinumero}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Postitoimipaikka:
          <input
            type="text"
            name="postitoimipaikka"
            value={asiakas.postitoimipaikka}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Puhelinnumero:
          <input
            type="text"
            name="puhelinnumero"
            value={asiakas.puhelinnumero}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={asiakas.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Rekisteröi</button>
      </form>
      <div>
      <h3>Haluatko poistaa tietosi?</h3>
      <h4>Ota yhteyttä:</h4>
      <p>pertti.peruna@hotmail.com</p>
      </div>
    </>
  );
}
