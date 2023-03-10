import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import { Circles } from 'react-loader-spinner'


export default function Tv() {
    const [Tv, setTv] = useState(null);
    const [search, setSearch] = useState('');
  const get_all_Tv = async () => {
    const { data } = await axios.get("https://oshratproject.onrender.com/chillTime/tv");
    setTv(data);
  };
  get_all_Tv();
  return <div className="w-[85%] m-auto flex flex-col justify-center items-center ">
        <h1 className="text-4xl mb-9">Tv shows</h1>

  {Tv ? <>
  <div className="text-center text-white w-[50%] md:w-[35%] flex items-center mb-10 ">
    <input onChange={(e)=>setSearch(e.target.value)} className="md:w-5/6 p-2 outline-none text-black" type="text" placeholder="vjhbknm"/></div>
  
  <div className="flex flex-wrap justify-around ">
  
  {Tv.filter((tv)=>{
    if(search== ''){
      return tv
    }else if (tv.name.toLowerCase().includes(search.toLowerCase())) {
      return tv
    }
  }).map((tv,i)=>(
  <Link key={i} to={`/tvInfo/${tv.id}`}><div className="hover:scale-110 md:mx-1 mb-1">
      <img className="rounded-t-xl md:w-72 w-36 mb-2 md:mb-4 hover:duration-200" src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`} alt="" />
      <div className="md:relative  md:h-10 md:w-72 w-36 md:bottom-14 text-white md:bg-black md:bg-opacity-70 md:p-2">{tv.name}</div>
  </div></Link>
))}</div></>:
<Circles
  height="500"
  width="80"
  color="white"
  radius="9"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
} </div>;
}

