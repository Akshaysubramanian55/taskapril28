import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
