import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    if (/googlebot/i.test(window.navigator.userAgent)) return

    window.location.replace('https://dryfruisale.vercel.app/')
  }, [])

  return null
}
