import React, {useState} from 'react'
import Display from "../Organisms/Display"

export default function Dashboard (){

    const [numOfStrikes, setNumOfStrikes] = useState(0)
    const [numOfBalls, setNumOfBalls] = useState(0)

     const handleStrike = () => {
        if(numOfStrikes === 3){
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
        if(numOfBalls === 4){
            setNumOfBalls(0)
        }else {
            setNumOfBalls(numOfBalls + 1)
        }
    }

    const handleHit = () => {
        setNumOfBalls(0) 
        setNumOfStrikes(0)
    }

    console.log("this is number of strikes", numOfStrikes)
    console.log("this is number of balls", numOfBalls)
    return (
        <div>
            <Display numOfStrikes={numOfStrikes} numOfBalls={numOfBalls}/>
            <button name='strikeBtn' onClick={()=>handleStrike()} data-testid="strikeBtn">Strike</button>
            <button name='ballBtn' onClick={()=>handleBall()} data-testid="ballBtn">Ball</button>
            <button name='foulBtn' onClick={() => handleFoul()} data-testid="foulBtn">Foul</button>
            <button name='hitBtn' onClick={()=>handleHit()} data-testid="hitBtn">Hit</button>
        
        
        </div>

    )
}