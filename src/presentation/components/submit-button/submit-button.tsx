import React from 'react'

type Props = {
  text: string
  state: any
}

const SubmitButton: React.FC<Props> = ({ state, text }: Props) => {
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">{text}</button>
  )
}

export default SubmitButton
