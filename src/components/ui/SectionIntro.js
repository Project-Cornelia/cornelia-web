export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 font-label-lg text-[11px] font-semibold uppercase tracking-[0.18em] ${
            centered ? 'justify-center' : ''
          } ${dark ? 'text-white/60' : 'text-primary'}`}
        >
          <span className={`h-px w-7 ${dark ? 'bg-white/30' : 'bg-primary/35'}`} />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-headline-lg text-[2.25rem] font-medium leading-[1.08] tracking-[-0.02em] md:text-[3rem] ${
          dark ? 'text-white' : 'text-on-surface'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl font-body-md text-base leading-relaxed md:text-lg ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-white/65' : 'text-on-surface-variant'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
