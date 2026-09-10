import './App.css'

function App() {
  const navItems = ['Home', 'Features', 'Pricing', 'Contact']

  return (
    <div className="page-shell">
      <header className="navbar">
        <div className="nav-brand" aria-label="OrangeHub logo">
          <span className="brand-mark">O</span>
          <span>AI Exercise Assistant</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <button type="button" className="nav-cta">
          Get Started
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Smarter Workouts, Better Results. </p>
            <h1>Your AI-Powered Fitness Companion for Smarter Workouts, Better Form, and Stronger Results.🏆</h1>
            <p className="subtitle">
            Your AI-powered personal fitness assistant that helps you perform exercises with better form, real-time guidance, and smarter workout tracking.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button">
                Start now
              </button>
              <button type="button" className="secondary-button">
                Learn more
              </button>
            </div>
          </div>

          <div className="hero-panel" aria-label="Dashboard preview">
            <div className="panel-header">
              <span className="panel-badge">Live</span>
              <span className="panel-value">+24.8%</span>
            </div>

            <div className="panel-chart">
              <span className="bar short" />
              <span className="bar medium" />
              <span className="bar tall" />
              <span className="bar medium" />
              <span className="bar tall" />
              <span className="bar short" />
            </div>

            <div className="metrics">
              <div className="metric">
                <span className="metric-label">Visitors</span>
                <strong>18.4K</strong>
              </div>
              <div className="metric">
                <span className="metric-label">Sales</span>
                <strong>$12.8K</strong>
              </div>
              <div className="metric">
                <span className="metric-label">Retention</span>
                <strong>92.3%</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
