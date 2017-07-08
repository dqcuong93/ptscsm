webpackJsonp([0],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(51);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(59);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(193);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.props.submitData },
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
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'stockNumber', autoFocus: true,
                                    onChange: this.props.inputChange }),
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
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'personalPassportId',
                                    onChange: this.props.inputChange }),
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
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name',
                                    onChange: this.props.inputChange }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-label' },
                                    'Stockholder name'
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
                            { type: 'submit', className: 'btn btn-lg btn-primary waves-effect' },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

var Rows = function (_React$Component2) {
    _inherits(Rows, _React$Component2);

    function Rows() {
        _classCallCheck(this, Rows);

        return _possibleConstructorReturn(this, (Rows.__proto__ || Object.getPrototypeOf(Rows)).apply(this, arguments));
    }

    _createClass(Rows, [{
        key: 'render',
        value: function render() {
            if (this.props.rowData) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        this.props.rowData.stocknumber
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        this.props.rowData.personalpassportid
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        this.props.rowData.name
                    )
                );
            }
        }
    }]);

    return Rows;
}(_react2.default.Component);

var Table = function (_React$Component3) {
    _inherits(Table, _React$Component3);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this3 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this3.state = {
            rowsData: []
        };
        return _this3;
    }

    _createClass(Table, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                rowsData: nextProps.tableData
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.rowsData) {
                var rows = [];
                this.state.rowsData.forEach(function (rowsData) {
                    rows.push(_react2.default.createElement(Rows, { rowData: rowsData, key: rowsData.id }));
                });
                return _react2.default.createElement(
                    'table',
                    { 'data-toggle': 'table' },
                    _react2.default.createElement(
                        'thead',
                        { className: 'bg-deep-orange' },
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Stock Number'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Personal/Passport ID'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Name'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        rows
                    )
                );
            }
        }
    }]);

    return Table;
}(_react2.default.Component);

var Content = function (_React$Component4) {
    _inherits(Content, _React$Component4);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this4 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this4.state = {
            stockNumber: '',
            personalPassportId: '',
            name: '',
            tableData: null
        };
        _this4.inputChange = _this4.inputChange.bind(_this4);
        _this4.submitData = _this4.submitData.bind(_this4);
        return _this4;
    }

    _createClass(Content, [{
        key: 'inputChange',
        value: function inputChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'submitData',
        value: function submitData(event) {
            var _this5 = this;

            var _state = this.state,
                stockNumber = _state.stockNumber,
                personalPassportId = _state.personalPassportId,
                name = _state.name;


            _axios2.default.post('/attend', {
                stockNumber: stockNumber,
                personalPassportId: personalPassportId,
                name: name
            }).then(function (response) {
                _this5.setState({
                    tableData: response.data.rows
                });
            }).catch(function (err) {
                console.log(err);
            });

            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Form, { inputChange: this.inputChange, submitData: this.submitData }),
                _react2.default.createElement(
                    'div',
                    { className: 'row clearfix' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(Table, { tableData: this.state.tableData })
                    )
                )
            );
        }
    }]);

    return Content;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Content, null), document.getElementById('content'));

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\NodeJSProjects\\ptscsm\\node_modules\\axios\\index.js'");

/***/ })

},[192]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXR0ZW5kLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInN1Ym1pdERhdGEiLCJpbnB1dENoYW5nZSIsIkNvbXBvbmVudCIsIlJvd3MiLCJyb3dEYXRhIiwic3RvY2tudW1iZXIiLCJwZXJzb25hbHBhc3Nwb3J0aWQiLCJuYW1lIiwiVGFibGUiLCJzdGF0ZSIsInJvd3NEYXRhIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJ0YWJsZURhdGEiLCJyb3dzIiwiZm9yRWFjaCIsInB1c2giLCJpZCIsIkNvbnRlbnQiLCJzdG9ja051bWJlciIsInBlcnNvbmFsUGFzc3BvcnRJZCIsImJpbmQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFNLFVBQVUsS0FBS0MsS0FBTCxDQUFXQyxVQUEzQjtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLG1CQUFkO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUscUNBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxXQUFmO0FBQ0kseUVBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsY0FBN0IsRUFBNEMsTUFBSyxhQUFqRCxFQUErRCxlQUEvRDtBQUNPLDhDQUFVLEtBQUtELEtBQUwsQ0FBV0UsV0FENUIsR0FESjtBQUdJO0FBQUE7QUFBQSxzQ0FBTyxXQUFV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O0FBRkosYUFESjtBQVVIOzs7O0VBcERpQixnQkFBTVgsUzs7QUF1RDVCLG1CQUFTZ0MsTUFBVCxDQUFnQiw4QkFBQyxPQUFELE9BQWhCLEVBQTRCQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQTVCLEUiLCJmaWxlIjoiYXR0ZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wcm9wcy5zdWJtaXREYXRhfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLWluc2lkZS10aXRsZVwiPkZsb2F0aW5nIExhYmVsIEV4YW1wbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZmxvYXQgZm9ybS1ncm91cC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic3RvY2tOdW1iZXJcIiBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaW5wdXRDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlN0b2NrIG51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWZsb2F0IGZvcm0tZ3JvdXAtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBlcnNvbmFsUGFzc3BvcnRJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QZXJzb25hbCBJRC9QYXNzcG9ydCBudW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1mbG9hdCBmb3JtLWdyb3VwLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaW5wdXRDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlN0b2NraG9sZGVyIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgd2F2ZXMtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUm93cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucm93RGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5yb3dEYXRhLnN0b2NrbnVtYmVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnJvd0RhdGEucGVyc29uYWxwYXNzcG9ydGlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnJvd0RhdGEubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcm93c0RhdGE6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb3dzRGF0YTogbmV4dFByb3BzLnRhYmxlRGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzRGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgcm93cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3NEYXRhLmZvckVhY2goKHJvd3NEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goPFJvd3Mgcm93RGF0YT17cm93c0RhdGF9IGtleT17cm93c0RhdGEuaWR9Lz4pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGRhdGEtdG9nZ2xlPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZGVlcC1vcmFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jayBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVyc29uYWwvUGFzc3BvcnQgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdG9ja051bWJlcjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbmFsUGFzc3BvcnRJZDogJycsXHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICB0YWJsZURhdGE6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UgPSB0aGlzLmlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhID0gdGhpcy5zdWJtaXREYXRhLmJpbmQodGhpcylcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdWJtaXREYXRhKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge3N0b2NrTnVtYmVyLCBwZXJzb25hbFBhc3Nwb3J0SWQsIG5hbWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2F0dGVuZCcsIHtcclxuICAgICAgICAgICAgc3RvY2tOdW1iZXI6IHN0b2NrTnVtYmVyLFxyXG4gICAgICAgICAgICBwZXJzb25hbFBhc3Nwb3J0SWQ6IHBlcnNvbmFsUGFzc3BvcnRJZCxcclxuICAgICAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGFibGVEYXRhOiByZXNwb25zZS5kYXRhLnJvd3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGlucHV0Q2hhbmdlPXt0aGlzLmlucHV0Q2hhbmdlfSBzdWJtaXREYXRhPXt0aGlzLnN1Ym1pdERhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHRhYmxlRGF0YT17dGhpcy5zdGF0ZS50YWJsZURhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8Q29udGVudC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXR0ZW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==