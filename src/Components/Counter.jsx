import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/CounterSlice'

function Counter() {
    const count = useSelector((state) => state.CounterApp.value);
    const dispatch = useDispatch();

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700'>

            <div className='w-[350px] p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 text-center'>

                <h1 className='text-3xl font-bold text-white tracking-wide mb-8'>
                    Counter App
                </h1>

                {/* Counter Display */}
                <div className='text-6xl font-extrabold text-white mb-10'>
                    {count}
                </div>

                {/* Buttons */}
                <div className='flex justify-center items-center gap-4'>
                    <button
                        className='px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-semibold transition duration-200 active:scale-95'
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>

                    <button
                        className='px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-semibold transition duration-200 active:scale-95'
                        onClick={() => dispatch(decrement())}
                    >
                        −
                    </button>
                </div>

                {/* Reset Button */}
                <button
                    className='mt-8 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition duration-200 active:scale-95'
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>

            </div>
        </div>
    )
}

export default Counter