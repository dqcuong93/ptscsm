import React from 'react';
import ReactDOM from 'react-dom';

var tableBody = React.createClass({
    render: function () {
        return (
            <tbody>
            <tr>
                <td>Welcome to Reactjs</td>
                <td>This is rendered by Reactjs.</td>
                <td>1</td>
                <td>2</td>
            </tr>
            </tbody>
        )
    }
});

ReactDOM.render(
    <tableBody />, document.getElementById('table_body')
);