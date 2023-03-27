
import React from 'react'
import Form from './Form.js'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Redirect from './Redirect.js';
const App = () => {
  return (
  
    <Router>
         
         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/redirect' element={<Redirect />} />
         </Routes>
    </Router>
  )
}

export default App