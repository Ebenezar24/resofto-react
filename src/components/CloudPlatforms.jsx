export default function CloudPlatforms() {
  return (
    <section id="cloud-platforms" style={{ background: 'var(--panel-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Cloud Platforms</span>
          <h2>Certified partners, real deployment experience</h2>
        </div>
        <div className="grid-2">
          <div className="platform-card" id="aws">
            <div className="platform-logo">AWS</div>
            <div>
              <h3>Amazon Web Services</h3>
              <p>Architecture, migration, and managed services across EC2, RDS, Lambda, and the full AWS stack.</p>
            </div>
          </div>
          <div className="platform-card" id="nxtgen">
            <div className="platform-logo">NG</div>
            <div>
              <h3>NxtGen Cloud</h3>
              <p>Sovereign cloud infrastructure and managed hosting tailored for regional compliance needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
