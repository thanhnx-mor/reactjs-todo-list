import React, { Component } from "react";
import { connect } from "react-redux"
import * as actions from "../actions";
import {showForm, editTask} from "../actions";

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
        if ( this.props.taskEditing ) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if ( nextProps && nextProps.taskEditing ) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            })
        }
        if ( nextProps && !nextProps.taskEditing ) {
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
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if ( !this.state.id ) {
            this.props.onAddTask(this.state)
            this.resetData()
        } else {
            this.props.onUpdateTask(this.state)
            this.props.editTask({
                id: '',
                name: '',
                status: true
            })
        }
        this.onCloseForm()
    }
    onCloseForm = () => {
        this.props.closeForm(false)
    }
    resetData = () => {
        this.setState({
            name: '',
            status: true,
            id: ''
        })
    }
    onClearData = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            status: true,
        })
    }
    render() {
        const {name, status, id} = this.state
        var { isShowForm } = this.props
        if( !isShowForm ) return '';
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
                                  onClick={this.onClearData}
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
const mapStateToProps = state => {
    return {
        taskEditing: state.taskEditing,
        isShowForm: state.statusReducer.isShowForm
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onUpdateTask: (task) => {
            dispatch(actions.updateTask(task))
        },
        closeForm: (status) => {
            dispatch(showForm(status))
        },
        editTask: (task) => {
            dispatch(editTask(task))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);