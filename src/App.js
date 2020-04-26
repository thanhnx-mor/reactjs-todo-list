import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux"
import {editTask, showForm} from "./actions";
class App extends Component {
  onToggleForm = () => {
    this.props.showForm(true);
    this.props.editTask({
      id: '',
      name: '',
      status: true
    })
  }
  render() {
    var { isShowForm } = this.props
    return (
    <div className="container">
      <div className="text-center ">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row mb-15">
        <div className={isShowForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
          <TaskForm />
        </div>
        <div className={isShowForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}
        >
          <div className="row">
            <button type="button" className="btn btn-primary ml-15 mr-5"
                    onClick={ this.onToggleForm }
            >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
          </div>
          <Control />
          <TaskList />
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isShowForm: state.statusReducer.isShowForm
  }
}
const mapActionToProps = (dispatch, props) => {
  return {
    showForm: (status) => {
      dispatch(showForm(status))
    },
    editTask: (task) => {
      dispatch(editTask(task))
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
