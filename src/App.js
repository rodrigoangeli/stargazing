import React from "react";
import Titlebar from "./Components/Titlebar";
import Main from "./Pages/Main";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Titlebar></Titlebar>
      {/*   <Cadastro></Cadastro>
      <Login></Login> */}
      <Main></Main>*/}
    </div>
  );
}

export default App;
