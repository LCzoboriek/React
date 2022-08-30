import "./App.css";

function getTitle(title) {
  return title;
}

let my_array = [123, "string"];

function App() {
  return (
    <div>
      <h1>{my_array.map((x) => x)}</h1>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search:</label>
      <label id="search" type="text" />
    </div>
  );
}

export default App;
