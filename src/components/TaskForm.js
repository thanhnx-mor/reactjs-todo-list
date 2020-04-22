import React, { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true,
        }

    }


    componentWillMount() {
        if ( this.props.task ) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if ( nextProps && nextProps.task ) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            })
        }
        if ( nextProps && !nextProps.task ) {
            this.setState({
                id: '',
                name: '',
                status: true,
            })
        }
    }
    /*
        static getDerivedStateFromProps(props, state) {
             if (props.toDoSelected !== state.toDoSelected) {
                 return {
                     toDoSelected: props.toDoSelected,
                     name: props.toDoSelected.name,
                 }
             }
            return
         };*/

    onHandleChangeData = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if ( name === 'status' ) {
            value === 'false' ? value = false : value = true
        }
        this.setState({
            [name]: value
        })
       /* let toDoSelected = this.state.toDoSelected
        toDoSelected[e.target.name] = e.target.value
        this.setState(({
            toDoSelected
        }))*/
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.resetData()
        this.onCloseForm()
    }
    onCloseForm = () => {
        this.props.onCloseForm()
    }
    resetData = () => {
        this.setState({
            name: '',
            status: true,
            id: ''
        })
    }
    render() {
        const {name, status, id} = this.state

        return (
            <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{ id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' }</h3>
                        <span className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        >
                            close
                        </span>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" name="name" className="form-control" value={name} onChange={ this.onHandleChangeData } />
                            </div>
                            <label>Trạng Thái :</label>
                            <select
                                name="status"
                                className="form-control"
                                required="required"
                                onChange={ this.onHandleChangeData }
                                value={status}
                            >
                                <option
                                    value={true}
                                >Kích Hoạt
                                </option>
                                <option
                                    value={false}
                                >Ẩn
                                </option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                    Lưu lai
                                </button>&nbsp;
                                <button type="submit" className="btn btn-danger"
                                        onClick={this.resetData}
                                >
                                    Hủy Bỏ
                                </button>
                            </div>
                        </form>
                    </div>
    </div>
        )
    }
}

export default TaskForm;