'use client'

export default function ResourcesFilter({
  label = 'Filter By',
  options = [],
  value,
  onChange,
  className = '',
}) {
  if (options.length <= 1 && options[0] === 'All') return null

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-center ${className}`}
    >
      <span className="shrink-0 font-body-sm text-[11px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant sm:w-20">
        {label}
      </span>
      <div className="-m-1 flex min-w-0 flex-1 gap-2 overflow-x-auto p-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 font-body-sm text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#fffdf9] motion-reduce:transition-none ${
              value === option
                ? 'border-primary bg-primary text-[#fffaf5] shadow-sm'
                : 'border-primary/20 bg-[#fffdf9]/70 text-on-surface-variant hover:border-primary/50 hover:bg-primary/5 hover:text-primary'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
