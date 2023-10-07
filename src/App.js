import "./App.css";
import book from "./book.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={book}
            className="book-img img-fluid"
            alt="cartoon book lover"
          />
        </header>
        <main>
          <Dictionary />
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
