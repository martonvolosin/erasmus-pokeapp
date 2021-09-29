import Header from './components/UI/header/Header';
import './App.css';
import HomePage from './screens/HomePage/HomePage';
import SearchBar from './components/FilterComponents/searchbar/SearchBar';


function App() {
  return (
    <div>
      <Header /> 
      <HomePage />
      <SearchBar />
    </div>
  );
}

export default App;
