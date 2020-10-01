import { useEffect, useState } from 'react'

export default function useModal() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = 'hidden'
    }
    return () => (document.body.style.overflow = 'unset')
  }, [isOverlayVisible])

  function toggleOverlay(event) {
    event.stopPropagation()
    setIsOverlayVisible(!isOverlayVisible)
  }

  return { isOverlayVisible, toggleOverlay }
}
