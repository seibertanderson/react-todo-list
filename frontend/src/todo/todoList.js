import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>{todo.createdAt}</td>
                <td>{todo.done ? 'Sim' : 'Não'}</td>
                <td>{todo.finishAt}</td>
                <td>
                    <IconButton hide={todo.done} style='success' icon='check' onClick={() => { props.handleMarkAsDone(todo) }}></IconButton>
                    <IconButton hide={!todo.done} style='warning' icon='undo' onClick={() => { props.handleMarkAsPending(todo) }}></IconButton>
                    <IconButton style='danger' icon="trash-o" onClick={() => { props.handleRemove(todo) }}></IconButton>
                </td>
            </tr>
        ));
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Criado em</th>
                    <th>Concluído</th>
                    <th>Concluído em</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}