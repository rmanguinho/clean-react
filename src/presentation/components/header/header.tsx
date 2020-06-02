import Styles from './header-styles.scss'
import { Logo } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { useHistory } from 'react-router-dom'
import React, { memo, useContext } from 'react'

const Header: React.FC = () => {
  const history = useHistory()
  const { setCurrentAccount, getCurrentAccount } = useContext(ApiContext)
  const logout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentAccount(undefined)
    history.replace('/login')
  }
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={logout}>Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
