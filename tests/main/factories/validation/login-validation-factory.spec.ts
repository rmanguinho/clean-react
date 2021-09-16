import { makeLoginValidation } from '@/main/factories/validation'
import { ValidationComposite } from '@/main/composites'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5)
    ]))
  })
})
