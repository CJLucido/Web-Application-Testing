import React from 'react'

export default function Display ({numOfStrikes, numOfBalls}){

    return (
        <div>
            <h1 data-testid='atBatTitle'>At Bat</h1>
            <div>
                <p data-testid="ball-display">Balls: {numOfBalls}</p>
            </div>
           
            <div>
                 <p data-testid="strike-display">Strikes: {numOfStrikes}</p>
            </div>
        
        
        </div>

    )
}