import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
function App() {
  return (
   <>
   <Navbar title="TextUtils" home="Home" about="About Us"/>
    {/* <Textform title="Enter Text To Analyze"/> */}
    <About/>
   </>
  );
}

export default App;

