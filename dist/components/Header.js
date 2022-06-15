"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "#home"
  }, "ReactNavbarComponent"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#link"
  }, "Link"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown, {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "#action/3.1"
  }, "Action"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "#action/3.2"
  }, "Another action"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "#action/3.3"
  }, "Something"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Divider, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "#action/3.4"
  }, "Separated link"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
    inline: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-success"
  }, "Search")))));
};

var _default = Header;
exports.default = _default;