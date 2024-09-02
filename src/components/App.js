import React from 'react'
import Header from './Header'
import Form from "./form";
import Preview from './preview';


const App = () => {
  return (
  <div className= "App">
    <Header Dark={true}>E-card Maker</Header>
    <main>
      <Form />
      <Preview />
    </main>
  </div>
  );
};

export default App
