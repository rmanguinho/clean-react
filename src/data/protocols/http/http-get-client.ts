import { HttpResponse } from '.'

export type HttpGetParams = {
  url: string
}

export interface HttpGetClient<R = any> {
  get: (params: HttpGetParams) => Promise<HttpResponse<R>>
}
