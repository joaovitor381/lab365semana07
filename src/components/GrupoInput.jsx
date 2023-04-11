import React, { useState } from "react";

function GrupoInput() {
  const [quantidade, setQuantidade] = useState(1);

  function handleQuantidadeChange(event) {
    setQuantidade(parseInt(event.target.value));
  }

  return (
    <div className="form-group">
      <label htmlFor="quantidade">Quantidade</label>
      <input
        type="number"
        min="1"
        step="1"
        id="quantidade"
        className="form-control"
        value={quantidade}
        onChange={handleQuantidadeChange}
        required
      />
    </div>
  );
}
