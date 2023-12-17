const TableComponent = ({ vetor }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((obj, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{obj.name}</td>
            <td>{obj.marca}</td>
            <td>
              <button className="btn btn-success">Selecionar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
