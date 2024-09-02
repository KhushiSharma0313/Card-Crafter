import React, { useState } from 'react'
import Header from './Header'
import Form from "./form";
import Preview from './preview';


const App = () => {
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Company, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWebsite] = useState("");

  const Values = {
    Name,
    Title,
    Company,
    City,
    State,
    Phone,
    Email,
    Website

  };

  const handleChange = (e) => {
    const setField = {
      setName,
      setTitle,
      setCompany,
      setCity,
      setState,
      setPhone,
      setEmail,
      setWebsite
    };
    setField["set" + e.target.name](e.target.value);

  };

  return (
  <div className= "App">
    <Header Dark={true}>E-card Maker</Header>
    <main>
      <Form Values={Values} onChange={handleChange} />
      <Preview Values = {Values}/>
    </main>
  </div>
  );
};

export default App;
