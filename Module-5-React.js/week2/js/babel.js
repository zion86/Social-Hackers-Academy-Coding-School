class List extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: [
        {
          id: 0,
          description: "Get out of bed",
          deadline: "2017-09-11"
        },
        {
          id: 1,
          description: "Brush teeth",
          deadline: "2017-09-10"
        },
        {
          id: 2,
          description: "Eat breakfast",
          deadline: "2017-09-09"
        }
      ],
      doneItemIds: [0]
    };
  }

  toggle = e => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    const clickedItemId = this.state.todoList.find(
      todo => todo.description === value
    ).id;

    if (isChecked) {
      this.setState(prevState => ({
        doneItemIds: [...prevState.doneItemIds, clickedItemId]
      }));
    } else {
      this.setState(prevState => ({
        doneItemIds: prevState.doneItemIds.filter(
          itemId => itemId !== clickedItemId
        )
      }));
    }
  };

  render() {
    const { todoList, doneItemIds } = this.state;
    // console.log("aaa", doneItemIds);
    const product_list = todoList.map(itemToDo => (
      <div className="todo-list__item" key={itemToDo.id}>
        <input
          type="checkbox"
          value={itemToDo.description}
          checked={doneItemIds.includes(itemToDo.id)}
          onChange={this.toggle}
        />
        {itemToDo.description} {itemToDo.deadline}
      </div>
    ));

    const selectedItemDesc = this.state.todoList
      .filter(todoItem => doneItemIds.includes(todoItem.id))
      .map(todoItem => todoItem.description)
      .join(", ");
    return (
      <div className="todo-list">
        {product_list}
        <div className="todo-list__selected">
          <p>
            Selected todo items:{" "}
            {selectedItemDesc.length ? selectedItemDesc : "... empty list"}
          </p>
        </div>
      </div>
    );
  }
}

// -------- //
// MAIN APP //
// -------- //

const App = () => <List />;

// ---------- //
// RENDER DOM //
// ---------- //

ReactDOM.render(<App />, document.getElementById("root"));
