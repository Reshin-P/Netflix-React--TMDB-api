import axios from 'axios'
import React,{useEffect,useState } from 'react'
import './RowPost.css'
import {Api_Key, ImageUrl} from '../../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props ) {
    const[movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
     
    useEffect(()=>{
        axios.get(props.url).then(response=>{
        
            setMovies(response.data.results)
        }).catch(err=>{
            // alert("Network Error")
        })

    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie=(id)=>{
console.log(id);
axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then((response)=>{
  console.log(id);
  console.log(response);
 if(response.data.results.length!=0){
   setUrlId(response.data.results[0])
}
else{

}
})
      }
  return (
    <div className='row'>
         {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      <h2> {props.title}</h2>
      <div className='posters'>
{movies.map((mov)=>
          <img onClick={()=>handleMovie(mov.id)} className={props.isSmall ? 'smallposter':'poster'} alt='poster' src={`${ImageUrl+mov.backdrop_path}`}></img>

)}
          
      </div>
  
    </div>
  )
}

export default RowPost
