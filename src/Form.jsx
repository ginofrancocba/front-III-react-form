import { useState, useEffect } from 'react';
import React from 'react';
import './Form.css';

function Form({}){
    const [pedido,setPedido]=useState("");
    const [direccion,setDireccion]=useState("");
    const [telefono,setTelefono]=useState(0);
    const [contador,setContador]=useState(0);
    const [forzador,setForzador]=useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
    };
     
     //se ejecuta solo la primera vez

    useEffect(() => {
        const timerId = setTimeout(() => {
            
        }, 2000);
        console.log("El componente se ah montado")
        alert("Bienvenido!!! Complete los campos para realizar su pedido...")
    },[]);

    //Se ejecuta cada vez que se actualiza el componente

    useEffect (()=>{
        console.log("Cargando pedido")
        });

    //Se ejecuta cuando se actualiza el estado "contador" 

    useEffect(() => {
        console.log("El estado del contador se ah actualizado a " +contador);
    }, [contador]);

    //Funcion para forzar la actualizacion del componente al modificar el valor de un estado.

    function forzadorHandler(){
        setForzador(!forzador);
    }

    return (

    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Ingrese pedido" 
        value={pedido} 
        onChange={(e) => setPedido(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Ingrese dirección" 
        value={direccion} 
        onChange={(e) => setDireccion(e.target.value)} 
        />
        <input 
        type="number" 
        placeholder="Ingrese su telefono" 
        value={telefono} 
        onChange={(e) => setTelefono(e.target.value)} 
        />
          <input 
        type="number" 
        placeholder="contador" 
        value={contador} 
        onChange={(e) => setContador(e.target.value)} 
        />
        <button type="submit">Confirma tu pedido</button>        
    </form>
    
    );
}

export default Form
