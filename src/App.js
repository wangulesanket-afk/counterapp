import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Class from './Components/Class';
import Functional from './Components/Functional';

function App() {
  return (
    <div className="App container mt-5">
      <Class />
      <Functional />
    </div>
  );
}
export default App;
