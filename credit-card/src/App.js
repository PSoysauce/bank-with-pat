import logo from './logo.svg';
import './App.css';
import CreditCard from './components/Credit-Card/Credit-Card';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1 class="display-1">Card Recommendations</h1>
        <CreditCard></CreditCard>
      </header>
    </div>
  );
}

export default App;
