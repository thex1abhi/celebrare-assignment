import { configureStore, createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: JSON.parse(localStorage.getItem("favourites")) || [],
    reducers: {
        toggleFavourite: (state, action) => {
            const index = state.findIndex((p) => p.id === action.payload.id);
            if (index >= 0) {
                state.splice(index, 1);
            }
            else {
                state.push(action.payload);
            }
        },
    },
});

export const { toggleFavourite } = favouritesSlice.actions;

export const store = configureStore({
    reducer: { favourites: favouritesSlice.reducer },
});


store.subscribe(() => {
    localStorage.setItem("favourites", JSON.stringify(store.getState().favourites));
});