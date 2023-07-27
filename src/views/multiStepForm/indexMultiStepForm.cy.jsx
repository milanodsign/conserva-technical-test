import React from 'react'
import MultiStepForm from './index'

describe('<MultiStepForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MultiStepForm />)
  })
})