
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
      <ul style={{ listStyleType: 'disc'}}>
        <li onClick={shirt} className="male">Male</li>
        <li onClick={dress}>Female</li>
      </ul>
      <h3>Select your {uniform} size</h3>
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
