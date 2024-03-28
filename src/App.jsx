import CounterA from './features/counter/CounterA'
import CounterB from './features/counter/CounterB'
import {
  selectAMatchScore,
  selectBMatchScore,
} from './features/counter/counterSlice'
import { useSelector } from 'react-redux'

export default function App() {
  const aMatchScore = useSelector(selectAMatchScore)
  const bMatchScore = useSelector(selectBMatchScore)

  if (aMatchScore === 3) {
    alert('Home team won!')
  }

  if (bMatchScore === 3) {
    alert('Away team won!')
  }

  return (
    <div className="flex flex-col h-screen bg-[#222831] justify-center items-center">
      <div className="flex h-full w-full justify-center items-center">
        <CounterA />
        <CounterB />
      </div>
    </div>
  )
}
