import Styles from './list-styles.scss'
import { SurveyItem, SurveyItemEmpty, SurveyContext } from '@/presentation/pages/survey-list/components'
import { SurveyModel } from '@/domain/models'
import React, { useContext } from 'react'

const List: React.FC = () => {
  const { state } = useContext(SurveyContext)
  return (
    <ul className={Styles.listWrap} data-testid="survey-list">
      {state.surveys.length
        ? state.surveys.map((survey: SurveyModel) => <SurveyItem key={survey.id} survey={survey} />)
        : <SurveyItemEmpty />
      }
    </ul>
  )
}

export default List
