import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var [password, setPassword] = useState("");
  var [Charectors, setCharectors] = useState(false);
  var [numbers, setNumbers] = useState(false);
  var [range, setRange] = useState(5);
  const inputRef = useRef(null);
  // let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newstr = "";
  useEffect(()=>{
    if(numbers){
      str += "0123456789";
    }
    if(Charectors){
      str += "!@#$%^&*()_+-={}[]|\:;<>',.?/~";
    }
    let len = str.length;
    for(let i=0;i<range;i++){
      let n = Math.floor(Math.random()*len);
      newstr += str[n];
    }
    console.log(range);
    setPassword(newstr);
  },[range, Charectors,numbers])
  
  // setPassword(newstr);
  
  function handleCharCheckbox (){
    setCharectors(Charectors = !Charectors);
  }

  function handleNumberCheckbox(){
    setNumbers(numbers = !numbers);
  }
  
  function handleRange(event){
    setRange(event.target.value);
    // console.log(event.target.value);
  }

  function handleButton(){
      console.log(inputRef.current.value)
  }
  
  return (
    <>

      <div>
        <h2>Password Generator</h2>
        <input type="text" value={password} />
        <button onClick={handleButton}>Copy</button>
        <br/>
        <input ref = {inputRef} onChange={handleRange} type="range"/>
        <label>{range}</label>
        <br/>
        <label>Include Charectors</label>
        <input onChange={handleCharCheckbox} type="checkbox" />
        <br />
        <label>Include Numbers</label>
        <input onChange={handleNumberCheckbox} type="checkbox" />
        <br />
      </div>
    </>
  );
}
