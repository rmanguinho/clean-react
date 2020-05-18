import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AddAccount, AddAccountParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return null
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
