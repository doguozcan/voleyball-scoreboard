import { useSelector, useDispatch } from 'react-redux'
import {
  incrementASetScore,
  decrementASetScore,
  incrementAMatchScore,
} from './counterSlice'
import { aSetScore, aMatchScore } from './counterSlice'

const CounterA = () => {
  const setA = useSelector(aSetScore)
  const matchA = useSelector(aMatchScore)

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrementASetScore())}>Decrement</button>

      <div>{setA}</div>
      <div>{matchA}</div>

      <button onClick={() => dispatch(incrementASetScore())}>Increment</button>
    </div>
  )
}
export default CounterA
