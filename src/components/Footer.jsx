import logo from '../assets/logo-pill.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="footer-logo">
              <img src={logo} alt="ReSofto Technologies" />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: 4, maxWidth: 280 }}>
              Enterprise cloud and IT solutions across AWS and NxtGen Cloud.
            </p>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#solutions">Solutions</a>
            <a href="#about">About Us</a>
            <a href="#resources">Resources</a>
          </div>
          <div className="foot-col">
            <h5>Cloud Platforms</h5>
            <a href="#aws">AWS</a>
            <a href="#nxtgen">NxtGen Cloud</a>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul className="contact-list">
              <li><a href="mailto:info@resoftotechnologies.com">info@resoftotechnologies.com</a></li>
              <li>
                <span className="office-label">Head Office – Bengaluru</span>
                <a href="tel:+919606840076">+91 9606840076</a><br />
                WeWork Vaishnavi Signature, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103
              </li>
              <li>
                <span className="office-label">Branch Office – Mysore</span>
                <a href="tel:+919886367554">+91 9886367554</a><br />
                291CA, Ground Floor, Haiyalama Enterprises, Hebbal Industrial Area, Mysore – 570016, Karnataka
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 ReSofto Technologies Pvt. Ltd. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
