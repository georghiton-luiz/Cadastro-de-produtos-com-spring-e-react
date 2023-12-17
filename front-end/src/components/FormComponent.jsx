const FormComponent = ({botao}) => {
  return (
    <>
      <form>
        <h2>Produtos</h2>
        <input className="form-control" type="text" placeholder="Nome" />
        <input className="form-control" type="text" placeholder="Marca" />

        {
            botao
            ? 
            <input className="btn btn-primary" type="button" value="Cadastrar" />
            : 
            <div>
            <input className="btn btn-warning" type="button" value="Alterar" />
            <input className="btn btn-danger" type="button" value="Remover" />
            <input
                className="btn btn-secondary"
                type="button"
                value="Cancelar"
            />
            </div>
        }
        
      </form>
    </>
  );
};

export default FormComponent;
