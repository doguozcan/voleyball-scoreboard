import { useSelector, useDispatch } from 'react-redux'
import {
  incrementBSetScore,
  decrementBSetScore,
  incrementBMatchScore,
} from './counterSlice'
import { bSetScore, bMatchScore } from './counterSlice'

const CounterB = () => {
  const setB = useSelector(bSetScore)
  const matchB = useSelector(bMatchScore)

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrementBSetScore())}>Decrement</button>

      <div>{setB}</div>
      <div>{matchB}</div>

      <button onClick={() => dispatch(incrementBSetScore())}>Increment</button>
    </div>
  )
}
export default CounterB
