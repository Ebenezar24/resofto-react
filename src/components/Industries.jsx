const industries = ['BFSI', 'Healthcare', 'Manufacturing', 'Retail & eCommerce', 'Logistics', 'Education', 'Government', 'Telecom']

export default function Industries() {
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Industries</span>
          <h2>Built for the sectors that can't afford downtime</h2>
        </div>
        <div className="industry-grid">
          {industries.map((ind) => (
            <div className="industry-tag" key={ind}>{ind}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
