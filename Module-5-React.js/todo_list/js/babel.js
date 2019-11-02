// ---------- //
// COMPONENST //
// ---------- //

const List = ({ id, description, deadlineDate }) => {
  let todoList = [
    {
      id: 1,
      description: "Get out of bed,",
      deadlineDate: "Wed Sep 13 2017"
    },
    {
      id: 2,
      description: "Brush teeth,",
      deadlineDate: "Thu Sep 14 2017"
    },
    {
      id: 3,
      description: "Eat breakfast,",
      deadlineDate: "Fri Sep 15 2017"
    }
  ];
  return (
    <ul className="todo-list">
      <h2 className="todo-list__header">ToDo list:</h2>
      {todoList.map(el => (
        <li className="todo-list__item" key={el.id}>
          {el.description}{" "}
          <span className="todo-list__item todo-list__item--red">
            {el.deadlineDate}
          </span>
        </li>
      ))}
    </ul>
  );
};

// -------- //
// MAIN APP //
// -------- //

const App = () => <List />;

// ---------- //
// RENDER DOM //
// ---------- //

ReactDOM.render(<App />, document.getElementById("root"));
