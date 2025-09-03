import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isReady, setIsReady] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const checkReady = setInterval(async () => {
      if (window.puter && window.puter.ai && typeof window.puter.ai.chat === "function") {
        clearInterval(checkReady);
        setIsReady(true);
        //const response = await window.puter.ai.chat("Give me a quote");
        setQuote("test");
      }
    }, 300);
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-brain"></i>
              <span>AI Mock</span>
            </div>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Docs</a></li>
              </ul>
            </nav>
            <div className="auth-buttons">
              <button className="btn btn-outline">Sign In</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Intelligent AI Solutions for the Future</h1>
          <p>{isReady ? "AI is ready to assist you." : "Loading AI..."}</p>
          <p>{quote}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-outline">Watch Demo</button>
          </div>
          <div className="hero-demo">
            <div className="demo-content">
              <h2>Experience AI Power</h2>
              <p>Our platform uses advanced machine learning algorithms to analyze data, predict outcomes, and automate complex tasks with unprecedented accuracy.</p>
              <button className="btn btn-primary">Explore Features</button>
            </div>
            <div className="demo-visual">
              <i className="fas fa-robot"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Powerful AI Capabilities</h2>
            <p>Discover the features that make our AI platform stand out from the competition</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Predictive Analytics</h3>
              <p>Harness the power of AI to predict trends, customer behavior, and market changes with incredible accuracy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>Natural Language Processing</h3>
              <p>Understand and generate human language for chatbots, sentiment analysis, and content creation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Process Automation</h3>
              <p>Automate complex workflows and business processes with AI-driven decision making.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-image"></i>
              </div>
              <h3>Computer Vision</h3>
              <p>Analyze and interpret visual data from images and videos for various applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>AI-Powered Security</h3>
              <p>Detect and prevent threats in real-time with our advanced AI security systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Continuous Learning</h3>
              <p>Our models continuously improve over time, adapting to new data and changing conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>NeuraSphere AI</h3>
              <p>Transforming businesses with the power of artificial intelligence and machine learning.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-discord"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Demo</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AI Mock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
