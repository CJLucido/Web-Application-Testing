import React from 'react';
import {render} from "@testing-library/react"
import App from "../../App"



it('checks for ball display', () => {
    const {getByTestId} = render(<App />)

    getByTestId( "ball-display")
    

})
it('checks for strike display', () => {
    const {getByTestId} = render(<App />)
    getByTestId('strike-display')
})
it('checks for at-Bat header', ()=> {
    const {getByTestId, getByText} = render(<App />)
    getByTestId('atBatTitle') && getByText("At Bat")
})
it('checks for hits display',()=>{
    const {getByTestId} = render(<App/>)
    getByTestId('hits-display')
})
it('checks for errors display',()=>{
    const {getByTestId} = render(<App/>)
    getByTestId('errors-display')
})