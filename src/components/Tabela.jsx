import React, { useState } from "react";

<div class="my-5">
  <table class="table table-hover table-bordered">
    <thead class="table-primary">
      <tr>
        <th>DATA</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
        <th>VOLUME</th>
      </tr>
    </thead>

    <tbody>
      {props.negociacoes.map((negociacao, index) => (
        <tr key={index}>
          <td>{negociacao.data}</td>
          <td>{negociacao.quantidade}</td>
          <td>R$ {negociacao.valor}</td>
          <td>
            R$ {parseFloat(negociacao.valor) * parseInt(negociacao.quantidade)}
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"></td>
        <td>{totalizador()}</td>
      </tr>
    </tfoot>
  </table>
</div>;
