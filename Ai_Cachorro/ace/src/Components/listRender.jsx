import { useState } from "react"

const ListRender = () => {

    const[list, setList] = useState([
        { id: 1, name:"gunsaroses"},
        { id: 2, name:"motorhead"},
        { id: 3, name: "metallica"},
    ]);

    const deleteaband = () =>{
        const randomNumber = Math.floor(Math.random()* 4);
         setList ((prevList) =>{
            return prevList.filter((item) => randomNumber !== item.id);
         });
    };
    return (
    <div>
        <ul>
            {list.map((item) =>(
                <li key= {item.id}>{item.name}</li>
            ))}
        </ul>
        <button onClick = {deleteaband}>Delete a random metal band</button>
    </div>
  )
}

export default ListRender