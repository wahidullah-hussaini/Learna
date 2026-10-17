import { IMG } from '@/data/images'

export default function Clients() {
  const row = [...IMG.clients, ...IMG.clients, ...IMG.clients]
  return (
    <section className="clients">
      <p>Learn from 350+ leading universities and companies with us</p>
      <div className="marquee"><div className="track">{row.map((s, i) => <img key={i} src={s} alt="Client logo" loading="lazy" />)}</div></div>
    </section>
  )
}
