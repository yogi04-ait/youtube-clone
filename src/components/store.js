import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlilce";


const store = configureStore({
    reducer:{
        app: appSlice,
    },
});

export default store;