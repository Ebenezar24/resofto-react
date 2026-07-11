const resources = [
  { tag: 'Guide', title: 'Cloud Migration Checklist', text: 'A practical framework for planning a zero-downtime migration.' },
  { tag: 'Case Study', title: 'Scaling BFSI Infrastructure', text: 'How a regional bank cut infra costs by 30% post-migration.' },
  { tag: 'Whitepaper', title: 'Choosing Between AWS and Regional Cloud', text: 'A comparison framework for compliance-sensitive workloads.' },
]

export default function Resources() {
  return (
    <section id="resources" style={{ background: 'var(--panel-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Resources</span>
          <h2>Guides, case studies, and technical notes</h2>
        </div>
        <div className="grid-3">
          {resources.map((r) => (
            <div className="resource-card" key={r.title}>
              <div className="resource-thumb">[ Thumbnail ]</div>
              <div className="resource-body">
                <span className="tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
