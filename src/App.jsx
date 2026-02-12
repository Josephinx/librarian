import { Routes, Route } from 'react-router';
import Survey from './components/Survey';
import PersonaDashboard from './components/PersonaDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Survey />} />
      <Route path="/persona/:slug" element={<PersonaDashboard />} />
    </Routes>
  );
}
