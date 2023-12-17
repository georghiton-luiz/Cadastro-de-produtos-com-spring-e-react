const FormComponent = ({botao, eventoTeclado, cadastrar, obj, cancelar}) => {
  return (
    <>
      <form>
        <h2>Produtos</h2>
        <input
          className="form-control"
          onChange={eventoTeclado}
          name="name"
          type="text"
          placeholder="Nome"
          value={obj.name}
        />
        <input
          className="form-control"
          onChange={eventoTeclado}
          name="marca"
          type="text"
          placeholder="Marca"
          value={obj.marca}
        />

        {botao ? (
          <input
            className="btn btn-primary"
            type="button"
            value="Cadastrar"
            onClick={cadastrar}
          />
        ) : (
          <div>
            <input className="btn btn-warning" type="button" value="Alterar" />
            <input className="btn btn-danger" type="button" value="Remover" />
            <input
              className="btn btn-secondary"
              type="button"
              value="Cancelar"
              onClick={cancelar}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default FormComponent;
