export interface SetStorage {
  set: (key: string, value: any) => Promise<void>
}
