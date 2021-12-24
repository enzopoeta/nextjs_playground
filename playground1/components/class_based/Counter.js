import { Component } from "react";

export default class CounterComponent extends Component {

    /* nos componentes baseados em classe o estado e armazenado no objeto especia state*/
    state = {
        stateVal1: "1",
        stateVal2: "2",
        counter: this.props.initValue
    }

    // funcao para manipular o estado do contador
    increment() {
        this.setState({counter:this.state.counter+1})
    }


    render() { // o metodo render de component e quem renderiza tudo em um componente class based

        return (
            <>
                <h1>Counter component</h1>
                <h1> testes bestas</h1>
                <h2>{this.props.initValue}</h2> {/* o props vem da instancia de component e nao e passado como parametro como nos componentes funcionais */}
                <h2>{this.state.stateVal2}</h2>
                <br />
                <h1>Contador</h1>
                <h2>Current value</h2><input value={this.state.counter} onChange={(e)=>this.setState({counter: +e.target.value})}></input> {/* set state em componentes baseados em classe */}
                <h2>{this.state.counter}</h2>
                <br />
                <button onClick={() => { this.increment() }}>Incrementar</button> {/* para chamar a funcao tem que ser como arrow function*/ }

            </>
        )
    }



}