import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Basics from './pages/Basics'
import PromptTypes from './pages/PromptTypes'
import Techniques from './pages/Techniques'
import Examples from './pages/Examples'
import BestPractices from './pages/BestPractices'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/prompt-types" element={<PromptTypes />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
