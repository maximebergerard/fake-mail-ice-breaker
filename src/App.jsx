import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LaPosteScenario from './scenarios/laposte/LaPosteScenario.jsx'
import LaPostePayment from './scenarios/laposte/LaPostePayment.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/laposte" element={<LaPosteScenario />} />
      <Route path="/laposte/paiement" element={<LaPostePayment />} />
    </Routes>
  )
}
