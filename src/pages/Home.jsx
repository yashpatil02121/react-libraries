import { useNavigate } from 'react-router-dom';
import { Cake, Sparkles, Box, Check } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Birthday Surprise',
      path: '/birthday',
      description: 'Generate personalized birthday celebrations with interactive confetti and custom animations.',
      icon: Cake,
      bgStyle: { background: 'linear-gradient(to bottom right, #f9a8d4, #ec4899)' },
      features: ['Custom Confetti', 'Personalized Animations', 'Shareable Moments']
    },
    {
      title: '3D Scene',
      path: '/3d',
      description: 'Explore immersive 3D visualizations and interactive WebGL experiences.',
      icon: Box,
      bgStyle: { background: 'linear-gradient(to bottom right, #60a5fa, #2563eb)' },
      features: ['Interactive 3D Models', 'WebGL Rendering', 'Dynamic Scenes']
    },
    {
      title: 'Fireworks Show',
      path: '/fireworks',
      description: 'Create spectacular fireworks displays with customizable particle effects.',
      icon: Sparkles,
      bgStyle: { background: 'linear-gradient(to bottom right, #a78bfa, #7c3aed)' },
      features: ['Particle Animations', 'Color Customization', 'Performance Optimized']
    },
  ];

  return (
    <>
      <style>{`
  .home-container {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0.5rem;
  }

  .home-inner {
    max-width: 96rem;
    margin: 0 auto;
    width: 100%;
  }

  .home-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .home-title {
    font-size: 1.75rem;
    font-weight: 800;
    background: linear-gradient(to right, #2563eb, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  .home-subtitle {
    font-size: 0.85rem;
    color: #4b5563;
    max-width: 28rem;
    margin: 0 auto;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  @media (min-width: 768px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
  }

  .card {
  position: relative;
  border-radius: 0.75rem;
  padding: 0; /* ✅ no internal spacing */
  color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
}


  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.15);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.2s ease;
  }

  .card:hover::before {
    background: rgba(0, 0, 0, 0.05);
  }

  .card-content {
  position: relative;
  z-index: 10;
  padding: 0.6rem 0.8rem; /* keep content from touching edges */
}


  .card-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0; /* top right bottom left */
}


  .card-desc {
    font-size: 0.7rem;
    opacity: 0.85;
    margin-bottom: 0.25rem;
  }

  .card-features {
    border: 1px solid black;
    padding: 0.2rem;
    display: none;
  }

  @media (min-width: 768px) {
    .card-features {
      display: block;
      margin-bottom: 0.5rem;
    }

    .card-feature {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
      opacity: 0.75;
      margin-top: 0.2rem;
    }

    .card-feature svg {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.4rem;
    }
  }

  .home-footer {
    text-align: center;
    color: #6b7280;
    margin-top: 1.5rem;
    font-size: 0.75rem;
  }
`}</style>



      <div className="home-container">
        <div className="home-inner">
          <header className="home-header">
            <h1 className="home-title">React Libraries</h1>
            <p className="home-subtitle">
              Explore a collection of interactive and innovative React components
            </p>
          </header>

          <div className="cards-grid">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.path}
                  onClick={() => navigate(card.path)}
                  className="card"
                  style={card.bgStyle}
                >
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-desc">{card.description}</p>

                    <div className="card-features">
                      {card.features.map((feature, index) => (
                        <div key={index} className="card-feature">
                          <Check />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <footer className="home-footer">
            <p>© {new Date().getFullYear()} React Libraries.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
