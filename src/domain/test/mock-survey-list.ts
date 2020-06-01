import { SurveyModel } from '@/domain/models'
import { LoadSurveyList } from '@/domain/usecases'
import faker from 'faker'

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.random.uuid(),
  question: faker.random.words(10),
  answers: [{
    answer: faker.random.words(4),
    image: faker.internet.url()
  }, {
    answer: faker.random.words(5)
  }],
  didAnswer: faker.random.boolean(),
  date: faker.date.recent()
})

export const mockSurveyListModel = (): SurveyModel[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()

  async loadAll (): Promise<SurveyModel[]> {
    this.callsCount++
    return this.surveys
  }
}
