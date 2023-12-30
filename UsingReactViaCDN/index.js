const child = React.createElement("p", {}, "This is child");
const div = React.createElement(
  "div",
  { className: "text" },
  //   "Hello from rishav, i am inside react now"
  child
);

// const div = <div className="text">Hello 2</div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
