export type HttpGetParams = {
  url: string
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<void>
}
