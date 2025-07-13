import React, { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

const FireworksPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const fireworks = new Fireworks(containerRef.current, {
      rocketsPoint: { min: 0, max: 100 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.98,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 5,
    });

    fireworks.start();

    // Force canvas style manually
    const canvas = containerRef.current?.querySelector("canvas");
    if (canvas) {
      Object.assign(canvas.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        maxWidth: "100vw",
        display: "block",
        zIndex: "0",
        pointerEvents: "none",
      });
    }

    return () => fireworks.stop();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
            margin: 0,
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          🎆 Happy Celebration!
        </h1>
      </div>

      {/* Keyframes and global layout fix */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: #000;
          font-family: system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default FireworksPage;
