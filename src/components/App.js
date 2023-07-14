
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[uniform,setUniform]=useState("");
    let[male,setMale]=useState(false);
    function dress(){
      setUniform("dress");
      setMale(false)
    }
    function shirt(){
      setUniform("shirt");
      setMale(true);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Select your Gender</h1>
        <label onClick={shirt}>
        <input type="radio"></input>
        Male
      </label>
      <label onClick={dress}>
        <input type="radio"></input>
        Female
      </label>
      <h2>Select your {uniform} size</h2>
      {
        male ? (
          <select >
            <option>Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        ):(
          <select>
            <option>Select Size</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
        )
      }
    </div>
  )
}

export default App
