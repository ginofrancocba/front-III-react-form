import { useState } from 'react'
import Form from './Form.jsx'
import './App.css'

function App() {

  return (
    <>
    <h1>Bienvenido!!!</h1>
    <h2>¡¡¡ Puedes realizar tu pedido aquí !!! </h2>
    <Form />
    </>
  )
}

export default App

// Supongamos que queremos mostrar la pantalla de una aplicación donde solicitamos un pedido de pizza.
// Queremos que el pedido se cargue solo 2 segundos después de montar el componente.
// Para ello, deberemos analizar cómo utilizar el método setTimeout() dentro de useEffect() utilizando props. 
// Queremos que, cuando se actualice el componente, se imprima en la consola que el componente fue realmente actualizado.
// Por último, necesitaremos un botón que, al ser presionado, genere una "alerta" informando que el pedido fue cancelado, antes de desmontar el componente.
