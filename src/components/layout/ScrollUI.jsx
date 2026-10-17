import { useEffect, useState } from 'react'

export default function ScrollUI() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => setP(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${p})` }} />
      <button className={`totop ${p > 0.1 ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </>
  )
}
