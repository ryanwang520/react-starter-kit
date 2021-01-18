import { useState } from 'react'
import Layout from '../Layout'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <div
        style={{
          padding: '10px',
        }}
      >
        <button onClick={() => setCount(count + 3)}>+</button>
        home world bilibili {count}
      </div>
    </Layout>
  )
}
