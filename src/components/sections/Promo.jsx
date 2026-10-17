import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { IMG } from '@/data/images'

export default function Promo() {
  return (
    <section className="container promo">
      <Reveal dir="left" className="promo-card blue-soft">
        <div><h3>Quick access to the popular courses</h3><Button variant="yellow">View Courses</Button></div>
        <img src={IMG.laptopGirl} alt="Woman using a laptop" loading="lazy" />
      </Reveal>
      <Reveal dir="right" delay={120} className="promo-card sand">
        <div><h3>Develop your skills online!</h3><Button>Apply Now</Button></div>
        <div className="video">
          <video src={IMG.video} autoPlay muted loop playsInline preload="metadata" />
          <img className="controls" src={IMG.controls} alt="" />
        </div>
      </Reveal>
    </section>
  )
}
