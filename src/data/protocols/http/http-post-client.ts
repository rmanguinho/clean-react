export interface HttpPostClient {
  post (url: string): Promise<void>
}
