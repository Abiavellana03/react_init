function getTitle(title) {
  return title;
}
//App component

const list = [
  {
    title: 'React', url: 'app.powerbi.com', author: 'Abi', num_comments: 3, points: 4, objectID: 0
  },
  {
    title: 'React', url: 'app.powerbi.com', author: 'Abi', num_comments: 3, points: 4, objectID: 1
  },
];

function App(){
  return(
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id = "search" type="text"/>

      <hr/>
      <ul>
        {list.map(function(item){
          return <li key={item.objectID}>
            <span>
              <a href = {item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>;
        })}
      </ul>
    </div>
  );
}

export default App;

//htmlFor