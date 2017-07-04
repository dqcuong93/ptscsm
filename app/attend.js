import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
    render() {
        return (
            <form>
                <h2 className="card-inside-title">Floating Label Examples</h2>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="stockNumber" autoFocus value={this.props.stockNumber}/>
                                <label className="form-label">Stock number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="personalPassportId" value={this.props.personalPassportId}/>
                                <label className="form-label">Personal ID/Passport number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="name" value={this.props.name}/>
                                <label className="form-label">Stockholder name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.props.submitData}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

class Table extends React.Component {
    render() {
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
                </tbody>
            </table>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockNumber: '',
            personalPassportId: '',
            name: '',
        };
        this.submitData = this.submitData.bind(this)
    };

    submitData(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Form submitData={this.submitData}/>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <Table/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Content/>, document.getElementById('content'));