const solutions = [
  { icon: '☁', title: 'Cloud Migration', text: 'Move workloads to the cloud without downtime, re-architecting where it actually pays off.' },
  { icon: '⚙', title: 'Managed Infrastructure', text: '24/7 monitoring, patching, and scaling so your systems stay reliable without an in-house ops team.' },
  { icon: '▣', title: 'Application Modernization', text: 'Refactor legacy applications into scalable, cloud-ready systems built for growth.' },
]

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Solutions</span>
          <h2>End-to-end technology, not point fixes</h2>
          <p>From infrastructure to applications, we design solutions that fit how your business actually runs.</p>
        </div>
        <div className="grid-3">
          {solutions.map((s) => (
            <div className="card" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
