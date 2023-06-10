import "./App.css";
import Slider from "./components/slider/Slider";

function App() {
  const slides = [
    {
      id: 0,
      content: <div className="sliderdiv">Slide 1</div>,
    },
    {
      id: 1,
      content: (
        <div className="sliderdiv">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80" />
        </div>
      ),
    },
    {
      id: 2,
      content: <div className="sliderdiv">Slide 3</div>,
    },
  ];
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
}

export default App;
