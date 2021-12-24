import { Component } from 'react';
import Counter from '../../components/class_based/Counter';

export default class ClassBasedComponentPage extends Component {



    render() { // o metodo render de component e quem renderiza tudo em um componente class based

        return (
            <>
                <h1>Class based component</h1>
                <Counter initValue={100}/>
            </>
        )
    }



}