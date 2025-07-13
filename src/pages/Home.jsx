// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import {
  Cake,
  Sparkles,
  Box,
  Check
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const cards = [
    { 
      title: 'Birthday Surprise', 
      path: '/birthday',
      description: 'Generate personalized birthday celebrations with interactive confetti and custom animations.',
      icon: Cake,
      bgGradient: 'from-pink-300 to-pink-500',
      features: [
        'Custom Confetti',
        'Personalized Animations',
        'Shareable Moments'
      ]
    },
    { 
      title: '3D Scene', 
      path: '/3d',
      description: 'Explore immersive 3D visualizations and interactive WebGL experiences.',
      icon: Box,
      bgGradient: 'from-blue-400 to-blue-600',
      features: [
        'Interactive 3D Models',
        'WebGL Rendering',
        'Dynamic Scenes'
      ]
    },
    { 
      title: 'Fireworks Show', 
      path: '/fireworks',
      description: 'Create spectacular fireworks displays with customizable particle effects.',
      icon: Sparkles,
      bgGradient: 'from-purple-400 to-purple-600',
      features: [
        'Particle Animations',
        'Color Customization',
        'Performance Optimized'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center py-12 px-4 selection:bg-blue-200">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-pulse">
            React Libraries
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a collection of interactive and innovative React components
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.path}
                onClick={() => navigate(card.path)}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl 
                  bg-gradient-to-br ${card.bgGradient} transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl cursor-pointer p-4 md:p-6 text-white 
                  flex flex-col justify-between`}
                  
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <Icon className="w-8 h-8 md:w-12 md:h-12 opacity-80 text-white/90" />
                    <span className="text-xs md:text-sm bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full">
                      Interactive
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{card.title}</h3>
                  <p className="text-xs md:text-sm opacity-80 mb-4 md:mb-6">{card.description}</p>
                  
                  <div className="space-y-1 md:space-y-2 mb-4 md:mb-6 hidden md:block">
                    {card.features.map((feature, index) => (
                      <div 
                      key={index} 
                      className="flex items-center text-xs md:text-sm opacity-75"
                    >
                      <Check className="w-4 h-4 mr-2 text-white/70" />
                      {feature}
                    </div>
                    
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center text-xs md:text-sm font-medium 
                    bg-white bg-opacity-20 hover:bg-opacity-30 
                    px-3 py-2 md:px-5 md:py-3 rounded-full transition-all group-hover:translate-x-2">
                    Explore Project →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-12 md:mt-16 text-center text-gray-500">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} React Libraries. 
            Crafted with ❤️ and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
