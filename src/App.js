import * as React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  console.log("App renders");
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
};

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState(""); // First part is the initial value of the useState, second is the updated state, you set this updated state by
  //having an input section like below, where onChange of the input field, it starts the handleChange function, this then has an event handler, which its value is the target, this value
  //Is then passed onto the above section, and then updates the searchTerm part when no more changes has occured, which then refreshes the section below contained within the <strong> part
  //The process that happens is when the user types into the input field, the input fields change event runs into the event handler, which is below
  const handleChange = (event) => {
    //The handlers logic then uses the events value of the target (in this case searchTerm), and the state updater function (setSearchTerm), to set the updated state.
    setSearchTerm(event.target.value);
  };
  //Afterwards the component re-renders (the component function runs) the updated state becomes the current state (here: searchTerm) and is then rendered onto the screen in JSX, see below where
  //Searching for <strong>{searchTerm}</strong> is, this updates in real time, as the userState updates. When its no longer updating, the component stops re rendering.
  console.log("Search Renders");
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => {
  console.log("list renders");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  console.log("Item renders");
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};

export default App;
