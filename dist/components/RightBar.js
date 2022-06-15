"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RightBar() {
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    flex: 2,
    p: 2,
    sx: {
      display: {
        xs: "none",
        sm: "block"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    position: "fixed",
    spacing: 2,
    width: 340
  }, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    fontWeight: 300
  }, "Online friends"), /*#__PURE__*/_react.default.createElement(_material.AvatarGroup, {
    max: 6,
    sx: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Remy Sharp",
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Travis Howard",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Cindy Baker",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Agnes Walker",
    src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Trevor Henderson",
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Travis Howard",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Cindy Baker",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Agnes Walker",
    src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Trevor Henderson",
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Travis Howard",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Cindy Baker",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Agnes Walker",
    src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Trevor Henderson",
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Travis Howard",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Cindy Baker",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Agnes Walker",
    src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
  }), /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Trevor Henderson",
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    fontWeight: 300
  }, "Latest Photo"), /*#__PURE__*/_react.default.createElement(_material.ImageList, {
    cols: 3,
    rowHeight: 100,
    sx: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.ImageListItem, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_material.ImageListItem, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_material.ImageListItem, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    alt: ""
  })))), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    fontWeight: 300
  }, "Latest Conversations"), /*#__PURE__*/_react.default.createElement(_material.List, null, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    alignItems: "flex-start"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Remy Sharp",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Brunch this weekend?",
    secondary: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        display: "inline"
      },
      component: "span",
      variant: "body2",
      color: "text.primary"
    }, "Ali Connors"), " — I'll be in your neighborhood doing errands this…")
  })), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    variant: "inset",
    component: "li"
  }), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    alignItems: "flex-start"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Travis Howard",
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg"
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Summer BBQ",
    secondary: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        display: "inline"
      },
      component: "span",
      variant: "body2",
      color: "text.primary"
    }, "to Scott, Alex, Jennifer"), " — Wish I could come, but I'm out of town this…")
  })), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    variant: "inset",
    component: "li"
  }), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    alignItems: "flex-start"
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    alt: "Cindy Baker",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: "Oui Oui",
    secondary: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
      sx: {
        display: "inline"
      },
      component: "span",
      variant: "body2",
      color: "text.primary"
    }, "Sandra Adams"), " — Do you have Paris recommendations? Have you ever…")
  }))))));
}

var _default = RightBar;
exports.default = _default;