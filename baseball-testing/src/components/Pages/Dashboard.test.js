import React from 'react';
import {render, getByTestId} from "@testing-library/react"
import App from "../../App"


it('renders 4 buttons', () => {
    const {getByTestId} = render(<App />)
    getByTestId("strikeBtn")
    getByTestId("ballBtn")
    getByTestId("foulBtn")
    getByTestId("hitBtn")
})