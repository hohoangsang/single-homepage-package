"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _MoreVert = _interopRequireDefault(require("@mui/icons-material/MoreVert"));

var _Share = _interopRequireDefault(require("@mui/icons-material/Share"));

var _material = require("@mui/material");

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _CardActions = _interopRequireDefault(require("@mui/material/CardActions"));

var _CardMedia = _interopRequireDefault(require("@mui/material/CardMedia"));

var _colors = require("@mui/material/colors");

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main() {
  return /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: {
      maxWidth: 345
    }
  }, /*#__PURE__*/_react.default.createElement(_material.CardHeader, {
    avatar: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      sx: {
        bgcolor: _colors.red[500]
      },
      "aria-label": "recipe"
    }, "R"),
    action: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      "aria-label": "settings"
    }, /*#__PURE__*/_react.default.createElement(_MoreVert.default, null)),
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016"
  }), /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    component: "img",
    height: "194",
    image: "https://picsum.photos/id/0/367/267",
    alt: "Paella dish"
  }), /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    disableSpacing: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "add to favorites"
  }, /*#__PURE__*/_react.default.createElement(_Favorite.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "share"
  }, /*#__PURE__*/_react.default.createElement(_Share.default, null)))));
}