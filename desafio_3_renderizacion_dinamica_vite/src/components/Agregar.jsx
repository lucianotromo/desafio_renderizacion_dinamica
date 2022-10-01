const Agregar = ({ submit })=> {
    return (
        <section className="agregar-colaborador">
            <form onSubmit={(e)=> submit(e)}>
                <h3>Agregar colaborador</h3>
                <input type="text" placeholder="Nombre del colaborador" />
                <input type="text" placeholder="Correo del colaborador" />
                <button>Agregar colaborador</button>
            </form>
        </section>
    )
}

export default Agregar 