export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post (params: HttpPostParams): Promise<void>
}
