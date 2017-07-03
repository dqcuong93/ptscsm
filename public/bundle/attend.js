webpackJsonp([0],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(49);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _react2.default.createClass({
    displayName: 'Form',

    render: function render() {
        return _react2.default.createElement(
            'form',
            { method: 'post', action: '/attend' },
            _react2.default.createElement(
                'h2',
                { className: 'card-inside-title' },
                'Floating Label Examples'
            ),
            _react2.default.createElement(
                'div',
                { className: 'row clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group form-float form-group-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-line' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', autoFocus: true }),
                            _react2.default.createElement(
                                'label',
                                { className: 'form-label' },
                                'Stock number'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group form-float form-group-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-line' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control' }),
                            _react2.default.createElement(
                                'label',
                                { className: 'form-label' },
                                'Personal ID/Passport number'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group form-float form-group-lg' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-line' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control' }),
                            _react2.default.createElement(
                                'label',
                                { className: 'form-label' },
                                'Fullname'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-12' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary btn-lg' },
                        'Submit'
                    )
                )
            )
        );
    }
});

var Table = _react2.default.createClass({
    displayName: 'Table',

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'row clearfix' },
            _react2.default.createElement(
                'div',
                { className: 'col-sm-12' },
                _react2.default.createElement(
                    'table',
                    { 'data-toggle': 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Col 1'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Col 2'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Col 3'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Col 4'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Value 1'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Value 2'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Value 3'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                'Value 4'
                            )
                        )
                    )
                )
            )
        );
    }
});

var Content = _react2.default.createClass({
    displayName: 'Content',

    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Form, null),
            _react2.default.createElement(Table, null)
        );
    }
});

_reactDom2.default.render(_react2.default.createElement(Content, null), document.getElementById('content'));

/***/ })

},[185]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXR0ZW5kLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsIlRhYmxlIiwiQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUN6QkMsWUFBUSxrQkFBWTtBQUNoQixlQUNJO0FBQUE7QUFBQSxjQUFNLFFBQU8sTUFBYixFQUFvQixRQUFPLFNBQTNCO0FBQ0k7QUFBQTtBQUFBLGtCQUFJLFdBQVUsbUJBQWQ7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHFDQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsV0FBZjtBQUNJLHFFQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLGNBQTdCLEVBQTRDLGVBQTVDLEdBREo7QUFFSTtBQUFBO0FBQUEsa0NBQU8sV0FBVSxZQUFqQjtBQUFBO0FBQUE7QUFGSjtBQURKLHFCQURKO0FBT0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUscUNBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxXQUFmO0FBQ0kscUVBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsY0FBN0IsR0FESjtBQUVJO0FBQUE7QUFBQSxrQ0FBTyxXQUFVLFlBQWpCO0FBQUE7QUFBQTtBQUZKO0FBREoscUJBUEo7QUFhSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxxQ0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFdBQWY7QUFDSSxxRUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QixHQURKO0FBRUk7QUFBQTtBQUFBLGtDQUFPLFdBQVUsWUFBakI7QUFBQTtBQUFBO0FBRko7QUFESjtBQWJKO0FBREosYUFGSjtBQXdCSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBUSxXQUFVLHdCQUFsQjtBQUFBO0FBQUE7QUFESjtBQURKO0FBeEJKLFNBREo7QUFnQ0g7QUFsQ3dCLENBQWxCLENBQVg7O0FBcUNBLElBQUlDLFFBQVEsZ0JBQU1GLFdBQU4sQ0FBa0I7QUFBQTs7QUFDMUJDLFlBQVEsa0JBQVk7QUFDaEIsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFPLGVBQVksT0FBbkI7QUFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFEQSxxQkFESjtBQVNJO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQURBO0FBVEo7QUFESjtBQURKLFNBREo7QUF3Qkg7QUExQnlCLENBQWxCLENBQVo7O0FBNkJBLElBQUlFLFVBQVUsZ0JBQU1ILFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUJDLFlBQVEsa0JBQVk7QUFDaEIsZUFDSTtBQUFBO0FBQUE7QUFDSSwwQ0FBQyxJQUFELE9BREo7QUFFSSwwQ0FBQyxLQUFEO0FBRkosU0FESjtBQU1IO0FBUjJCLENBQWxCLENBQWQ7O0FBV0EsbUJBQVNBLE1BQVQsQ0FDSSw4QkFBQyxPQUFELE9BREosRUFDZ0JHLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FEaEIsRSIsImZpbGUiOiJhdHRlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9hdHRlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLWluc2lkZS10aXRsZVwiPkZsb2F0aW5nIExhYmVsIEV4YW1wbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZmxvYXQgZm9ybS1ncm91cC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhdXRvRm9jdXMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U3RvY2sgbnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZmxvYXQgZm9ybS1ncm91cC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QZXJzb25hbCBJRC9QYXNzcG9ydCBudW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1mbG9hdCBmb3JtLWdyb3VwLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkZ1bGxuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBUYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBkYXRhLXRvZ2dsZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbCAxPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2wgMjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29sIDM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbCA0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmFsdWUgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmFsdWUgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmFsdWUgMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmFsdWUgNDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIENvbnRlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0vPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxDb250ZW50Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2F0dGVuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=