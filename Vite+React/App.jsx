import Navbar from "./component/Navbar.jsx";
import "./component/Navbar.css";
import Main from './component/Main.jsx';
import "./component/Main.css";
function App() {
  return (
    <>
      <Navbar/>
      {/* Writing the props */}
      <Main title="Example10000"/>
      {/* <Main/> */}
    </>
  )
}

export default App
