import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from './pages/Form'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;