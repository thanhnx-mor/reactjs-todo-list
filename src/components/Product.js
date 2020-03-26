import React, { Component } from "react";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            gender: 1,
            lang: "vi",
            is_remember: true
        }
    }

    onHandleChangeData = (e) => {
        this.setState({
           [e.target.name]:  e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }
    submitFormData = (e) => {
        e.preventDefault();
        console.log(this.state, 'this.state')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Form
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={ this.submitFormData }>

                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text"
                                               className="form-control"
                                               name="username" id="username"
                                               placeholder="Username..."
                                               value={ this.state.username }
                                               onChange={ this.onHandleChangeData }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Password..."
                                            value={ this.state.password }
                                            onChange={ this.onHandleChangeData }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <select
                                            name="gender"
                                            id="gender"
                                            className="form-control"
                                            onChange={ this.onHandleChangeData }
                                            value={ this.state.gender }
                                        >
                                            <option value={0} selected={ this.state.gender == 0 }> Male</option>
                                            <option value={1} selected={ this.state.gender == 1 }> Female</option>
                                            <option value={2} selected={ this.state.gender == 2 }> Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="lang"
                                                    id="inputID"
                                                    value="en"
                                                    checked={this.state.lang === 'en' ? 'checked' : ''}
                                                    onChange={ this.onHandleChangeData }

                                                />
                                                English
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="lang"
                                                    id="inputID"
                                                    value="vi"
                                                    checked={this.state.lang === 'vi' ? 'checked' : ''}
                                                    onChange={ this.onHandleChangeData }

                                                />
                                                Vietnamese
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                Ghi nhớ mật khẩu
                                            </label>
                                            <br/>
                                            <input
                                                type="checkbox"
                                                checked={this.state.is_remember}
                                                name="is_remember"
                                                onChange={ this.onHandleChangeData }
                                            />
                                        </div>
                                    </div>
                                    <br/>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product