import { useEffect, useState } from 'react'
export default function useCountUp(end, active, ms = 1800) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf, t0
    const step = t => { t0 ??= t; const p = Math.min((t - t0) / ms, 1); setV(end * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step) }
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf)
  }, [end, active, ms])
  return v
}
