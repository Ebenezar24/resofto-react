import logo from '../assets/logo.jpeg'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="ReSofto Technologies" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#solutions">Solutions</a>
          <div className="has-dropdown">
            <span className="dropdown-trigger">
              Cloud Platforms <span className="caret">▾</span>
            </span>
            <div className="dropdown-menu">
              <a href="#aws">AWS</a>
              <a href="#nxtgen">NxtGen Cloud</a>
            </div>
          </div>
          <a href="#industries">Industries</a>
          <a href="#services">Professional Services</a>
          <a href="#resources">Resources</a>
          <a href="#about">About Us</a>
        </div>
        <a className="nav-cta" href="#contact">Contact</a>
      </nav>
    </header>
  )
}
