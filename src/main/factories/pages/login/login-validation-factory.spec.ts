import { makeLoginValidation } from './login-validation-factory'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
