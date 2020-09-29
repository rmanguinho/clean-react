import { AxiosHttpClient } from '@/infra/http'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
