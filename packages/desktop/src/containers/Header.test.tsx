import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import { withDependencies } from 'elpers'

import { Header } from './Header'

afterEach(cleanup)

test('Should not include a protocol when pressing something different from Enter', () => {
  const dependencies = withDependencies()

  const { getByTestId } = render(dependencies(<Header />))

  const input = getByTestId('header-url')

  fireEvent.change(input, {
    target: {
      value: 'viewporty.com'
    }
  })

  fireEvent.keyPress(input, { key: 'Esc', code: 27, charCode: 27 })

  const url = input.value

  expect(url).toMatch('viewporty.com')
})

test('Should fill an URL and includes a protocol when pressing Enter', () => {
  const dependencies = withDependencies()

  const { getByTestId } = render(dependencies(<Header />))

  const input = getByTestId('header-url')

  fireEvent.change(input, {
    target: {
      value: 'viewporty.com'
    }
  })

  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

  const url = input.value

  expect(url).toMatch('http://viewporty.com')
})

test('Should interact with navigation controls', () => {
  const dependencies = withDependencies()

  const { getByTestId } = render(dependencies(<Header />))
})
