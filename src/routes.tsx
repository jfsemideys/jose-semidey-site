// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ProjectDetails from './pages/ProjectDetails';
import NotFoundPage from './pages/NoFoundPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<ProjectDetails />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
