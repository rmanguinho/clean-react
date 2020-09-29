import { LoadSurveyList } from '@/domain/usecases'

import { atom } from 'recoil'

export const surveyListState = atom({
  key: 'surveyListState',
  default: {
    surveys: [] as LoadSurveyList.Model[],
    error: '',
    reload: false
  }
})
