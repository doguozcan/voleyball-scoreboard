import CounterA from './features/counter/CounterA'
import CounterB from './features/counter/CounterB'

export default function App() {
  return (
    <div className="flex h-screen bg-[#222831] justify-center items-center">
      <CounterA />
      <CounterB />
    </div>
  )
}
