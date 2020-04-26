import React, { Component } from "react";
import { connect } from "react-redux"
import { searchTask } from './../actions/index'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({
      [name]: value
    })
  }
  onSearch = (event) => {
    let { keyword } = this.state
    if(event.charCode == 13){
      this.props.onSearch(keyword)
    }
    this.props.onSearch(keyword)
  }
  render() {
    let { keyword } = this.state
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              onChange={this.onChange}
              onKeyPress={this.onSearch}
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              value={keyword}
            />
            <span className="input-group-btn">
                  <button className="btn btn-primary" type="button"
                  onClick={this.onSearch}
                  >
                    <span className="fa fa-search mr-5" />Tìm
                  </button>
                </span>
          </div>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(searchTask(keyword))
    }

  }
}

export default connect(null, mapDispatchToProps)(Search)