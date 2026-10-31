// Hover roll: every character slides up and is replaced by its own copy
// (drawn with text-shadow), staggered left to right. Pure CSS, no JS per frame.
export default function RollText({ children, className = '' }) {
  const text = String(children)
  return (
    <span className={`roll ${className}`} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} aria-hidden="true" style={{ '--i': i }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}
