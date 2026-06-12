export default function DonationComponent1() {
  return (
    <div className="p-8 bg-surface-container-low rounded-xl border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
        Smile Goal Hai- Let the SHEROES smile again!
      </h3>
      <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
        Support Project Cornelia with a single contribution to fuel our mission of bringing smiles to the SHEROES.
      </p>
      <a
        href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all active:scale-95 shadow-md text-center"
      >
        Donate Now
      </a>
    </div>
  )
}
