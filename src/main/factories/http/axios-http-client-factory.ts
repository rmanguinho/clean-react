import { AxiosHttpClient } from '@/infra/http'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
