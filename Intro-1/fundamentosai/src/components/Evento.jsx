const Evento = () =>{
    const handleMyEvent = () =>{
        console.log("Pirocossauro");
    }
   return(
        <>
        <div>
            <div>
                <button onClick = {handleMyEvent}>Botão do Caio</button>
            </div>
            <div>
                <button onClick = { () => console.log("We are back baby") }>Botão do Levir</button>
            </div>
        </div>
        </>
    )
}

export default Evento;