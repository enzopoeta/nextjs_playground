// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react




var valor1 = "Teste de intepolacao no react";

function teste(input){
    return "voce entrou como input o valor " + input;
}

function Lista(max_val) {
    
    var lista=[];

    for (var i = 0; i <= max_val; i++){

        lista.push(<li key={i}>{i},</li>);

    }

    return lista;

}



// converncao de nome do componente igual ao java
const Interpolacao = function sp2() { // o nome do arquivo nao precisa ser o mesmo da funcao

    var valor2 = "valor interno a a funcao";

    return (
        <> {/* como no vue os jsx precisa estar contido numa enclosing tag.. para nao "gastar um div atoa podemos usar a sintaxe de fragment"*/}
            <h1> SamplePage2!!! </h1>
            <h2>{ valor1 }</h2>
            <h2>{valor2 }</h2>
            <h2>{teste("um valor")} {teste("outrovalor")}</h2>
            <br />
            <div>
                {Lista(15)}
            </div>

        </>
    )
} 


export default Interpolacao