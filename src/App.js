import "./App.css";

function App() {
  const welcome = {
    greeting: "Hey",
    title: "React",
  };

  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search:</label>
      <label id="search" type="text" />
    </div>
  );
}

export default App;
