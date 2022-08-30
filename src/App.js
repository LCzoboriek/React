import "./App.css";

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search:</label>
      <label id="search" type="text" />
    </div>
  );
}

export default App;
