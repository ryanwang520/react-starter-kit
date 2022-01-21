import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <button onClick={() => setCount(count + 3)}>+</button>
      home world bilibili {count}
    </div>
  )
}
