function Table({ lista }) {

    return (
        <>
            <table>
                <thead>
                    <tr>
                    <th>NOME</th>
                    <th>SOBRENOME</th>
                    <th>IDADE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((item,index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{item.nome}</td>
                                    <td>{item.sobrenome}</td>
                                    <td>{item.idade}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}


export default Table;