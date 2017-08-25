import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuizPage from './quiz/QuizPage'
import Home from './home/Home'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={QuizPage} />
    </div>
  </Router>
)

export default App
