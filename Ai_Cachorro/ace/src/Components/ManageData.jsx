import { useState } from "react";

const ManageData = () => {
    let data = 45;

    const [numero,setNumero] = useState(data);

    const decrescent = () =>{
        setNumero(numero-1);
    }

  return (
    <>
    <div>
        <h2>Valor: {numero}</h2>
    </div>
    <div>
        <button onClick= {decrescent}>Decresça um número!</button>
    </div>
    </>
  )
}

export default ManageData