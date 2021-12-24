// estrutura básica de uma página Next ( mesma de um componente react)
import React from 'react'; // no next e nas versoes mais niovas do react nao eh preciso mimportar o react

/*
se tivermos um arquivo css com extensao.module O next entende que este arquivo e especifico para um componente
só que a utilizacao nao e tao imediata ... e preciso importar o arquivo com um nome especifico e usar os 
estilos com a interpolacao
*/
import styles from '../../styles/using_css_local.module.css';


// converncao de nome do componente igual ao java
const UsingCssPage = function () { // o nome do arquivo nao precisa ser o mesmo da funcao


 
    return (
        <div >
            <div className={styles.red}><h1>Red</h1></div>
            <div className={styles.blue}><h1>Blue</h1></div>
            <div className={styles.white}><h1>White</h1></div>
        </div>
    )
}





export default UsingCssPage