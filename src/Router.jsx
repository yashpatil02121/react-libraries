import { Routes, Route } from 'react-router-dom';
import Birthday from './pages/Birthday';
import Home from './pages/Home';
import ThreeScene from './pages/ThreeScene';
import FireworksPage from './pages/FireworksPage'; // <-- import the new page
import MotionPage from './pages/MotionPage';
import PWP from './pages/PWP';
import AnimatedTorusKnot from './pages/AnimatedTorusKnot';
import GsapPage from './pages/GsapPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/3d" element={<ThreeScene />} />
      <Route path="/fireworks" element={<FireworksPage />} />
      <Route path="/motion" element={<MotionPage />} />
      <Route path="/pwp" element={<PWP/>} />
      <Route path="/knot" element={<AnimatedTorusKnot/>} />
      <Route path="/gsap" element={<GsapPage/>} />
    </Routes>
  );
}

export default AppRoutes;
