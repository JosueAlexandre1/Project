
const ShowUserName = ({name, numero, virgi}) => {
  return (
    <div>
        <li>
            O nome do usuário é: {name}
        </li>
        <li>
            O número é: {numero}
        </li>
        
        {virgi && <p>Esta pessoa é virgem</p>}

    </div>
  )
}

export default ShowUserName