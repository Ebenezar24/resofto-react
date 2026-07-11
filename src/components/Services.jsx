const services = [
  { icon: '◆', title: 'Advisory & Architecture', text: 'Technical roadmaps and architecture reviews grounded in what your team can actually maintain.' },
  { icon: '▲', title: 'Implementation', text: 'Hands-on delivery teams that build, test, and deploy — not just recommend.' },
  { icon: '●', title: 'Managed Support', text: 'Ongoing support contracts with defined SLAs, so issues get resolved, not just logged.' },
]

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Professional Services</span>
          <h2>Hands-on delivery, not just consulting slides</h2>
        </div>
        <div className="grid-3">
          {services.map((s) => (
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
