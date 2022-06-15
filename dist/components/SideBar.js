"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(_ref) {
  let {
    mode,
    setMode
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    flex: 1,
    p: 2,
    sx: {
      display: {
        xs: "none",
        sm: "block"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    position: "fixed"
  }, /*#__PURE__*/_react.default.createElement(_material.List, null, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#home"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Home, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Homepage"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#pages"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Article, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Pages"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#groups"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Groups, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Groups"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#market"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Storefront, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Marketplace"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#friends"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Person, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Friends"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#settings"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Settings, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Settings"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, {
    component: "a",
    href: "#profiles"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.AccountBox, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Profile"
  }))), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, null, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ModeNight, null)), /*#__PURE__*/_react.default.createElement(_material.Switch, {
    onChange: () => setMode(mode === "light" ? "dark" : "light")
  }))))));
}

var _default = Sidebar;
exports.default = _default;