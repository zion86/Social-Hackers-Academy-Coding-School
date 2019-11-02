// ---------- //
// COMPONENST //
// ---------- //

const Circle = ({ color }) => {
  let colors = [
    "yellow",
    "pink",
    "brown",
    "purple",
    "green",
    "grey",
    "red",
    "blue",
    "black"
  ];
  let randomColors = [];
  colors
    .sort(() => {
      return 0.5 - Math.random();
    })
    .forEach(color => randomColors.push(color));

  return (
    <React.Fragment>
      {randomColors.map((color, i) => (
        <div className="circle" key={i} style={{ backgroundColor: color }}>
          {color}
        </div>
      ))}
    </React.Fragment>
  );
};

// -------- //
// MAIN APP //
// -------- //

const App = () => <Circle />;

// ---------- //
// RENDER DOM //
// ---------- //

ReactDOM.render(<App />, document.getElementById("root"));
