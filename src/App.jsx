import { useState } from 'react'
import Accordion from './Accordion/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordion />
    </>
  )
}

export default App
