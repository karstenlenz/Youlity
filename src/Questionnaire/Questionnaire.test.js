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
  const result = wrapper.countYes(testAnswers)
  expect(result).toEqual(8)
})
