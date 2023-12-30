import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

// Custom hook to fetch now playing movies from TMDB and update in redux store.
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    async function getNowPlayingMovies(){
      const getMovies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      const movieJson = await getMovies.json();
  
      dispatch(addNowPlayingMovies(movieJson.results))
    }
  
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;