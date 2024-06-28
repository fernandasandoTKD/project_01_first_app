import React from 'react'
import ChildComponent from './ChildComponent'


export const ParentComponent = () => {
    /* Se define un estado local */
    // Defino la varible y el mpetodo de cambio de estado
    const [message, setMessage] = React.useState("Hola desde el componente padre");
    const [response, setResponse]= React.useState();

    // función para recibir la respuesta del hijo
    const hadleChildResponse = (childMessage) =>{
        setResponse(childMessage);
    }
  return (
    <>
    <div className='parent'>
        <h2>Parent Component</h2>
        <ChildComponent message={message} onRespond={hadleChildResponse}>
        </ChildComponent>
        {response}
    </div>
    </>
  )
}
