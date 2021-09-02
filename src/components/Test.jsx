import React, { useState } from "react";

const Testing = ({ onSave }) => {
  const [name, setName] = useState("");
  const [nameShow, setNameShow] = useState("");


  const fieldHandler = (e) => {
    setName(e.target.value);
  };
  
    const formHandler = (e) => {
    e.preventDefault();
    console.log("Test.js===>", name);
    setNameShow(name);
    onSave(name);
    console.log("Test.js new===>", nameShow)
  };



  return (
    <>
    <h1>Hello {nameShow}</h1>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={fieldHandler}
          value={name}
        />
        <button type="submit">enter</button>
      </form>
    </>
  );
};

export default Testing;
