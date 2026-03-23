import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
};

export const CounterSlice = createSlice({
    name: "CounterApp",
    initialState,
    reducers: {
        // present all function within this

        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})
// all func implementation   take from this slice use-----> actions ....store in --> actionsCreator
export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;