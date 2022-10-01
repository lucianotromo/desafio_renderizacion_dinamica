const Listado = ({ Listado })=> {
    return (
        <ul>
            {
                Listado.map((colaborador)=>{
                    return (
                        <li key={colaborador.id}> {colaborador.nombre} - {colaborador.correo} </li>
                    )
                })
            }
        </ul>
    )
}

export default Listado