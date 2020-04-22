import React, { Component } from "react";
import classnames from "classnames";
class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id)
  }
  onUpdateTask = () => {
    this.props.onUpdateTask(this.props.task.id)
  }
  render() {
    var { task, index } = this.props
    return (
      <tr>
        <td>{index+1}</td>
        <td>{task.name}</td>
        <td className="text-center">
            <span className="label">
                Kích Hoạt
            </span>
          <span
            className={classnames('label cursor-pointer', {
              'label-success': task.status,
              'label-warning': !task.status,
            })}
            onClick={ this.onUpdateStatus }
          >
            { task.status ? 'Kích hoạt' : 'Ẩn' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning"
              onClick={ this.onUpdateTask }
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger"
                  onClick={ this.onDeleteTask }
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    )
  }
}
export default TaskItem