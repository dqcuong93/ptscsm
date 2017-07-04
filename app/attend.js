import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var Form = React.createClass({
    render: function () {
        return (
            <form method="post" action="/attend">
                <h2 className="card-inside-title">Floating Label Examples</h2>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="stockNumber" autoFocus/>
                                <label className="form-label">Stock number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="personalPassportId"/>
                                <label className="form-label">Personal ID/Passport number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="name"/>
                                <label className="form-label">Stockholder name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <button className="btn btn-primary btn-lg" onClick={this.props.getData}>Submit</button>
                    </div>
                </div>
            </form>
        )
    }
});

var Table = React.createClass({
    render: function () {
        return (
            <table data-toggle="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                </tr>
                </thead>
                <tbody>
                <tr></tr>
                </tbody>
            </table>
        )
    }
});

var Content = React.createClass({
        getData: function () {
            axios.post('/attend').then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        },
        render: function () {
            return (
                <div>
                    <Form getData={this.getData}/>
                    <div className="row clearfix">
                        <div className="col-sm-12">
                            <Table/>
                        </div>
                    </div>
                </div>
            )
        }
    })
;

ReactDOM.render(
    <Content/>, document.getElementById('content')
);