import React from 'react';
import FormElement from './FormElement';

const Form = () => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form>
        {["Name", "Title", "Company Name", "City", "State", "Phone", "Email", "Website"].map((field, key) =>
        (
          <FormElement ID={field} Label={field} key={key} />
        ))}
        
      </form>
    </section>
  );
};

export default Form;
