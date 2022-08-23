import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar'; // React

import './styles/components/app.sass'; // Sass

function App() {
  return (  
    <div id="portfolio">
      <h1>Ian Santana</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App
