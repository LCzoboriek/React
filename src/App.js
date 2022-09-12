import * as React from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(""); // Remember that in the useState function, the first const is the current state, and the second part is the state to be updating the current state. So in this case, whatever
  //is typed is set to setSearchTerm, which then updates searchTerm
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

  const handleSearch = (event) => {
    //We are now instantiating the searchTerms state here, as we want to filter the stories within app,
    //which is then passed up via a callback handler, from the search component to the app component (child to parent)
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  }); // We then use the filter function, which takes the argument of story as its parameter, and returns itself if the attribute of title, includes the updated state from above
  console.log("App renders");
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />
      {/* Here is where the props is set  */}

      <hr />

      <List list={searchedStories} />
      {/* We then update the html/jsx entry to now display only the searched stories, which is set via the above methods/functions */}
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
    {/* Call back handler here, this is done via the onChange state handler, which passes up the props from the part on line 34 */}
  </div>
);

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
