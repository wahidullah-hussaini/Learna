import { IMG } from '@/data/images'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-in">
        <div className="hero-art">
          <img className="moon" src={IMG.moon} alt="" />
          <img className="hero-girl" src={IMG.heroGirl} alt="Smiling student with a backpack" />
          <img className="award float" src={IMG.achievements} alt="125+ achievement awards" />
          <img className="trust float d2" src={IMG.trusted} alt="Trusted by 15000+ enrolled students" />
          <img className="dot blue float" src={IMG.blueDot} alt="" />
          <img className="dot y1 float d2" src={IMG.yellowDot} alt="" />
          <img className="dot y2 float" src={IMG.yellowDot} alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow h-a">Online learning</p>
          <h1 className="h-b">More then <em>25000+</em> education courses online</h1>
          <p className="muted h-c">Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.</p>
          <div className="h-d"><Button>Get Started</Button></div>
        </div>
      </div>
    </section>
  )
}
