import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, center, light }) {
  return (
    <Reveal className={`sh ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="muted">{text}</p>}
    </Reveal>
  )
}
