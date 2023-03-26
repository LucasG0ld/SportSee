import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'

/**
 * Component that displays a form asking for the user's ID to be redirecting to the user page corresponding.
 * 
 * @component
 * @example
 * return (
 *    <Form />
 * )
 * @returns {JSX.Element}
 */

function Form () {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id === "12" || id === "18") {
      console.log("ID envoyé: ", id);
      navigate(`/user/${id}`);
    } else {
      setErrorMessage("id inexistant, veuillez entrer 12 ou 18");
    }
  };

  return (
    <div className="sps-form-container">
        {errorMessage && <p className="sps-form-error">{errorMessage}</p>}
        <form className="sps-form" onSubmit={handleSubmit}>
            <label className="sps-form-label">Entrez votre <span className="sps-form-id">ID </span>:</label>
            <input className="sps-form-input" type="text" value={id} onChange={handleChange} />
            <button className="sps-form-button" type="submit">Envoyer</button>
        </form>
    </div>
    
  );
};

export default Form;