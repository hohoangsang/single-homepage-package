"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _iconsMaterial = require("@mui/icons-material");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledToolbar = (0, _material.styled)(_material.Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});
const SearchBox = (0, _material.styled)("div")(_ref => {
  let {
    theme
  } = _ref;
  return {
    backgroundColor: "white",
    padding: "5px 10px",
    width: "50%",
    borderRadius: theme.shape.borderRadius
  };
});
const IconsBox = (0, _material.styled)(_material.Box)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  };
});
const UserBox = (0, _material.styled)(_material.Box)(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  };
});

function Header() {
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/_react.default.createElement(_material.AppBar, {
    position: "sticky"
  }, /*#__PURE__*/_react.default.createElement(StyledToolbar, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    sx: {
      display: {
        xs: "none",
        sm: "block"
      }
    }
  }, "DevVerse"), /*#__PURE__*/_react.default.createElement(_iconsMaterial.LocalLibrary, {
    sx: {
      display: {
        xs: "block",
        sm: "none"
      }
    }
  }), /*#__PURE__*/_react.default.createElement(SearchBox, null, /*#__PURE__*/_react.default.createElement(_material.InputBase, {
    placeholder: "search..."
  })), /*#__PURE__*/_react.default.createElement(IconsBox, null, /*#__PURE__*/_react.default.createElement(_material.Badge, {
    badgeContent: 4,
    color: "error",
    sx: {
      "&:hover": {
        cursor: "pointer"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Mail, null)), /*#__PURE__*/_react.default.createElement(_material.Badge, {
    badgeContent: 6,
    color: "error",
    sx: {
      "&:hover": {
        cursor: "pointer"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Notifications, null)), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg",
    sx: {
      width: 30,
      height: 30,
      "&:hover": {
        cursor: "pointer"
      }
    },
    onClick: handleClick
  })), /*#__PURE__*/_react.default.createElement(UserBox, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "p"
  }, "Sang"), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg",
    sx: {
      width: 30,
      height: 30,
      "&:hover": {
        cursor: "pointer"
      }
    },
    onClick: handleClick
  }))), /*#__PURE__*/_react.default.createElement(_material.Menu, {
    id: "basic-menu",
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    MenuListProps: {
      "aria-labelledby": "basic-button"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.MenuItem, null, "Profile"), /*#__PURE__*/_react.default.createElement(_material.MenuItem, null, "Logout")));
}

var _default = Header;
exports.default = _default;