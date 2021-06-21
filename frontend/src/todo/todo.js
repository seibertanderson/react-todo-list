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

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createtAt`).then(resp => console.log(resp.data));
    }

    handleAdd() {
        debugger
        const description = this.state.description;
        axios.post(URL, { description }).then(resp => console.log('funcionou o post'));
        //this.setState({ ...this.state, description: '' })
        console.log('task adicionada')
    };

    handleChange(e) {
        //debugger
        this.setState({ ...this.state, description: e.target.value })
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>

                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}>
                </TodoForm>

                <TodoList></TodoList>
            </div>
        )
    }
}