// Server-renderable character split. Words stay unbreakable, each character is
// its own inline-block so GSAP can move it. Screen readers get the parent's
// aria-label instead of the fragments.
export default function Chars({ text, className = '', charClassName = 'char' }) {
  const words = String(text).split(' ')
  return (
    <span className={className} aria-hidden="true">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((ch, ci) => (
            <span key={ci} className={`${charClassName} inline-block will-change-transform`}>
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
