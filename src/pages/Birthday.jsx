import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

function Birthday() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <Confetti width={dimensions.width} height={dimensions.height} />
  
      {/* Birthday Message Card */}
      <div style={styles.card}>
        <h1 style={styles.heading}>🎉 Happy Birthday! 🎉</h1>
        <p style={styles.message}>
          May your day be filled with laughter, love, and unforgettable memories.
        </p>
        <p style={styles.subtext}>
          You deserve all the joy in the world—celebrate big! ✨
        </p>
      </div>
  
      {/* Library Info Card */}
      <div style={styles.infoCard}>
        <strong>Library: </strong> <code>react-confetti</code> 
        <p>
             A lightweight confetti animation for React.
            </p>
      </div>
    </div>
  );
  
}

// Responsive styles with dynamic scaling
const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(to bottom right, #ffe0c3, #ffa69e)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // <-- this stacks elements vertically
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px' // adds space between the two cards
      },
  heading: {
    fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
    color: '#ff5f5f',
    marginBottom: '8px',
    lineHeight: '1.2',
  },
  emoji: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    marginBottom: '15px',
  },
  message: {
    fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
    color: '#333',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  subtext: {
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    padding: '8vw',
    margin: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    maxWidth: '100%',
    width: '100s%',
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '20px 20px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '80%',
    width: '80%',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    color: '#333',
  },  
};

export default Birthday;
