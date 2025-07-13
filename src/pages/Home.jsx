// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const cards = [
    { title: '🎉 Birthday Surprise', path: '/birthday' },
    { title: '🌌 3D Scene', path: '/3d' },
    { title: '🎆 Fireworks Show', path: '/fireworks' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-12 flex items-center gap-2">
        🚀 <span>React Libraries</span>
      </h1>

      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {cards.map((card) => (
          <div
            key={card.path}
            onClick={() => navigate(card.path)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-200 hover:shadow-xl border border-gray-200 text-center"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
