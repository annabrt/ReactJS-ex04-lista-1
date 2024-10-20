function Idade(props){
   
    if (props.Idade>= 18){
       return <p>Você é adulto.</p>
    }
    else{
        <p>Você não é adulto</p>
    }
    return null
   
}
export default Idade