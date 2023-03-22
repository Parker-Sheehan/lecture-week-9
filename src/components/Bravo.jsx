import React, {useState} from "react";

const Bravo = () =>{
    const [name,setName] = useState('Parker')
    const handleClick = () => {
        console.log("Click")
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const submitHandler = (evt) => {
        console.log(evt.target.value)
    }

    return (
        <div>
            <h2>Bravo</h2>
            <h2>Name: {name}</h2>
            <input type="text" placeholder="What's your name?" onChange={handleChange}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Bravo