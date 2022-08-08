import { useState } from "react"

export default function App() {

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }
    function diminuir() {
        setNumero(numero - 1)
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={aumentar}>Mais</button>
        <button onClick={diminuir}>Menos</button>
    </section>
    
}