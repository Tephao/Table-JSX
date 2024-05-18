function Table({lista}) {

    return (
<>
    <table>
            <thead>
                <th>NOME</th>
                <th>SOBRENOME</th>
                <th>IDADE</th>
                </thead>
            <tbody>
                {
                    lista.map((item) =>{
                        return (
                            <tr>
                    <td>item.nome</td>
                    <td>item.sobrenome</td>
                    <td>item.idade</td>
                </tr>
                        )
                    })
                }
                <tr>
                    <td>Stepherson</td>
                    <td>Borges</td>
                    <td>37</td>
                </tr>
                <tr>
                    <td>Michelly</td>
                    <td>Araujo</td>
                    <td>37</td>
                </tr>
            </tbody>
        </table>

        </>
)
}


export default Table;