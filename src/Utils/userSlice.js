import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
});

// Exporting reducer methods
export const { addUser, removeUser } = userSlice.actions;

// Exporting whole userSlice Reducer to be configured in store.
export default userSlice.reducer;
