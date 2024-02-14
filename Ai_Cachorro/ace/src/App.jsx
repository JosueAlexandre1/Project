//Componets
import ManageData from './Components/ManageData'
import ListRender from './Components/listRender'
import CondicionalRender from './Components/CondicionalRender'
import ShowUserName from './Components/ShowUserName'
import Fragments from './Components/Fragments'
import Container from './Components/Container'

//images
import Travis from './assets/download (5).jpg'

//styles
import './App.css'
import { useState } from 'react'





function App() {

  const [nome, setNome] = useState ("Ozzy");
  
  const list = [
    {name : nome, numero : 45122, virgi : false},
    {name : "Maria", numero : 45, virgi : false},
    {name : "Fergus", numero : 66, virgi : true},
  ]

  return(
    <>
      <div>
        <h1>Holy Diver</h1>
      </div>
      <div>
        <img src="/download (3).jpg" alt="homem" />
      </div>
      <div>
        <img src={Travis} alt="Bickle" />
      </div>
        <ManageData/>
  
        <ListRender/>
 
        <CondicionalRender/>

        <Fragments CU = "AI MEU CU" />

        {list.map((item) => (
          <ShowUserName name={item.name} numero={item.numero} virgi={item.virgi} />
        ))}

        <Container>
          <h2>Born to push around</h2>
        </Container>

      <button onClick = {()=> setNome("Crazy Train")}> Musiga </button>

    </>
  )
}

export default App
