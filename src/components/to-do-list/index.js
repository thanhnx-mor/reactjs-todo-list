import React, { Component } from "react";
import AddTodo from "./AddTodo";

class MainToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo: [
                {
                    id: 0,
                    name: 'Thanh dep trai',
                    status: false,
                },
                {
                    id: 1,
                    name: 'Thanh dep trai 02',
                    status: true,
                },
            ],
            toDoSelected: {
                id: 0,
                name: '',
                status: false,
            }
        }
    }

    onHandleEditTodo = (currentTodo) => {
        this.setState({
            toDoSelected: currentTodo
        })
    };

    onHandleDelete = (toDoID) => {
        console.log(toDoID, 'toDoID');
    };
    toDoElm = () => {
        return (
            <React.Fragment>
                {this.state.listTodo.map((item, key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{ item.name }</td>
                        <td className="text-center">
                        <span className="label label-success">
                          Kích Hoạt
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
    }

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <AddTodo toDoSelected={this.state.toDoSelected} />
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="row">
                            <button type="button" className="btn btn-primary">
                                <span className="fa fa-plus mr-5" />Thêm Công Việc
                            </button>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                                    <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">
                                      <span className="fa fa-search mr-5" />Tìm
                                    </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button">
                                            <span className="fa fa-sort-alpha-asc pr-5">
                                              Tên A-Z
                                            </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                  Tên Z-A
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider" />
                                        <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                                        <li><a role="button">Trạng Thái Ẩn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                        <td />
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option value={-1}>Tất Cả</option>
                                                <option value={0}>Ẩn</option>
                                                <option value={1}>Kích Hoạt</option>
                                            </select>
                                        </td>
                                        <td />
                                    </tr>
                                    {this.toDoElm()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainToDoList;