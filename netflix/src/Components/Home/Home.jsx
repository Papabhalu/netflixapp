import React, { useEffect, useState } from 'react'
import "./Home.scss";
import Row from "../Row"
import axios from 'axios';
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai";

const imgUrl = "https://image.tmdb.org/t/p/original"
const apiKey = "b7dfe691d552fa8480d59f26e55c117c"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const popular = "popular"
const nowPlaying = "now_playing"
const topRated = "top_rated"

const Home = () => {
  
  const [upcomingMovie,setUpcomingMovie] = useState([]);
  const [popularMovie,setpopularMovie] = useState([]);
  const [topRatedMovie,settopRatedMovie] = useState([]);
  const [nowPlayingMovie,setnowPlayingMovie] = useState([]);
  useEffect(() => {

    const fetchUpcoming = async()=>{
      const {data : {results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      console.log(results)
      setUpcomingMovie(results)
    }
    const fetchpopular = async()=>{
      const {data : {results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      console.log(results)
      setpopularMovie(results)
    }
    const fetchnowPlaying = async()=>{
      const {data : {results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&page=3`)
      console.log(results)
      setnowPlayingMovie(results)
    }
    const fetchtopRated = async()=>{
      const {data : {results}}= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      console.log(results)
      settopRatedMovie(results)
    }
    fetchUpcoming();
    fetchpopular();
    fetchtopRated();
    fetchnowPlaying();
  }, [])
  
  
  return (
    <section className='home'>
      <div className="banner"  
      style={{backgroundImage: popularMovie[2] ? `url(${`${imgUrl}/${popularMovie[2].poster_path}`})`: "rgb(3,3,3)"}}
      >
        {/* <img src={`${imgUrl}/${popularMovie[0].poster_path}`} alt="" /> */}
        {/* <img src="https://wallpapercave.com/wp/wp8872767.jpg" alt="" />  */}
      {
        popularMovie[2] &&
        (
          <h1>{popularMovie[2].original_title}</h1>
        )
      }
      
      {
        popularMovie[2] &&
        (
          <p>{popularMovie[2].overview}</p>
        )
      }
      <div className="btn">
      <button><BiPlay/> &nbsp;Play </button>
      <button>My List &nbsp; <AiOutlinePlus/></button>
      </div>
      </div>

      <Row title={"Upcoming Movies On Netflix"} arr={upcomingMovie}/>
      <Row title={"Now Playing"} arr={nowPlayingMovie}/>
      <Row title={"Top Rated"} arr={topRatedMovie} />
      <Row title={"Popular On Netflix"} arr={popularMovie} />
      {/* <Row title={"Popular Movies"}/> */}

    </section>

  )
}
export default Home