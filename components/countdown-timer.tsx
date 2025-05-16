"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 30,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }

        if (prevTime.seconds === 0) {
          return {
            minutes: prevTime.minutes - 1,
            seconds: 59,
          }
        }

        return {
          minutes: prevTime.minutes,
          seconds: prevTime.seconds - 1,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = `${timeLeft.minutes.toString().padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`

  return (
    <div className="bg-red-600 text-white p-3 flex items-center justify-center">
      <span className="mr-2 text-xl">🕐</span>
      <span className="font-bold text-xl">{formattedTime}</span>
    </div>
  )
}
