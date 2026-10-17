import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { trending } from '@/data/data'
import { IMG } from '@/data/images'

export default function Trending() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Trending courses" title="Explore our top programs" />
        <div className="grid4">
          {trending.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="trend">
              <div className="thumb"><img src={c.img} alt={c.title} loading="lazy" /><span className={`price ${c.price === 'Free' ? 'free' : ''}`}>{c.price}</span></div>
              <div className="course-body">
                <small className="cat-tag">{c.cat}</small><h4>{c.title}</h4>
                <div className="rating"><img src={IMG.rating} alt="" /> {c.rate} ({c.rev})</div>
              </div>
              <div className="trend-pop">
                <h4>{c.title}</h4>
                <div className="meta"><span>{c.lessons} Lessons</span><span>{c.students} Enrolled</span></div>
                <p className="muted">Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.</p>
                <ul>{['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit'].map((t) => <li key={t}><img src={IMG.tick} alt="" />{t}</li>)}</ul>
                <div className="pop-btns"><Button>Course Details</Button>{c.price !== 'Free' && <Button variant="yellow">Enroll</Button>}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
