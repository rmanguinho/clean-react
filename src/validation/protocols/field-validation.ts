export interface FieldValidation {
  field: string
  validate: (input: object) => Error
}
