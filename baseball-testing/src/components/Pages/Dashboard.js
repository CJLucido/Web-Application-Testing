import React, {useState} from 'react'
import Display from "../Organisms/Display"

export default function Dashboard (){

    const [numOfStrikes, setNumOfStrikes] = useState(0)
    const [numOfBalls, setNumOfBalls] = useState(0)
    const [numOfHits, setNumOfHits] = useState(0)
    const [numOfRuns, setNumOfRuns] = useState(0)
    const [numOfErrors, setNumOfErrors] = useState(0)

     const handleStrike = () => {
        if(numOfStrikes === 2){
            setNumOfStrikes(0)
        }else{
        setNumOfStrikes(numOfStrikes + 1)
        }
     
    }

    const handleFoul = () => {
        if(numOfStrikes === 2){
            setNumOfStrikes(numOfStrikes)
        }else if (numOfStrikes <= 1) {
            setNumOfStrikes(numOfStrikes + 1)
        }
    }

    const handleBall = () => {
        if(numOfBalls === 3){
            setNumOfBalls(0)
        }else {
            setNumOfBalls(numOfBalls + 1)
        }
    }

    const handleHit = () => {
        setNumOfBalls(0) 
        setNumOfStrikes(0)
        setNumOfHits(numOfHits + 1)
        if(numOfHits === 2){
            setNumOfRuns(numOfRuns + 1)
            setNumOfHits(0)
            setNumOfErrors(0)
        } else {
            return
        }
    }

    const handleError =() => {
        handleHit();
        setNumOfErrors(numOfErrors + 1)
      if(numOfErrors === 2){ setNumOfErrors(0)}
      

    }

    const handleRunChange = () => {
        if(numOfRuns == numOfRuns + 1){
            setNumOfErrors(0)
        }
    }

    handleRunChange()

    return (
        <div>
            <Display numOfStrikes={numOfStrikes} numOfBalls={numOfBalls} numOfRuns={numOfRuns} numOfErrors={numOfErrors} numOfHits={numOfHits}/>
            <button name='strikeBtn' onClick={()=>handleStrike()} data-testid="strikeBtn">Strike</button>
            <button name='ballBtn' onClick={()=>handleBall()} data-testid="ballBtn">Ball</button>
            <button name='foulBtn' onClick={() => handleFoul()} data-testid="foulBtn">Foul</button>
            <button name='hitBtn' onClick={()=>handleHit()} data-testid="hitBtn">Hit</button>
            <button name='errorBtn' onClick={()=>handleError()} data-testid="errorBtn">Error</button>
        
        </div>

    )
}