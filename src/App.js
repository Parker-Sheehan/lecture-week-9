import "./App.css";
import Greeting from "./components/Greeting";
import Bravo from "./components/Bravo";
import Charlie from "./components/Charlie";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => setPeople([...people, newPerson]);

  let peopleDisplay = people.map((person, index) => {
    return(
    <div>
      <h3>
        {person.name}, age {person.age}
      </h3>
      {person.credit < 600 ? (
        <h4 className="bad-score">You have a bad credit score</h4>
      ) : (
        <h4> You have a real nice score</h4>
      )}
    </div>);
  });

  // let myPeople = [
  //   {
  //     name: "Brady",
  //     age: 26,
  //     isCool: true
  //   },
  //   {
  //     name: "Scott",
  //     age: 25,
  //     isCool: false
  //   },
  //   {
  //     name: "Katie",
  //     age: 18,
  //     isCool: true
  //   },
  // ]

  //   let peopleDisplay = myPeople.map((person, index) => {
  //     return <Greeting personalInfo={person}/>
  // })

  return (
    <div className="App">
      <Charlie addPerson={addPerson}></Charlie>
      {peopleDisplay}
    </div>
  );
}

export default App;
