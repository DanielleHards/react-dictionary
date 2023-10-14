import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Relax" />
        </main>
        <footer className="text-center">
          Coded by <span className="studentName">Danielle Hards</span> for{" "}
          <span className="sheCodes">SheCodes</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
