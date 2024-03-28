import { useSelector, useDispatch } from 'react-redux'
import { incrementASetScore, decrementASetScore } from './counterSlice'
import { selectASetScore, selectAMatchScore } from './counterSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CounterA = () => {
  const setA = useSelector(selectASetScore)
  const matchA = useSelector(selectAMatchScore)

  const dispatch = useDispatch()

  return (
    <div className="div bg-[#76ABAE] h-1/3 w-1/3 text-[#EEEEEE] border-2 rounded-md border-[#31363F] font-lato">
      <div className="w-full h-1/6 text-3xl border rounded-md flex justify-center items-center">
        {matchA}
      </div>
      <div className="w-full h-5/6 text-9xl flex justify-center items-center">
        {setA}
      </div>
      <div className="flex justify-center space-x-3 p-3">
        <button
          className="text-3xl"
          onClick={() => dispatch(decrementASetScore())}
        >
          <FaMinus />
        </button>
        <button
          className="text-3xl"
          onClick={() => dispatch(incrementASetScore())}
        >
          <FaPlus />
        </button>
      </div>
      <p className="text-center text-3xl">HOME</p>
    </div>
  )
}
export default CounterA
