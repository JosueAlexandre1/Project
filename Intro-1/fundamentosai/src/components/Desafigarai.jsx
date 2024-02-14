const DesafiGarai = () =>{
    const num1 = 56;
    const num2 = 2;
    const handleSoma =() =>{
        const resultado = num1 + num2;
        console.log(resultado);
    }
    return(
        <>
            <div>
                <p>{num1}</p>
                <p>{num2}</p>
                <button onClick = {handleSoma}>Some os numeros!</button>
            </div>
        </>
    )
}

export default DesafiGarai;