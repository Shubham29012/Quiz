// src/utils/fetchQuestions.js
export const fetchQuestions = async (category, difficulty = 'easy', amount = 10) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((question) => ({
      text: question.question,
      options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5), // Shuffle options
      correctAnswer: question.correct_answer,
    }));
  };