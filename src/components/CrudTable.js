import React from 'react'
import CrudTablaRow from './CrudTablaRow'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (<tr><td colSpan="3">Sin datos</td></tr>) : (data.map((el) => <CrudTablaRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />))}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
