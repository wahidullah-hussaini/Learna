import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { IMG } from '@/data/images'

const points = ['Skill-based instruction', 'Analytics and insights', 'Global certification', 'Customizable courses']

export default function Offer() {
  return (
    <section className="section">
      <div className="container offer">
        <Reveal dir="left" className="offer-art">
          <img className="o-man" src={IMG.man} alt="Man holding a graph" loading="lazy" />
          <img className="o-woman" src={IMG.woman} alt="Woman holding a tablet" loading="lazy" />
          <img className="o-badge float" src={IMG.freeCourses} alt="50+ free courses listed online" loading="lazy" />
        </Reveal>
        <Reveal dir="right">
          <p className="eyebrow">What we offer</p>
          <h2>Personalized learning for your ambitions</h2>
          <p className="muted">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
          <ul className="ticks">{points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="ask">
            <div><b>Still have questions?</b><p className="muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div>
            <Button>Get Started</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
