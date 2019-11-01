import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <div padding="10px">
      <button onClick={() => setCount(count + 1)}>+</button>
      home better {count}
    </div>
  )
}
