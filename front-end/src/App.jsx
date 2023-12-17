import { useState } from "react";
import "./App.css"
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";


function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(false)

  return (
    <>
      <FormComponent botao={btnCadastrar} />
      <TableComponent />
    </>
  );
}

export default App;
