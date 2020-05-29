import { LocalStorageAdapter } from '@/infra/cache'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => {
  return new LocalStorageAdapter()
}
