import React from 'react';
import FormElement from './FormElement';

const Form = () => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form>
        <FormElement ID="Name" Label="Name" />
        <FormElement ID="Title" Label="Title" />
        <FormElement ID="Company Name" Label="Company Name" />
        <FormElement ID="City" Label="City" />
        <FormElement ID="State" Label="State" />
        <FormElement ID="Phone" Label="Phone" />
        <FormElement ID="Email" Label="Email" />
        <FormElement ID="Website" Label="Website" />
      </form>
    </section>
  );
};

export default Form;
