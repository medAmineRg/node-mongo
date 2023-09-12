import Form from "./component/Form";
import TodoList from "./component/TodoList";

export default function Home() {
  return (
    <div>
      <TodoList />
      <Form></Form>
    </div>
  );
}
