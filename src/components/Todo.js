export default function Todo(props) {
  const styles = {
    textDecoration: props.checked ? "line-through" : "none",
  };
  return (
    <div className="Todo">
      <input
        onChange={props.checkTodo}
        checked={props.checked}
        type="checkbox"
        name="todo-check"
        id="todo-check"
      />
      <p style={styles} className="todo-text">
        {props.todo}
      </p>
      <p onClick={props.removeTodo} className="delete-todo">
        X
      </p>
    </div>
  );
}
