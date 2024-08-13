import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import { useTheme } from './contexts/ThemeContext';
import LoginPage from './pages/LoginPage';
import './App.css';


function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <Router>
        <Navbar />
        <div className="min-h-92vh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
