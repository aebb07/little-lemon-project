import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CallToAction from './CallToAction';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <CallToAction />
      <Main />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
