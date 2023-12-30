import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // No Movie data found !!
    if (!movies) return;

    const movie = movies[0];
    //console.log(movie);
    const { id, original_title, overview } = movie;

    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground id = {id}/>
        </div>
    )
}

export default MainContainer