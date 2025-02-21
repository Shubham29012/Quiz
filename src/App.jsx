// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import Navbar from './components/Navbar';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/result" element={<QuizResult />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;