import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'
import { mockGetRequest, GetStorageSpy } from '@/data/test'

describe('AuthorizeHttpGetClientDecorator', () => {
  test('Should call GetStorage with correct value', () => {
    const getStorageSpy = new GetStorageSpy()
    const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
