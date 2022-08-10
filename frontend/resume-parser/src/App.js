import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from './components/Form'
import Dashboard from './components/Dashboard'

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