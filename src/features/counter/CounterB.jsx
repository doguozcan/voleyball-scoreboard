import { useSelector, useDispatch } from 'react-redux'
import {
  incrementBSetScore,
  decrementBSetScore,
  incrementBMatchScore,
} from './counterSlice'
import { bSetScore, bMatchScore } from './counterSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CounterB = () => {
  const setB = useSelector(bSetScore)
  const matchB = useSelector(bMatchScore)

  const dispatch = useDispatch()

  return (
    <div className="div bg-[#76ABAE] h-1/3 w-1/3 text-[#EEEEEE] border-2 rounded-md border-[#31363F] font-lato">
      <div className="w-full h-1/6 text-3xl border rounded-md flex justify-center items-center">
        {matchB}
      </div>
      <div className="w-full h-5/6 text-9xl flex justify-center items-center">
        {setB}
      </div>
      <div className="flex justify-center space-x-3 p-3">
        <button
          className="text-3xl"
          onClick={() => dispatch(decrementBSetScore())}
        >
          <FaMinus />
        </button>
        <button
          className="text-3xl"
          onClick={() => dispatch(incrementBSetScore())}
        >
          <FaPlus />
        </button>
      </div>
      <p className="text-center text-3xl">AWAY</p>
    </div>
  )
}
export default CounterB
