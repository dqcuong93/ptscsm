import React from 'react';
import ReactDOM from 'react-dom';
import Form from './checking/form';
import Table from './checking/table';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: null
        };
        this.dataReturnOnForm = this.dataReturnOnForm.bind(this);
    };

    dataReturnOnForm(data) {
        this.setState({
            tableData: data.tableData
        })
    }

    render() {
        return (
            <div>
                <Form dataReturnOnForm={this.dataReturnOnForm}/>
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