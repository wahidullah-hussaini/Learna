import { useEffect, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import useReveal from '@/hooks/useReveal'
import useCountUp from '@/hooks/useCountUp'
import { testimonials as T } from '@/data/data'
import { IMG } from '@/data/images'

function Stat({ end, suffix, label, active }) {
  const v = useCountUp(end, active)
  return <div className="stat"><b>{Math.round(v)}{suffix}</b><small>{label}</small></div>
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [ref, shown] = useReveal()
  const go = (d) => setI((i + d + T.length) % T.length)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % T.length), 7000); return () => clearInterval(t) }, [])
  return (
    <section className="section dark-sec" ref={ref}>
      <div className="container tm">
        <div>
          <SectionHeading light eyebrow="Our testimonials" title={<>Trusted by our<br />successful students</>} />
          <Reveal className="tm-photos">
            {T.map((t, k) => <img key={t.name} className={k === i ? 'on' : ''} src={t.img} alt={t.name} loading="lazy" />)}
          </Reveal>
        </div>
        <Reveal dir="right">
          <div className="stats">
            <Stat end={57} suffix="M" label="Successful students" active={shown} />
            <Stat end={15} suffix="K" label="Global job placements" active={shown} />
          </div>
          <div className="quotes">
            {T.map((t, k) => (
              <blockquote key={t.name} className={k === i ? 'on' : ''}>
                <p>“{t.text}”</p><footer><b>{t.name}</b><small>{t.role}</small></footer>
              </blockquote>
            ))}
          </div>
          <div className="arrows">
            <button aria-label="Previous" onClick={() => go(-1)}><img src={IMG.arrow} alt="" style={{ transform: 'rotate(180deg)' }} /></button>
            <button aria-label="Next" onClick={() => go(1)}><img src={IMG.arrow} alt="" /></button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
