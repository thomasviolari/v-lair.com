import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apps from './pages/Apps'
import About from './pages/About'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/apps"  element={<Apps />} />
        <Route path="/about" element={<About />} />
        {/* Add new app routes here:
            <Route path="/apps/my-app" element={<MyApp />} />
        */}
      </Routes>
      <Footer />
    </>
  )
}
