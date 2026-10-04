import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Routine from './components/Routine'
import StudyMaterial from './components/StudyMaterial'
import Miscellaneous from './components/Miscellaneous'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routine" element={<Routine />} />
      <Route path="/study-material" element={<StudyMaterial />} />
      <Route path="/miscellaneous" element={<Miscellaneous />} />
    </Routes>
  )
}

export default App