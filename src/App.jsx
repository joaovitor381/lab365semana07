import React, { useState } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Tabela } from "./components/Tabela";

function totalizador() {
  const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
    return (
      totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
    );
  }, 0);

  return valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export const App = () => {
  const [negociacoes, setNegociacoes] = useState([]);
  const [volumeTotal, setVolumeTotal] = useState(0);

  function AdicionarNegociacao(negociacao) {
    setNegociacoes([...negociacoes, negociacao]);
    setVolumeTotal(calcularVolumeTotal([...negociacoes, negociacao]));

    return (
      <div>
        <Header titulo="Negociações" />
        <div className="container">
          <Formulario quandoAdicionar={setNegociacoes} />
          <Tabela negociacoes={negociacoes} />
        </div>
      </div>
    );
  }
};
