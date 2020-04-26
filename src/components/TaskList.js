import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux"
import { filterTask } from "../actions";
import sortReducer from "../reducers/sort";

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  onChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.props.filterTask({
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? parseInt(value) : this.state.filterStatus
    })
    this.setState({
      [name]: value
    })

  }
  render() {
    var { tasks, filter, sort, keywordSearch } =  this.props;
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
    if ( keywordSearch ) {
      console.log('aca')
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keywordSearch) !== -1
      })
    }
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
      />
    })
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" name="filterName" onChange={this.onChange}/>
              </td>
              <td>
                <select className="form-control" name="filterStatus" onChange={this.onChange}>
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td>
              </td>
            </tr>
            {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch,  props) => {
  return {
    filterTask: (filterName, filterStatus) => {
      dispatch(filterTask(filterName, filterStatus))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer,
    filter: state.filterTable.filter,
    sort: state.sortReducer,
    keywordSearch: state.filterTable.keywordSearch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)