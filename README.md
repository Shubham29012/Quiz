# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Quiz Platform
A web-based quiz platform where users can attempt quizzes, get instant feedback, and track their progress. Built with React, Material-UI, and IndexedDB.

Features
Quiz Categories:

General Knowledge, Science, Mathematics, Programming, Sports, and English.

Dynamic Question Fetching:

Questions are fetched from the Open Trivia Database API.

Instant Feedback:

Users get instant feedback on their answers (green for correct, red for incorrect).

Timer-Based Quizzes:

Each question has a 30-second timer.

Progress Tracking:

Users can view their score and attempt history at the end of each quiz.

Dark Theme:

The app features a dark black background with white text for better readability.

Technologies Used
Frontend:

React

Material-UI (MUI)

React Router DOM

Storage:

IndexedDB (for saving quiz history)

API:

Open Trivia Database API (for fetching quiz questions)

Setup Instructions
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/quiz-platform.git
cd quiz-platform
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
Open the app in your browser:

Copy
http://localhost:5173
Usage
Home Page:

Select a quiz category (e.g., General Knowledge, Science, etc.).

Click Start Quiz to begin.

Quiz Page:

Answer each question within the 30-second time limit.

Instant feedback is provided for each answer (green for correct, red for incorrect).

The next question is automatically loaded after 1 second.

Result Page:

View your score and attempt history at the end of the quiz.

Folder Structure

src/
├── components/
│   ├── Quiz.jsx
│   ├── QuizList.jsx
│   ├── QuizResult.jsx
│   ├── Timer.jsx
│   └── Navbar.jsx
├── db/
│   └── indexedDB.js
├── utils/
│   └── fetchQuestions.js
├── App.jsx
├── main.jsx
└── styles.css
API Integration
The app uses the Open Trivia Database API to fetch quiz questions. Example API endpoint:

Copy
https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
Parameters:

amount: Number of questions.

category: Category ID (e.g., 9 for General Knowledge).

difficulty: Difficulty level (easy, medium, hard).

type: Question type (multiple choice or true/false).

Customization
Change Theme:

Modify the darkTheme object in App.jsx to customize the app's theme.

Add More Categories:

Update the categories array in QuizList.jsx to include additional quiz categories.

Screenshots
Home Page
Home Page

Quiz Page
Quiz Page

Result Page
Result Page

Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Open Trivia Database for providing the quiz questions.

Material-UI for the UI components and styling.
