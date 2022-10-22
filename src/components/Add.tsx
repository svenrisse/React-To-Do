import React, { useState } from "react";

function Add() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData(prevFormState => {
      return {
        ...prevFormState,
        [event.target.name]: event.target.value
      }
    })
  }
  
  return (
    <form>

      <input type="text" name="title" placeholder="Title" onClick={handleChange}/>
      <input type="text" name="description" placeholder="Description" onClick={handleChange}/>

      <button type="submit">Add</button>
    </form>
  );
}

export default Add;
