import "./App.css";

function App() {
  return (
    <div className="container">
      {" "}
      Scatter Plot
      <img src={require("./images/image1.png")} className="image" />
      Pie Chart
      <img src={require("./images/image2.png")} className="image" />
      Pie Chart using Explode
      <img src={require("./images/image3.png")} className="image" />
      Histogram
      <img src={require("./images/image4.png")} className="image" />
    </div>
  );
}

export default App;
