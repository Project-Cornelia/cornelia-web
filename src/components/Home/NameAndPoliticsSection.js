'use client'

const blocks = [
  {
    eyebrow: 'Our Name',
    title: 'The Story of Our Name',
    paragraphs: [
      "Project Cornelia takes its name from Cornelia Sorabji, a woman who refused to accept the boundaries drawn around her. She became the first woman to study law at Oxford and one of India's first women lawyers, at a time when women were largely shut out of legal and public life.",
      "Cornelia spent her life bringing law within reach of women who had no one to speak for them—advising women living in seclusion, arguing for women's education, and widening the door for those who would follow. Her quiet defiance is the inheritance we carry: the belief that women do not need permission to speak, lead, or reshape the rules that govern their lives.",
    ],
  },
  {
    eyebrow: 'Our Politics',
    title: 'How Do We Define Politics?',
    paragraphs: [
      'Politics is often imagined as something that happens in Parliament, at the ballot box, or in the pages of a policy document. We understand it more broadly—and more intimately. Politics is the everyday negotiation of who gets to speak, who is heard, and whose needs shape the rules we live by: in homes and classrooms, in workplaces and communities, in families and public institutions.',
      "For Project Cornelia, politics begins wherever power is exercised and decisions are made. That is why our work is not only about elections. It is about building women's confidence to enter public conversations, equipping them with the language of law and policy, and creating spaces where their lived experience can reshape the agenda. When women become central to decision-making, democracy becomes more representative—and more alive.",
    ],
  },
]

export default function NameAndPoliticsSection() {
  return (
    <section className="bg-surface-container-low px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          {blocks.map((block, index) => (
            <article
              key={block.title}
              className={
                index === 1
                  ? 'border-t border-neutral-200 pt-12 md:border-t-0 md:border-l md:pl-12 md:pt-0 lg:pl-16'
                  : 'md:pr-12 lg:pr-16'
              }
            >
              <p className="mb-3 font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary">
                {block.eyebrow}
              </p>
              <h2 className="font-headline-md text-headline-md text-on-surface">{block.title}</h2>
              <div className="mt-6 h-px w-12 bg-primary" />
              <div className="mt-6 space-y-5">
                {block.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="font-body-md text-body-md leading-relaxed text-on-surface-variant"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
