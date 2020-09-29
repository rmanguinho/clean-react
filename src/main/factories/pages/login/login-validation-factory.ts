import { ValidationComposite, ValidationBuilder as Builder } from '@/validation/validators'

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('email').required().email().build(),
  ...Builder.field('password').required().min(5).build()
])
