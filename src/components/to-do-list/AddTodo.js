import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoSelected: {
                name: '',
                statue: ''
            },
            name: '',
        }

    }

    static getDerivedStateFromProps(props, state) {
        if (props.toDoSelected !== state.toDoSelected) {
            return {
                toDoSelected: props.toDoSelected,
                name: props.toDoSelected.name,
            }
        }
        return;
    }

    onHandleChangeData = (e) => {
        let toDoSelected = this.state.toDoSelected
        toDoSelected[e.target.name] = e.target.value
        this.setState(({
            toDoSelected
        }))
    }
    handleUpdate = (e) => {
        e.preventDefault()
        this.props.update(this.state.toDoSelected)
    }
    render() {
        const {name, toDoSelected} = this.state

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" name="name" className="form-control" value={toDoSelected.name} onChange={ this.onHandleChangeData } />
                            </div>
                            <label>Trạng Thái :</label>
                            <select
                                className="form-control"
                                required="required"
                                onChange={ this.onHandleChangeData }
                            >
                                <option
                                    value={toDoSelected.status}
                                    selected={toDoSelected.status === 1}

                                >Kích Hoạt
                                </option>
                                <option
                                    value={toDoSelected.status}
                                    selected={toDoSelected.status === 0}
                                >Ẩn
                                </option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" onClick={this.handleUpdate}>Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;