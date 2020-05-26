import { RemoteLoadSurveyList } from './remote-load-survey-list'
import { HttpGetClientSpy } from '@/data/test'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
