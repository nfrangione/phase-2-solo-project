import 'semantic-ui-css/semantic.min.css'
import paintings from './painting_data'

import PaintingsList from './components/PaintingList'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar color="blue" title="Painters" description="an app about art" />
      <PaintingsList paintingsList={paintings}/>
    </div>
  );
}

export default App;
