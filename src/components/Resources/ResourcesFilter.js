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
    <div className={`flex items-center gap-3 overflow-x-auto ${className}`}>
      <span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mr-2 whitespace-nowrap">
        {label}
      </span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={value === option}
          className={`px-5 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-all duration-300 ${
            value === option
              ? 'bg-neutral-900 text-neutral-50'
              : 'bg-transparent border border-neutral-100 hover:border-primary hover:text-primary'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
