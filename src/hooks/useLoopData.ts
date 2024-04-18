import { useEffect, useState } from 'react'

const useLoopData = <T>(d: T[], perPage: number, everyS = 1, isPaused = false) => {
  const [item, setItem] = useState(0),
    [data, setData] = useState([] as T[])

  useEffect(() => {
    if (isPaused) return
    const intervalId = setInterval(() => {
      setItem((prev) => (prev >= d.length ? 0 : prev + 1))
    }, everyS * 1000)
    return () => clearInterval(intervalId)
  }, [everyS, d.length, isPaused])

  useEffect(() => {
    const arr = [...d]
    while (arr.length - item < perPage) arr.push(...d)
    const newD = arr.slice(item, perPage + item)
    setData(newD)
  }, [item, d, perPage])

  return data
}

export default useLoopData
