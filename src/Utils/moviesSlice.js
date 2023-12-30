import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }
    }
});

// Exporting reducer methods
export const { addNowPlayingMovies, addMovieTrailer } = moviesSlice.actions;

// Exporting whole userSlice Reducer to be configured in store.
export default moviesSlice.reducer;
