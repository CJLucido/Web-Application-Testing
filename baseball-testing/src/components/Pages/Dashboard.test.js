import React from 'react';
import {render, getByTestId} from "@testing-library/react"
import App from "../../App"
import Dashboard from "./Dashboard"


it('renders 4 buttons', () => {
    const {getByTestId} = render(<App />)

    getByTestId( "strikeBtn")
    getByTestId("ballBtn")
    getByTestId("foulBtn")
    getByTestId( "hitBtn")
})

it('increases non-visible strikes by 1', () => {
    expect(handleStrike(numOfStrikes)).toBe(numOfStrikes +1)
})