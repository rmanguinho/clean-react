export class RequiredFieldError extends Error {
  constructor () {
    super('Campo obrigatório')
    this.name = 'RequiredFieldError'
  }
}
