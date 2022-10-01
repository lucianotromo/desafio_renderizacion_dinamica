const Header = ({ reset, referencia, buscar })=> {
    return(
       <header>
        <h3>Buscador de colaboradores</h3>
        <input 
        ref={referencia}
        type="text" 
        placeholder="Buscar colaborador"
        onChange={()=> reset()}
        onKeyDown={(e)=> buscar(e)} />
       </header> 
    )
}

export default Header