import './App.css';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>Redux with React practice</h1>
        <Posts/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
