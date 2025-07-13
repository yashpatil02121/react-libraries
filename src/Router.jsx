import { Routes, Route } from 'react-router-dom';
import Birthday from './pages/Birthday';
import Home from './pages/Home';
import ThreeScene from './pages/ThreeScene';
import FireworksPage from './pages/FireworksPage'; // <-- import the new page

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/3d" element={<ThreeScene />} />
      <Route path="/fireworks" element={<FireworksPage />} /> {/* <-- new route */}
    </Routes>
  );
}

export default AppRoutes;
