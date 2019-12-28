import React, { useState } from 'react'
import Layout from '../Layout'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <div
        style={{
          padding: '10px',
        }}
      >
        <button onClick={() => setCount(count + 1)}>+</button>
        home world {count}
      </div>
    </Layout>
  )
}
