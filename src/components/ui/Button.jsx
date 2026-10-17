export default function Button({ variant = 'dark', href = '#', children, ...rest }) {
  return <a href={href} className={`btn btn-${variant}`} {...rest}><span>{children}</span></a>
}
