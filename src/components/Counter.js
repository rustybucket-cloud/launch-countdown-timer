import Countdown from "./Countdown"
import { useState, useEffect } from "react";

const launch = new Date(new Date().getTime() + Math.random() * 31556952000);

function Counter() {
    const [ day, setDay ] = useState(null)
    const [ hours, setHours ] = useState(null)
    const [ minutes, setMinutes ] = useState(null)
    const [ seconds, setSeconds ] = useState(null)

    useEffect( () => {
        setInterval( () => {
            const now = new Date(); //right now

            const diffTime = Math.abs(launch - now) //difference in milliseconds between launch and now
            const diffSeconds = Math.ceil(diffTime / 1000); //difference in seconds
            const diffMinutes = Math.floor(diffSeconds / 60); //difference in minutes
            const diffHours = Math.floor(diffTime / (1000 * 60 * 60)) //difference in hours
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
            setDay(diffDays); //difference in days
            setHours(diffHours % diffDays); //number of hours remaining
            setMinutes(diffMinutes % diffHours); //number of minutes remaining
            setSeconds(diffSeconds % diffMinutes);
        }, 1000)
        
    }, [])

    return (
        <div className="timer">
            <h2>WE'RE LAUNCHING SOON</h2>
            <div className="counters">
                <Countdown heading="days" output={day}/>
                <Countdown heading="hours" output={hours}/>
                <Countdown heading="minutes" output={minutes}/>
                <Countdown heading="seconds" output={seconds}/>  
            </div>
        </div>
    )
}

export default Counter;