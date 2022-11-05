import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Middle } from './components/Middle/Middle';

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;