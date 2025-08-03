import { motion as _Motion } from 'framer-motion';

function MotionPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  const rotatingBox = {
    animate: {
      rotate: [0, 360],
      transition: { duration: 8, ease: "linear", repeat: Infinity },
    },
  };

  const marquee = {
    animate: {
      x: ["100%", "-100%"],
      transition: { duration: 12, ease: "linear", repeat: Infinity },
    },
  };

  const cardColors = ['#f9a8d4', '#a5b4fc', '#6ee7b7', '#fde68a'];

  return (
    <>
      <style>{`
        .motion-wrapper {
          min-height: 100vh;
          background: linear-gradient(120deg, #fdf2f8, #f0f9ff, #ecfdf5);
          background-size: 300% 300%;
          animation: gradientShift 15s ease infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .motion-title {
          font-size: 2.7rem;
          font-weight: 800;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          text-align: center;
        }

        .motion-subtitle {
          font-size: 1.2rem;
          color: #374151;
          text-align: center;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }

        .motion-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.2rem;
          max-width: 700px;
          width: 100%;
          margin-bottom: 3rem;
        }

        .motion-card {
          border-radius: 0.75rem;
          padding: 1.2rem;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
          color: white;
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        .motion-rotator, .motion-marquee {
          margin-top: 2rem;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at center, #8b5cf6, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .motion-marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          margin-top: 3rem;
          height: 40px;
        }

        .motion-marquee-inner {
          display: inline-block;
          white-space: nowrap;
          font-size: 1.1rem;
          font-weight: 600;
          color: #6b7280;
        }

        .motion-footer {
          margin-top: 4rem;
          font-size: 0.9rem;
          color: #6b7280;
        }
      `}</style>

      <div className="motion-wrapper">
        <_Motion.h1
          className="motion-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Animated Page
        </_Motion.h1>

        <_Motion.p
          className="motion-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          All components are animated with Framer Motion and styled with colorful gradients.
        </_Motion.p>

        <_Motion.div
          className="motion-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[0, 1, 2, 3].map((i) => (
            <_Motion.div
              key={i}
              className="motion-card"
              style={{ backgroundColor: cardColors[i] }}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Card {i + 1}
            </_Motion.div>
          ))}
        </_Motion.div>

        <_Motion.div
          className="motion-rotator"
          animate={rotatingBox.animate}
          whileHover={{ scale: 1.2 }}
        >
          🔄
        </_Motion.div>

        <div className="motion-marquee-wrapper">
          <_Motion.div
            className="motion-marquee-inner"
            animate={marquee.animate}
          >
            ✨ Scroll-less animation | Watch the continuous 15 seconds journey powered by Framer Motion!
          </_Motion.div>
        </div>

        <_Motion.div
          className="motion-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 12, duration: 2 }}
        >
          ⏱️ Built for 15s showcase — Fully animated with love 💜
        </_Motion.div>
      </div>
    </>
  );
}

export default MotionPage;
