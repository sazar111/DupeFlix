import React,{useState,useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube"
import Link from './youtube-link.js'

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({ title,first ,fetchUrl,isLargeRow}) {
    const [movies ,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl]=useState("");

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts ={
        height:"490",
        width:"100%",
        playerVars:{autoplay:1,controls:0},
        
    };

 

    const handleOrginal=(movie)=>{
        if(trailerUrl === Link[movie.id]){
            setTrailerUrl("");
        }else{
            setTrailerUrl(Link[movie.id])
        }
    }
    
    const createRow= movie => {
        return(
            
                <img 
                    key={movie.id}
                    onClick={() => isLargeRow && handleOrginal(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movies.name} />
               );
    }

    return(
        <div className={` row ${first && "row_first"} `} >
            <h2>{title}</h2>
            <div className="row_posters ">
                {movies.map((movie)=> 
                (createRow(movie))
                
                )}
            </div>
            {trailerUrl &&  <YouTube class="trailer" style="display:none;" controls='0' rel='0'  videoId={trailerUrl} opts={opts}/>}
            

        </div>
    );
}

export default Row;