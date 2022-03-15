import React, { useEffect, useState } from 'react'
import {Api_Key,ImageUrl} from '../../../Constants/Constants'
import './Banner.css'
import axios from '../../../axios'



function Banner() {
  const [movie, setMovie] = useState()
  
  useEffect(()=>{
    

    axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>{
      
      setMovie(response.data.results[0])
    })
  },[])

  return (
    <div style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path: ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :null}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='decription'>{movie ? movie.overview : null}</h1>
        </div>
      <div className="fade"></div>

      
    </div>
  )
}

export default Banner
