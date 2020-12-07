
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobaStyle } from './GlobalStyles';
import Hero from './components/Hero/index';
function App() {
  return (
    <Router>
       <GlobaStyle/>
       <Hero/>
    </Router>
  );
}

export default App;
