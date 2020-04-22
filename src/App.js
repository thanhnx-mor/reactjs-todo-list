import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import classnames from "classnames";
import _ from 'lodash';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: 'name',
        value: ''
      },
      toDoSelected: {
        id: 0,
        name: '',
        status: 0,
        is_edit: true,
      }
    }
  }
  componentWillMount() {
    if ( localStorage && localStorage.getItem('tasks') ) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      })
    }
  }
  onGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'Hoc lap PHP',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Hoc lap Javascript',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Hoc lap HTML',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Hoc lap CSS',
        status: false
      },
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  s4() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
  }
  generateID() {
    return this.s4() + this.s4() +  this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4();
  }
  onHandleEditTodo = (currentTodo) => {
    this.setState({
      toDoSelected: currentTodo
    })
  }
  onToggleForm = () => {
    let { isDisplayForm, taskEditing } = this.state
    if ( isDisplayForm && taskEditing !== null ) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      })
    } else {
      this.setState({
        isDisplayForm: ! this.state.isDisplayForm,
        taskEditing: null
      })
    }
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: ! this.state.isDisplayForm
    })
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  onUpdateStatus = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id);
    tasks[index].status = !tasks[index].status
    this.setState({
      tasks: tasks
    })
    this.updateLocalStorage(tasks)
  }
  onDeleteTask = (id) => {
    let { tasks } =  this.state
    let index = this.findIndex(id);
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
    this.updateLocalStorage(tasks)
  }
  onUpdateTask = (id) => {
    let { tasks } =  this.state
    let index = this.findIndex(id)
    let taskEditing = tasks[index]
    this.setState({
      taskEditing: taskEditing
    })
    this.onShowForm()
  }
  findIndex = (id) => {
    let { tasks } = this.state
    return tasks.findIndex(item => item.id === id)
  }
  handleSubmit = (data) => {
    let { tasks } = this.state
    if ( data.id === '' ) {
      data.id = this.generateID();
      tasks.push(data)
      this.setState({
        tasks: tasks
      })
    } else {
      let index = this.findIndex(data.id)
      tasks[index] = data
    }
    this.setState({
      tasks: tasks,
    })
    this.updateLocalStorage(tasks)
  }
  updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  onFilter = (filterName, filterStatus) => {
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }
  onSearch = (value) => {
    this.setState({
      keyword: value
    })
  }
  onSort = (value) => {
    this.setState({
      sort: value
    })
  }

  onHandleDelete = (toDoID) => {
    console.log(toDoID, 'toDoID');
  };
  /*toDoElm = () => {
    return (
      <React.Fragment>
        {this.state.listTodo.map((item, key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{ item.name }</td>
            <td className="text-center">
                        <span
                          className={classnames('label', {
                            'label-success': item.status == 1,
                            'label-warning': item.status == 0,
                          })}
                        >
                            { item.status == 1 ? 'Kích hoạt' : 'Ẩn' }
                        </span>
            </td>
            <td className="text-center">
              <button
                type="button"
                className="btn btn-warning"
                onClick={ () => this.onHandleEditTodo(item) }
              >
                <span className="fa fa-pencil mr-5" />Sửa
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={ () => this.onHandleDelete(item.id) }
              >
                <span className="fa fa-trash mr-5" />Xóa
              </button>
            </td>
          </tr>
        ))}
      </React.Fragment>
    )
  }*/
  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sort } = this.state
    if ( filter ) {
      if ( filter.name ) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if ( filter.status === -1 ) {
          return tasks
        } else {
          return task.status === (filter.status === 1 ? true : false)
        }
      })
    }
    if ( keyword ) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1
      })
    }

    if ( sort.by === 'name' ) {
      tasks = tasks.sort((a, b) => {
        if (a.name > b.name ) return sort.value
        else if ( a.name < b.name ) return  -sort.value
        else return 0
      })
    } else {
      tasks = tasks.sort((a, b) => {
        if (a.status > b.status ) return -sort.value
        else if ( a.status < b.status ) return  sort.value
        else return 0
      })
    }

    var elmTaskForm = isDisplayForm ?
      <TaskForm
      onCloseForm={this.onCloseForm}
      toDoSelected={this.state.toDoSelected}
      handleSubmit={this.handleSubmit}
      task={taskEditing}
    /> : '' 
    return (
    <div className="container">
      <div className="text-center ">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row mb-15">
        <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
          {elmTaskForm}
        </div>
        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}
        >
          <div className="row">
            <button type="button" className="btn btn-primary ml-15 mr-5"
                    onClick={ this.onToggleForm }
            >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger ml-15" onClick={ this.onGenerateData }>
              <span className="fa fa-plus mr-5" />Generate data
            </button>
          </div>
          <Control
            onSearch={ this.onSearch }
            onSort={ this.onSort }
          />
          <TaskList
            tasks={ tasks }
            onUpdateStatus={this.onUpdateStatus}
            onDeleteTask={this.onDeleteTask}
            onUpdateTask={this.onUpdateTask}
            onFilter={this.onFilter}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
