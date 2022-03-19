import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Input(props) {
  const [todoText, setTodoText] = useState("");
  const onChangeHandler = (event) => {
    setTodoText(event.target.value);
  };
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      props.addTodo({
        todo: todoText,
        checked: false,
        id: uuidv4(),
      });
      setTodoText("");
    }
  };
  return (
    <input
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
      value={todoText}
      className="Input"
      type="text"
      placeholder="Add todo..."
    />
  );
}
