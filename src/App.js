import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { BMICalculator } from "./components/BMICalculator";
function App() {
  return (
    <div className="App">
      <Header />
      <BMICalculator />
    </div>
  );
}

export default App;
