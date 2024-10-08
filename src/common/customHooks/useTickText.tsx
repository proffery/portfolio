import { useEffect, useState } from 'react'

export const useTickText = (textArr: string[]) => {
  const [loopNumber, setLoopNumber] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)

  const period = 2000

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    const i = loopNumber % textArr.length
    const fullText = textArr[i]
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNumber(loopNumber + 1)
      setDelta(500)
    }
  }

  return text
}
