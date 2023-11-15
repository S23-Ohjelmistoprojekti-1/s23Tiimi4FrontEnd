import React, { useState } from 'react';

export default function Rekisterointi() {
  const [asiakas, setAsiakas] = useState({
    etunimi: '',
    sukunimi: '',
    puhelinnumero: '',
    email: '',
  });

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
        console.log('Asiakas successfully added to the database.');
      } else {
        console.error('Failed to add Asiakas to the database.');
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
    </>
  );
}
