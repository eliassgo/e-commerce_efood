import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/LaDolceVita'
import Hioki from './pages/Hioki/Hioki'
import CasaPorco from './pages/CasaPorco/CasaPorco'
import Lasai from './pages/Lasai/Lasai'
import Origem from './pages/Origem/Origem'
import Oteque from './pages/Oteque/Oteque'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/hioki" element={<Hioki />} />
    <Route path="/casaporco" element={<CasaPorco />} />
    <Route path="/lasai" element={<Lasai />} />
    <Route path="/origem" element={<Origem />} />
    <Route path="/oteque" element={<Oteque />} />
  </Routes>
)

export default Rotas
