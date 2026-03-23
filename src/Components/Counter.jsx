import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/CounterSlice'


function Counter() {
    // Access the data from the any slice  use --------->useSlector hooks
    const count = useSelector((state) => state.CounterApp.value);
    // calling   diff function  from  rect app  to Slice use---------->
    // ------------> useDispatch hoocks  

    const dispatch = useDispatch();
    return (

        <div>
            <h1>
                Counter App
            </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br /><br />
            <div>{count}</div>
            <br /><br /><br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <br /><br />
            <button onClick={() => dispatch(reset())}>Reset</button>



        </div>
    )
}

export default Counter