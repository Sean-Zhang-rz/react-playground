import { FC, useState } from "react"
import { add } from "../../utils"

export const Test: FC = () => {
  const [count, setCount] = useState({
    count: [0, '是'],
    // pre: '是',
  })
  const click = () => {
    setCount(pre => {
      return {
        count: [1, 2, 3]
      }
    })
  }

  return (
    <div>
      {count.count[0]}
      {count.count[1]}
      <button onClick={click}>点击</button>
    </div>

  )
}