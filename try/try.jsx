// import React from "react";

function ClickedBtb() {
  const [text, setText] = React.useState('');
  function Display(e) {
    setText(e.target.value);
  }
  function Reset(){
    setText('')
  }
  function Example(){
    setText('teumay')
  }
  return (
    <>
      <input placeholder="enter your name" onChange={Display} value={text}/>
      <p>helllo {text}</p>
      <button onClick={Reset}>reset</button>
      <button onClick={Example}>example</button>
    </>
  );
}

function App() {
  return <ClickedBtb />;
}

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container); // ✅ new API
root.render(<App />);
