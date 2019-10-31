import React, {useState} from 'react'
import Display from "../Organisms/Display"

export default function Dashboard (){

    const [numOfStrikes, setNumOfStrikes] = useState(0)


    const handleStrike = () => {

        setNumOfStrikes(numOfStrikes + 1)
        console.log("this is number of strikes", numOfStrikes)
    }
    console.log("this is number of strikes", numOfStrikes)
    return (
        <div>
            <Display numOfStrikes={numOfStrikes} />
            <button name='strikeBtn' onClick={handleStrike} data-testid="strikeBtn">Strike</button>
            <button name='ballBtn' data-testid="ballBtn">Ball</button>
            <button name='foulBtn' data-testid="foulBtn">Foul</button>
            <button name='hitBtn' data-testid="hitBtn">Hit</button>
        
        
        </div>

    )
}