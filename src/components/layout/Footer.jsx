import { footerCols } from '@/data/data'
import { IMG } from '@/data/images'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <a href="#top"><img className="foot-logo" src={IMG.logo} alt="eLearna" /></a>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p>
        </div>
        {Object.entries(footerCols).map(([h, l]) => (
          <div key={h}><h5>{h}</h5>{l.map((x) => <a key={x} href="#top">{x}</a>)}</div>
        ))}
      </div>
      <div className="container copy">© {new Date().getFullYear()} eLearna. All rights reserved.</div>
    </footer>
  )
}
