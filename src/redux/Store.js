import CounterSlice from "../redux/slices/CounterSlice";


// create Reducer Store --> create Empty  global store  ---> then add diff Slice 

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({

    reducer: {
        // diff slice present here 
        CounterApp: CounterSlice
    },
});