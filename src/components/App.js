import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuizMain from './quiz/QuizMain'
import Home from './home/Home'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={QuizMain} />
    </div>
  </Router>
)

export default App
