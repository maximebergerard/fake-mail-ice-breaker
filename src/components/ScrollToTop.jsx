import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router conserve la position de scroll d'une page à l'autre :
// on remonte en haut à chaque changement d'URL.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
