import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockNumber: '',
            personalPassportId: '',
            name: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }

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
            }, () => {
                this.props.dataReturnOnForm(this.state);
            });
        }).catch((err) => {
            console.log(err);
        });

        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submitData}>
                <h2 className="card-inside-title">Floating Label Examples</h2>
                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="stockNumber" autoFocus
                                       onChange={this.inputChange}/>
                                <label className="form-label">Stock number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="personalPassportId"
                                       onChange={this.inputChange}/>
                                <label className="form-label">Personal ID/Passport number</label>
                            </div>
                        </div>
                        <div className="form-group form-float form-group-lg">
                            <div className="form-line">
                                <input type="text" className="form-control" name="name"
                                       onChange={this.inputChange}/>
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