function Input({ lists, setLists }) {
  const [value, setValue] = React.useState("");

  function SaveChange(e) {
    setValue(e.target.value);
  }

  function AddTodo() {
    if (!value.trim()) return; // avoid empty todos
    const newValue = [...lists, value];
    setLists(newValue);
    setValue("");
  }

  return (
    <div className="input-page">
      <input
        placeholder="enter your to-do"
        onChange={SaveChange}
        value={value}
      />
      <button onClick={AddTodo}>add</button>
    </div>
  );
}

function TodoS({ todo }) {
  return (
    <div className="display-page">
      <div>
        {todo} <button>delete</button>
      </div>
    </div>
  );
}

function DisplayTodo({ lists }) {
  return (
    <>
      {lists.map((list, index) => (
        <TodoS todo={list} key={index} />
      ))}
    </>
  );
}

function App() {
  const [lists, setLists] = React.useState([]);

  return (
    <>
      <Input lists={lists} setLists={setLists} />
      <DisplayTodo lists={lists} />
    </>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.render(<App />, container);
