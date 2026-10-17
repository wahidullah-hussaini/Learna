import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { categories } from '@/data/data'

export default function Categories() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading center eyebrow="Top categories" title={<>Discover leading categories to<br />elevate your journey</>} />
        <div className="cat-grid">
          {categories.map(([ic, name, n], i) => (
            <Reveal as="a" href="#top" key={name} delay={i * 70} className="cat">
              <span className="cat-ic"><Icon name={ic} /></span><b>{name}</b><small>{n} Courses</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
