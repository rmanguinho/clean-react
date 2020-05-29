import Styles from './spinner-styles.scss'
import React from 'react'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
