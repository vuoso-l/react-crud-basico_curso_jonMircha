import React from 'react'

const CrudTablaRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, constellation, name } = el;
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTablaRow
