import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/action/counterSlicer'


function Counter() {
    const {count} = useSelector(state=> state.counter)
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div className='flex gap-x-2 items-center'>
      <button onClick={()=>dispatch(decrement())} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-</button>
        <p className='text-2xl'>{count}</p>
      <button onClick={()=> dispatch(increment())} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+</button>
    </div>
  )
}

export default Counter