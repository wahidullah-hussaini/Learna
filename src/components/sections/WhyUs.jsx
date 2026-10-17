import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { why } from '@/data/data'
import { IMG } from '@/data/images'

export default function WhyUs() {
  return (
    <section className="section tint">
      <div className="container">
        <SectionHeading center eyebrow="Why we are" title="Elevate your professional journey"
          text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut." />
        <div className="grid4 why">
          {why.map((n, i) => (
            <Reveal key={n} delay={i * 100} className="why-i">
              <img src={IMG.why[i]} alt="" loading="lazy" /><b>{n}</b>
              <p className="muted">Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="cta">
          <h3>Are you ready to start your journey?</h3>
          <div className="cta-btns"><Button>Browse courses</Button><Button variant="light">Became a teacher</Button></div>
        </Reveal>
      </div>
    </section>
  )
}
