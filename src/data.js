import { v4 as uuidv4 } from "uuid";

const todoArray = [
  { todo: "Finish Intro to React", checked: false, id: uuidv4() },
  { todo: "Finish JS 5 on C0D3", checked: false, id: uuidv4() },
  { todo: "Buy a Tesla Model 3 Performance", checked: false, id: uuidv4() },
];

console.log(todoArray);

export default todoArray;
