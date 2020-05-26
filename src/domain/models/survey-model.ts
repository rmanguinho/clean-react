export type SurveyModel = {
  id: string
  question: string
  answers: [{
    image?: string
    answer: string
  }]
  date: Date
  didAnswer: boolean
}
