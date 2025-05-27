import './styles/App.css';
import { useTranslation } from 'react-i18next';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
