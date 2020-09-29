import { LocalStorageAdapter } from '@/infra/cache'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
