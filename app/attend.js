import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.submitData}>
                <h2 className="card-inside-title">Floating Label Examples</h2>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="stockNumber" autoFocus
                                       onChange={this.props.inputChange}/>
                                <label className="form-label">Stock number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="personalPassportId"
                                       onChange={this.props.inputChange}/>
                                <label className="form-label">Personal ID/Passport number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="name"
                                       onChange={this.props.inputChange}/>
                                <label className="form-label">Stockholder name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-lg btn-primary waves-effect">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

class Rows extends React.Component {
    render() {
        if (this.props.rowData) {
            return (
                <tr>
                    <td>{this.props.rowData.stocknumber}</td>
                    <td>{this.props.rowData.personalpassportid}</td>
                    <td>{this.props.rowData.name}</td>
                </tr>
            )
        }
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsData: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            rowsData: nextProps.tableData
        });
    }

    render() {
        var rows = [];
        this.state.rowsData.forEach((rowsData) => {
            rows.push(<Rows rowData={rowsData} key={rowsData.id}/>)
        });
        return (
            <table data-toggle="table">
                <thead className="bg-deep-orange">
                <tr>
                    <th>Stock Number</th>
                    <th>Personal/Passport ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
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
            tableData: null
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitData = this.submitData.bind(this)
    };

    inputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    submitData(event) {
        const {stockNumber, personalPassportId, name} = this.state;

        axios.post('/attend', {
            stockNumber: stockNumber,
            personalPassportId: personalPassportId,
            name: name
        }).then((response) => {
            this.setState({
                tableData: response.data
            });
        }).catch((err) => {
            console.log(err);
        });

        event.preventDefault();
    };

    render() {
        return (
            <div>
                <Form inputChange={this.inputChange} submitData={this.submitData}/>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <Table tableData={this.state.tableData}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Content/>, document.getElementById('content'));