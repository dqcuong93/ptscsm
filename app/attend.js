import React from 'react';
import ReactDOM from 'react-dom';

var Form = React.createClass({
    render: function () {
        return (
            <form method="post" action="/attend">
                <h2 className="card-inside-title">Floating Label Examples</h2>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" autoFocus/>
                                <label className="form-label">Stock number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control"/>
                                <label className="form-label">Personal ID/Passport number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control"/>
                                <label className="form-label">Fullname</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <button className="btn btn-primary btn-lg">Submit</button>
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
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <th>Col 3</th>
                    <th>Col 4</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Value 1</td>
                    <td>Value 2</td>
                    <td>Value 3</td>
                    <td>Value 4</td>
                </tr>
                </tbody>
            </table>
        )
    }
});

var Content = React.createClass({
    render: function () {
        return (
            <div>
                <Form/>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <Table/>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Content/>, document.getElementById('content')
);
