import { useState } from "react"


const CondicionalRender = () => {
    const [y] = useState(false);
    
    const [nome, setName] = useState("Josué");
    
    return (
    <>
    <div>
      <div>
        {!y && <h1>Irrá</h1>}
      </div>
      <div>
        {nome === "Josué"? (
          <div>
            <p>{nome} Chico Pombão</p>
          </div>
        ):(
          <div>
            <p>{nome} Rendido</p>
          </div>
        )}
      </div>
      <button onClick = {()=> setName("Levir")}> Mude o Nome </button>
    </div>
    </>
  )
}

export default CondicionalRender