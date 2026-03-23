import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


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
            <button onClick={() => dispatch(increment)}>Increment</button>

            <br /><br />
            <div>{count}</div>
            <br /><br /><br />
            <button>Decrement</button>

            <br /><br />
            <div>{count}</div>


        </div>
    )
}

export default Counter