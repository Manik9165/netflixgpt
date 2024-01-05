import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";
import gptSlice from "./gptSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        gpt: gptSlice
    }
});

export default appStore;