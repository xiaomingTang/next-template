import { useCallback, useState } from 'react'

export default function useForceUpdate() {
  const [value, setRand] = useState(Math.random())

  const forceUpdate = useCallback(() => {
    setRand(Math.random())
  }, [])

  return [forceUpdate, value] as const
}
