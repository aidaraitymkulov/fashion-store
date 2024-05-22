import { useEffect, useState } from "react"

export const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(Prevseconds => Prevseconds + 1)
        }, 1000)

        return () => clearInterval(interval)
    },[]) 

    return (
        <div>
            <h3>Timer</h3>
            <p>{seconds}</p>
        </div>
    )
}