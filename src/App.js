import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) ?? initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]); // When the dependency array attribute/variable changes, it will trigger the side effect localStorage.setItem("search", searchTerm)
  //It works really similarly to a useState, the second part in the arguments is the newly updated variable, and the search is the current state, which gets
  //updated

  return [value, setValue];
};

const App = () => {
  // const [searchTerm, setSearchTerm] = React.useState(
  //   localStorage.getItem("search") ?? "React" //Doing this will sync the browsers storage with reacts state, if the storage exists,
  //   //itll display that, if not, itll default to React, this is a shorthand truthy operation, this however introduces
  //   //a side effect, this is when the React.useEffect hook comines into play to trigger the wanted side-effect, each time the searchTerm changes
  // );

  // React.useEffect(() => {
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  const initialStories = [
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

  const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
    );

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then((result) => {
        setStories(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  //This above makes the list stateful, making it dynamic and to be added to
  //We also need to make the input field for things to be added dynamic as well
  const [name, setName] = React.useState("");
  //We then add an event handler for the input field along with an attribute for calling the function
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = stories.concat({ name, id: uuidv4() });
    setStories(newList);
    setName("");
  }

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log("App renders");
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <div></div>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search here:</strong>
      </InputWithLabel>
      <br />
      <br />
      <strong>Enter book to add:</strong>
      <input type="text" value={name} onChange={handleChange} />
      {/* Heres where we have added the event handler tag with passing up the name attribute */}
      <button type="button" onClick={handleAdd}>
        Add
      </button>

      <hr />
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <br />
      <span> Author/s: {item.author}</span>
      <br />
      <span>Number of comments: {item.num_comments}</span>
      <br />
      <span>Rating: {item.points} </span>
      <br />
      <span>
        <button type="button" onClick={handleRemoveItem}>
          Dismiss
        </button>
      </span>
    </li>
  );
};
export default App;
