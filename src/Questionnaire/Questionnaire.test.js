import { render } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import React from 'react'
import Questionnaire from './Questionnaire'

it('renders correctly', () => {
  const tree = render(<Questionnaire />)
  expect(tree).toMatchSnapshot()
})

// test('renders correctly', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('counts all the yesses', () => {
  const wrapper = mount(<Questionnaire />)
  const testAnswers = ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes']
  const result = wrapper.instance().countYes(testAnswers)
  expect(result).toEqual(8)
})

it('doesnt count all the noes', () => {
  const wrapper = mount(<Questionnaire />)
  const testAnswers = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
  const result = wrapper.instance().countYes(testAnswers)
  expect(result).toEqual(0)
})

it('only counts the yesses', () => {
  const wrapper = mount(<Questionnaire />)
  const testAnswers = ['no', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no']
  const result = wrapper.instance().countYes(testAnswers)
  expect(result).toEqual(3)
})
