import { useEffect, useState } from "react";
import "./App.css";

//Components
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

const App = () => {
  //Objeto produto
  const produto = {
    id: 0,
    name: "",
    marca: "",
  };

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  //Cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert("Produto cadstrado com sucesso!");
          limparFormulario();
        }
      });
  };

  //Remover produto
  const remover = () => {
    fetch(`http://localhost:8080/remover/${objProduto.id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        //Menssagem
        alert(retorno_convertido.mensagem)

        //Copia do vero de produtos
        let vetorTemp = [...produtos]

        //Indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        //Limpar formulário
        limparFormulario();
      });
  };

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  };

  //Selecionar produto
  const selecionarProduto = (i) => {
    setObjProduto(produtos[i]);
    setBtnCadastrar(false);
  };

  //Retorno
  return (
    <>
      <FormComponent
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
        cancelar={limparFormulario}
        remover={remover}
      />
      <TableComponent vetor={produtos} selecionar={selecionarProduto} />
    </>
  );
};

export default App;
