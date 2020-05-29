import { AccountModel } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  setCurrentAccount?: (account: AccountModel) => void
  getCurrentAccount?: () => AccountModel
}

export default createContext<Props>(null)
