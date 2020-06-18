import { createContext } from 'react'

type Props = {
  onAnswer: (answer: string) => void
}

export default createContext<Props>(null)
