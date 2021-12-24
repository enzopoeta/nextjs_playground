// estrutura básica de uma página Next ( mesma de um componente react)
import React, { useState } from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react


// converncao de nome do componente igual ao java
const Stateful1Page = function () { // o nome do arquivo nao precisa ser o mesmo da funcao

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#fff',
        height: '100vh'
    }

    /* 
        setar variaveis comuns para salvar o estado de um componente nao funciona e para isso e preciso usar a chamada da funcao
        usestate lidar com os campos do array que ela retorna o primeiro que e o campo do valor em si e o segundo
        que e uma funcao utilizada para atualizar este valor
    
    */
    const x_data = useState(0);// estamos passando o zero como valro inicial da variavel
    let x = x_data[0];// estado
    let setX = x_data[1];//setter
    
    
    const [y,setY] = useState(0);// esta e uma versao sucinta de fazer o que fizemos com x
    //let y = y_data[0];// estado
    //let setY= y_data[1];//setter


    // funcao que recupera o valor do evento mousemove e passa para o estado do componente
    function mouseMove(e) {
        setX(e.clientX);
        setY(e.clientY);
    }
 
 
    return (
        <>
            
            <div style={styles} onMouseMove={mouseMove}>
                <h1> Mouse coordinates</h1>
                <span><h2> X : {x} </h2></span>
                <span><h2> Y : {y} </h2></span>
            </div>
        </>
    )
}





export default Stateful1Page