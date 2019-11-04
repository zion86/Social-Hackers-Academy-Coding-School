const mysql = require('mysql');

class TodoModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  load() {
    const selectTodoItems = "SELECT * FROM todo_items";
    this.dbConnection.query(selectTodoItems, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }

  create() {
    // Write code and query to create a new TODO item
    const createNewTodoItem = "INSERT INTO todo_items (text, is_completed, user_id) VALUES (?, ?, ?);";
    this.dbConnection.query(createNewTodoItem, ["Learn CSS", false, 1], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }

  update() {
    // Write code and query to update and existing TODO item
    const updateTodoItem = "UPDATE todo_items SET text = ? WHERE id = ?;";
    this.dbConnection.query(updateTodoItem, ["Learn React", 47], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }

  delete() {
    // Write code and query to delete an existing TODO item
    const deleteTodoItem = "DELETE FROM todo_items WHERE id = ?;";
    this.dbConnection.query(deleteTodoItem, [47], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  
  }

  tagTodoItem() {
    // Write code and query add a tag to a TODO item
    const addTagTodoItem = "INSERT INTO todo_item_tag (todo_item_id, tag_id) VALUES (?, ?);";
    this.dbConnection.query(addTagTodoItem, [46, 1], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }
      
  untagTodoItem() {
    // Write code and query remove a tag from a TODO item
    const untag = "DELETE FROM todo_item_tag WHERE todo_item_id = ? AND tag_id = ?;";
    this.dbConnection.query(untag, [46, 1], (err, result) => {
      if (err) err;
      console.log(result);
    });
  }

  markCompleted() {
    // Write code to mark a TODO item as completed
    const markComp = "UPDATE todo_items SET is_completed = TRUE WHERE id = ?;";
    this.dbConnection.query(markComp, [43], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }
}

const dbConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todo_app'
});

dbConnection.connect(err => {
  if (err != null) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + dbConnection.threadId);

  const todoModel = new TodoModel(dbConnection);
  const commands = process.argv[2];

  switch (commands) {

    case 'load': {
      todoModel.load();
      break;
    }

    case 'create': {
      todoModel.create();
      break;
    }
    
    case 'update': {
      todoModel.update();
      break;
    }

    case 'delete': {
      todoModel.delete();
      break;
    }

    case 'tag': {
      todoModel.tagTodoItem();
      break;
    }

    case 'untag': {
      todoModel.untagTodoItem();
      break;
    }
    case 'mark': {
      todoModel.markCompleted();
      break;
    }
  }

  dbConnection.end();
});