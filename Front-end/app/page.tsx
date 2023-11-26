"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import Header from './components/header';



function Home() {


  const [counter, setCounter]=useState(0);

  const handleClick = () => {
    setCounter(counter +1);
  }


  return (
    <main>
     <h1>Hello World</h1>
     <Header/>
     <Link href="/about">Go To About</Link>
     <br />
     <a href="/about">duud</a>
     <div> Counter : {counter}</div>
     <button onClick={handleClick}>incerment</button>
    </main>
  );
}

export default Home;