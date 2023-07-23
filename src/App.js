import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FlashScreen from './components/FlashScreen';
import SignIn from './pages/signin/SignIn';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {

  const [isFlashScreen, setIsFlashScreen] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsFlashScreen(false);
    }, 1500);

  })

  return (
    <Router>
      <div id="App">
        
        {
          isFlashScreen && <FlashScreen />
        }

        <Header/>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/sign_in' element={<SignIn />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App; 