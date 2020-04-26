import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux"
import { sortTable } from "../actions";

class Sort extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    }

  }

  onClick = async (sortBy, sortValue) => {
    await this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    })
    // this.props.onSort( this.state.sort )
    this.props.onHandleSort(this.state.sort)
  }
  render() {
    let { sort } = this.state
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={ () => this.onClick('name', 1) }>
              <a className={ sort.by === 'name' && sort.value === 1 ? 'sort-selected' : '' } role="button" >
                  <span className="fa fa-sort-alpha-asc pr-5">
                    Tên A-Z
                  </span>
              </a>
            </li>
            <li onClick={ () => this.onClick('name', -1) }>
              <a className={ sort.by === 'name' && sort.value === -1 ? 'sort-selected' : '' } role="button">
                  <span className="fa fa-sort-alpha-desc pr-5">
                    Tên Z-A
                  </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={ () => this.onClick('status', 1) } >
              <a className={ sort.by === 'status' && sort.value === 1 ? 'sort-selected' : '' } role="button">Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={ () => this.onClick('status', -1) }>
              <a className={ sort.by === 'status' && sort.value === -1 ? 'sort-selected' : '' } role="button">Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onHandleSort: (sort) => {
      dispatch(sortTable(sort))
    }
  }
}

export default connect(null, mapDispatchToProps)(Sort)