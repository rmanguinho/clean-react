import { signUpState } from './atoms'
import { FormStatusBase } from '@/presentation/components'
import { useRecoilState } from 'recoil'
import React from 'react'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(signUpState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
