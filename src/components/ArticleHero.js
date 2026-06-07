'use client'

export default function ArticleHero({ title, author, date }) {
  return (
    <header className="max-w-4xl mx-auto px-gutter text-center py-20">
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-[80px] text-on-surface mb-6 leading-tight tracking-tight">
        {title}
      </h1>
      <div className="flex flex-col items-center">
        <span className="font-body-lg text-primary text-body-lg mb-1">{author}</span>
        <span className="font-body-md text-primary/60 italic">{date}</span>
      </div>
    </header>
  )
}
