import Styles from './answer-styles.scss'
import React from 'react'

type Props = {
  answer: {
    image?: string
    answer: string
    count: number
    percent: number
    isCurrentAccountAnswer: boolean
  }
}

const Answer: React.FC<Props> = ({ answer }: Props) => {
  const activeClassName = answer.isCurrentAccountAnswer ? Styles.active : ''
  return (
    <li data-testid="answer-wrap" className={[Styles.answerWrap, activeClassName].join(' ')}>
      {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
      <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
      <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
    </li>
  )
}

export default Answer
