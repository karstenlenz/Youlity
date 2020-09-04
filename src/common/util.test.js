import { capitalizeFirstLetter } from './util'

describe('The capitalizeFirstLetter function', () => {
  it('capitalizes the first letter', () => {
    const input = 'lorem ipsum'
    const result = capitalizeFirstLetter(input)
    expect(result).toEqual('Lorem ipsum')
  })

  it('keeps the first letter capitalized', () => {
    const input = 'Lorem ipsum'
    const result = capitalizeFirstLetter(input)
    expect(result).toEqual('Lorem ipsum')
  })
})
