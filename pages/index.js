import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var [password, setPassword] = useState("");
  var [Charectors, setCharectors] = useState(false);
  var [numbers, setNumbers] = useState(false);
  var [range, setRange] = useState(5);
  // let pass = "";
  let strs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  useEffect(()=>{
    let str = strs
    if(Charectors){
      str += "!@#$%^&*()_+-={}[]|\:;<>',.?/~";
    }
    else if(numbers){
      str += "0123456789";
    }

    console.log(range);
    setPassword(str);
  },[password, range, Charectors,numbers])

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
  
  return (
    <>

      <div>
        <h2>Password Generator</h2>
        <input type="text" value={password} />
        <button>Copy</button>
        <br/>
        <input onChange={handleRange} type="range"/>
        <br />
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
