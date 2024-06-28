import React from 'react'

function ChildComponent({message,onRespond}) {

    const handleClick = () =>{
        onRespond("Esta es la respuesta del hijo");
    }
  return (
    <>
    <div className='child'>
    <h1>Child Component</h1>
    <p>Hola, soy el hijo!</p>
    <p>{message}</p>
    <button onClick={handleClick}>Enviar respuesta al padre</button>
    </div>
    </>
  )
}

export default ChildComponent
