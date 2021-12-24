import React from "react";

// converncao de nome do componente igual ao java
const ComboComponent = function (props) {
  var list = props.list;
  //console.log("itens", props);

  function renderSelectItems() {
    return list.slice(0, 500).map((cnes, i) => {
      return (
        <option key={i} value={cnes.CNES}>
          {cnes.NOME}
        </option>
      );
    });
  }

  // as propriedades passadas como tag do componente vem dentro deste objeto
  // JSX

  return (
    <>
      {console.log(props)}
      <select name="cnes_combo" onChange={(e) => props.handler(e)}>
        {renderSelectItems()}
      </select>
    </>
  );
};

export default ComboComponent;
