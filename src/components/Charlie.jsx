import React, { useState } from "react";

const Charlie = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [credit, setCredit] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const person = {name,age,credit}
    props.addPerson(person)

    setName("")
    setAge(0)
    setCredit(0)
  };

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleCredit = (e) => setCredit(e.target.value);

  return (
    <div>
      <h1>Charlie</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name}placeholder="name" onChange={handleName} />
        <input type="text" value={age}placeholder="age" onChange={handleAge} />
        <input type="text" value={credit}placeholder="Credit Score" onChange={handleCredit} />
        <button>Add</button>
        <button type="button">Reset</button>
      </form>
    </div>
  );
};

export default Charlie;
