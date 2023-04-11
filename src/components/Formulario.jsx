import React from "react";
import GrupoInput from "./GrupoInput";

export const Formulario = (props) => {
  const [data, setData] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  function handleAdicionarNegociacao() {
    const negociacao = {
      data: data,
      quantidade: quantidade,
      valor: valor,
    };
    props.quandoAdicionar(negociacao);
  }
  return (
    <form className="form container">
      <div className="row">
        <GrupoInput label="Data" id="data" type="text" />
        <GrupoInput label="Quantidade" id="quantidade" type="number" />
        <GrupoInput label="Valor" id="valor" type="number" step="0.01" />

        <div className="col-1 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" type="button">
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
};
