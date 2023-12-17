import { useEffect, useState } from "react";
import "./App.css";

//Components
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

const App = () => {
  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Retorno
  return (
    <>
      <FormComponent botao={btnCadastrar} />
      <TableComponent vetor={produtos} />
    </>
  );
};

export default App;
