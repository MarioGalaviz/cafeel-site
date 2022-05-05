import {render, screen} from '@testing-library/react';
import Nav from "../components/Nav";
import React from 'react'
import '@testing-library/jest-dom'

/**
 * @jest-environment jsdom
 */
describe('Nav funciona', () => {
    test('Contiene nombre', () => {
        const { getByText } = render(<Nav />)
        expect(getByText(/Cafeel/i)).toBeInTheDocument()
    })
})

