type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro?: string
}

export const SectionHeading = ({ eyebrow, title, intro }: SectionHeadingProps) => (
  <div class="section-heading">
    <p class="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {intro ? <p class="section-intro">{intro}</p> : null}
  </div>
)
