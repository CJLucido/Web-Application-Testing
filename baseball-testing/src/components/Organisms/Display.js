import React from 'react'

export default function Display ({numOfHits, numOfStrikes, numOfBalls, numOfRuns, numOfErrors}){

    return (
        <div>
            <h1 data-testid='atBatTitle'>At Bat</h1>
            <div>
                <p data-testid="ball-display">Balls: {numOfBalls}</p>
            </div>
           
            <div>
                 <p data-testid="strike-display">Strikes: {numOfStrikes}</p>
            </div>

            <div>
                <p data-testid="runs-display">Runs: {numOfRuns}</p>
            </div>

            <div>
                <p data-testid="hits-display">Hits: {numOfHits}</p>
            </div>

            <div>
                <p data-testid="errors-display">Errors: {numOfErrors}</p>
            </div>
        
        
        </div>

    )
}