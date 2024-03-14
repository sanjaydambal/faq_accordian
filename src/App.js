import React, { useState, useEffect } from 'react';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:2000/questions');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Accordion of FAQ's</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Pass questions as a prop, not question */}
          <Questions questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default App;
