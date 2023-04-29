import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Calendar date={new Date()} />
    </div>
  );
}

export default App;
