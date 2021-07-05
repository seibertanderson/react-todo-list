import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(resp =>
            this.setState({ ...this.state, description: '', list: resp.data })
        );
    }

    /** Controla a ação de Inserir */
    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description }).then(resp =>
            this.refresh()
        );
        //this.setState({ ...this.state, description: '' })
        console.log('task adicionada')
    };

    /** Controla a ação de Alterar */
    handleChange(e) {
        //debugger
        this.setState({ ...this.state, description: e.target.value })
    }

    /** Controla a ação de Remover */
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh());
    }

    /** Controla a ação de marcar como concluido */
    handleMarkAsDone(todo) {
        debugger
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true, finishAt: new Date() }).then(resp =>
            this.refresh()
        )
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => {
            this.refresh();
        })
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Lista"></PageHeader>

                {/* <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}>
                </TodoForm> */}

                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}></TodoList>
            </div>
        )
    }
}