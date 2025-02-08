import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState ("light") //whether darkmode is enable or not
  const [alert, setAlert] = useState (null);
      const showAlert = (message, type) =>{
        setAlert({
          msg: message,
          type: type,
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
       
      }

  const toggleMode = ()=> {
    if (mode  === 'light')
      {
      setMode( 'dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - Dark-Mode";
    }
      else {
        setMode( 'light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is Enabled", "success");
        document.title = "TextUtils - Light-Mode";
      }

      


  }
  return (
   <>
  
    
   
   {/* <Router>
        <Navbar mode={mode} title="TextUtils" home="Home" about="About Us" toggleMode={toggleMode} />
        <Alert  alert={alert} />
        <Routes>
      
        <Route exact path="/" element={<Textform mode={mode} showAlert={showAlert} title="Enter Text To Analyze" />}/>
        <Route exact path="/about" element={<About />}/>
       
    </Routes>
    </Router> */}

    
        <Navbar mode={mode} title="TextUtils" home="Home" about="About Us" toggleMode={toggleMode} />
        <Alert  alert={alert} />
         
        <Textform mode={mode} showAlert={showAlert} title="Enter Text To Analyze" />
        <About />
       
    


   </>
  );
}

export default App;

