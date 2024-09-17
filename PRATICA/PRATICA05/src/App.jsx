import Home from "./components/pages/Home";
import Perfil from "./components/pages/Perfil";
import Login from "./components/pages/Login";

function App(){
const index = 1
  
  return (
    <>
      {index == 1 && <Login/>}
      {index == 2 && <Home/>}
      {index == 3 && <Perfil/>}
    </>
  )
}

export default App;