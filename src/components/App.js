
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
            <option value="1">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        ):(
          <select>
            <option value="1">Select Size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        )
      }
    </div>
  )
}

export default App
