// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react

// ppara importar um css global no next e preciso usar o arquivo _app.js
// neste caso estamos usando o estilo react para utilizacao escopada de CCs
// a importacao e global mas existem seletores expecificos para css dos componentes


// converncao de nome do componente igual ao java
const UsingCssPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao


 
    return (
        <div className="using_css">
            <div className="red"><h1>Red</h1></div>
            <div className="blue"><h1>Blue</h1></div>
            <div className="white"><h1>White</h1></div>
        </div>
    )
}





export default UsingCssPage