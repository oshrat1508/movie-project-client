import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import { Circles } from 'react-loader-spinner'



export default function Movie() {
  const [movies, setMovies] = useState(null);
 const[search , setSearch] = useState('')

  const get_all_movies = async () => {
    const { data } = await axios.get("https://oshratproject.onrender.com/chillTime/movie");
    setMovies(data);
  };
  get_all_movies();
  return <div className="w-[90%] m-auto flex flex-col justify-center  items-center ">
    <h1 className="text-4xl mb-9">Movies</h1>
    {movies ? <>
    <div className="text-center text-white w-[50%] md:w-[35%] flex items-center mb-10 ">
      <input onChange={(e)=> setSearch(e.target.value)} className="md:w-5/6 p-2 outline-none text-black" type="text" placeholder="search"/></div>
    
    <div className="flex flex-wrap justify-around ">
    
    {movies.filter((movie)=>{
      if(search==''){
        return movie
      }else if(movie.title.toLowerCase().includes(search.toLowerCase())){
        return movie
      }
    }).map((movie,i)=>(
    <Link key={i} to={`/movieInfo/${movie.id}
`}><div className=" hover:scale-110 md:mx-1 mb-1">
        <img className="rounded-t-xl md:w-72 w-36 mb-2 md:mb-4 hover:duration-200" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        <div className="md:relative  md:h-10 md:w-72 w-36 md:bottom-14 text-white md:bg-black md:bg-opacity-70 md:p-2">{movie.title}</div>
    </div></Link>
  ))}</div> </>:
  <Circles
  height="500"
  width="80"
  color="white"
  radius="9"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> }
  </div>;
}
