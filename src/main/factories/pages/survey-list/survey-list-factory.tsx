import { makeRemoteLoadSurveyList } from '@/main/factories/usecases'
import { SurveyList } from '@/presentation/pages'

import React from 'react'

export const makeSurveyList: React.FC = () => {
  return (
    <SurveyList
      loadSurveyList={makeRemoteLoadSurveyList()}
    />
  )
}
