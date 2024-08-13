import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './styles/globalStyles';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

