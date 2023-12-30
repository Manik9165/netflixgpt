import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addMovieTrailer } from "../Utils/moviesSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    // Create a custom hook to fetch the details from movie id.
    const getNowPlayingMovieById = async (id) => {
      const getMovieById = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
      const movieJson = await getMovieById.json();
  
      //console.log(movieJson.results);
      const movieTrailerData = movieJson.results.filter((data) => {
        return data.type === "Trailer"
      });
  
      const trailer = movieTrailerData.length ? movieTrailerData[0] : movieJson[0];
      dispatch(addMovieTrailer(trailer));
    }
  
    useEffect(() => {
      getNowPlayingMovieById(id)
    }, [])
}

export default useMovieTrailer;