import {render, screen} from '@testing-library/react';
import Footer from "../components/Footer";
import React from 'react'
import '@testing-library/jest-dom'

/**
 * @jest-environment jsdom
 */
describe('Footer funciona', () => {
    test('Contiene aviso de privacidad', () => {
        const { getByText } = render(<Footer />)
        expect(getByText(/Aviso de privacidad/i)).toBeInTheDocument()
    })
})

