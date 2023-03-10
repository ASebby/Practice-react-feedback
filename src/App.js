import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  AboutIconLink,
  FeedbackForm,
  FeedbackStats,
  FeedbackList,
  Header,
} from './components';
import AboutPage from './pages/AboutPage';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
