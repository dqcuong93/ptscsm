import React from 'react';

class Rows extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.rowData.stocknumber}</td>
                <td>{this.props.rowData.personalpassportid}</td>
                <td>{this.props.rowData.name}</td>
            </tr>
        )
    }
}

export default class Table extends React.Component {
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