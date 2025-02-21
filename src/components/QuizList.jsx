// src/components/QuizList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Grid, Card, CardContent, CircularProgress } from '@mui/material';

const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 17, name: 'Science & Nature' },
  { id: 19, name: 'Mathematics' },
  { id: 18, name: 'Computers' },
  { id: 21, name: 'Sports' },
  { id: 10, name: 'Books' },
];

const QuizList = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <Container style={{ backgroundColor: '#000', padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h3" align="center" gutterBottom style={{ color: '#fff' }}>
        Select a Quiz Category
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: '#333', color: '#fff' }}>
              <CardContent>
                <Typography variant="h5" align="center" style={{ color: '#fff' }}>
                  {category.name}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => handleStartQuiz(category.id)}
                  style={{ marginTop: '10px', backgroundColor: '#6200ea', color: '#fff' }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} style={{ color: '#fff' }} /> : 'Start Quiz'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QuizList;