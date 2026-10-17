import Reveal from './Reveal'
import { IMG } from '@/data/images'

export default function CourseCard({ course: c, index = 0 }) {
  return (
    <Reveal as="article" delay={(index % 3) * 90} className="course">
      <a href="#top" className="course-link">
        <div className="thumb">
          <img src={c.img} alt={c.title} loading="lazy" />
          <span className={`price ${c.price === 'Free' ? 'free' : ''}`}>{c.price}</span>
        </div>
        <div className="course-body">
          <small className="cat-tag">{c.cat}</small>
          <h4>{c.title}</h4>
          <div className="rating"><img src={IMG.rating} alt="" /> {c.rate} ({c.rev})</div>
          <div className="meta">
            <span><img src={IMG.books} alt="" />{c.lessons} Lessons</span>
            <span><img src={IMG.person} alt="" />{c.students} Enrolled</span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}
