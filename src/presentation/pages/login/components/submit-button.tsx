import { loginState } from './atoms'
import { SubmitButtonBase } from '@/presentation/components'
import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(loginState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
