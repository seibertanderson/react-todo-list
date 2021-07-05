import { React, Link } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">
        {/* <Grid cols="10 9 10 12">
            <input id="description"
                className="form-control"
                placeholder="Adicione uma Tarefa"
                onChange={props.handleChange}
                value={props.description}>
            </input>
        </Grid> */}

        {/* <Grid cols="10 3 2 12">
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}
            ></IconButton>
        </Grid> */}

        <div className='col-sm-10 col-md-10 col-lg-10'>
            <input id="description"
                className="form-control"
                placeholder="Adicione uma Tarefa"
                onChange={props.handleChange}
                value={props.description}>
            </input>
        </div>

        <div className='col-sm-2 col-md-2 col-lg-2'>
            <Link to="/todoadd">
                <button className={'btn btn-primary'}
                    onClick={props.handleAdd}>
                    <i className={'fa fa-search'}></i>
                </button>
            </Link>
            <button className={'btn btn-success'}
                onClick={props.handleAdd}>
                <i className={'fa fa-plus'}></i>
            </button>
        </div>
    </div>
)