import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import CourseCard from '@/components/ui/CourseCard'
import { courses, tabs } from '@/data/data'

export default function Courses() {
  const [tab, setTab] = useState(tabs[0])
  const list = (tab === tabs[0] ? courses : courses.filter((c) => c.cat === tab)).slice(0, 6)
  return (
    <section className="section tint">
      <div className="container">
        <Reveal className="row-between">
          <div><p className="eyebrow">Online learning</p><h2>Top online courses</h2></div>
          <div className="tabs" role="tablist">
            {tabs.map((t) => <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>)}
          </div>
        </Reveal>
        <div className="grid3" key={tab}>{list.map((c, i) => <CourseCard key={c.title} course={c} index={i} />)}</div>
        <Reveal className="pill-bar">We assist you in finding the ideal tutor at no cost. <a href="#top">Browse All Available Courses</a></Reveal>
      </div>
    </section>
  )
}
