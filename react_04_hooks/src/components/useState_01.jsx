import { useState } from 'react';


export default () => {

    const [valor, setValor] = useState(0);

    function Aumentar() {
        setValor(o => o + 1);
    }

    function Diminuir() {
        setValor(o => o - 1);
    }

    return (
        <>
            <h4>{valor}</h4>
            <button onClick={Diminuir}>Diminuir</button>
            <button onClick={Aumentar}>Aumentar</button>
        </>
    )
}