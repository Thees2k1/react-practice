
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { decrement, increment, decrementByValue } from "../state/counter/couterSlice";
import { incrementAsync } from "../state/counter/couterSlice";


const Counter = () => {
  const count = useSelector((state : RootState)=> state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(decrementByValue(10))}>Decrement by 10</button>
        <button onClick={()=>dispatch(incrementAsync(10))}>increment by 10 after 1 second</button>
      </div>
    </div>
  )
}

export default Counter