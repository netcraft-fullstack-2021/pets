import './App.css';
import NavBar from './Navbar';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Fish from './pages/Fish';

function App() {
  return <>
    <NavBar />
    <main>
      <Dogs />
      <Cats />
      <Fish />
    </main>
  </>;
}

export default App;
