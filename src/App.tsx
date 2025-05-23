import { Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
