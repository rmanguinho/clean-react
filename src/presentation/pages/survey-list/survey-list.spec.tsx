import { SurveyList } from '@/presentation/pages'
import { render, screen } from '@testing-library/react'
import React from 'react'

const makeSut = (): void => {
  render(<SurveyList />)
}

describe('SurveyList Component', () => {
  test('Should present 4 empty items on start', () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-list')
    expect(surveyList.querySelectorAll('li:empty').length).toBe(4)
  })
})
