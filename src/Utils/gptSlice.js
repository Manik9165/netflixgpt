import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToggle: false
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptSearchToggle = !state.gptSearchToggle
        }
    }
});

// Exporting reducer methods
export const { toggleGptSearch } = gptSlice.actions;

// Exporting whole userSlice Reducer to be configured in store.
export default gptSlice.reducer;
