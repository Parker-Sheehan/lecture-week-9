import './App.css';
import Greeting from './components/Greeting';
import Bravo from './components/Bravo';

function App() {

  let myPeople = [
    {
      name: "Brady",
      age: 26,
      isCool: true
    },
    {
      name: "Scott",
      age: 25,
      isCool: false
    },
    {
      name: "Katie",
      age: 18,
      isCool: true
    },
  ]

  let peopleDisplay = myPeople.map((person, index) => {
    return <Greeting personalInfo={person}/>
})

  return (
    <div className="App">
      <h1>
        these are my people
      </h1>
      {peopleDisplay}
      <br/>
      <Bravo/>
    </div>
  );
}

export default App;
