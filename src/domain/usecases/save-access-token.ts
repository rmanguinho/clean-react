export interface SaveAccessToken {
  save: (accessToken: string) => Promise<void>
}
