import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext } from 'react';
import { IconContext } from '../context';

function IconAlipayComponent(iconProps, ref) {
  var _useContext = useContext(IconContext),
      prefixCls = _useContext.prefixCls;

  var spin = iconProps.spin,
      className = iconProps.className;

  var props = _objectSpread(_objectSpread({
    "aria-hidden": true,
    focusable: false,
    ref: ref
  }, iconProps), {}, {
    className: "".concat(className ? className + ' ' : '').concat(prefixCls, "-icon ").concat(prefixCls, "-icon-alipay")
  });

  if (spin) {
    props.className = "".concat(props.className, " ").concat(prefixCls, "-icon-loading");
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    fill: "none",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M766.492 323.305c0-11.411-9.25-20.662-20.661-20.662H523.145V213.11c0-11.411-9.25-20.662-20.662-20.662h-68.872c-11.411 0-20.662 9.25-20.662 20.662v89.533h-208.91c-11.411 0-20.662 9.25-20.662 20.662 0 11.411 9.25 20.662 20.662 20.662H412.95v64.28H245.362c-11.411 0-20.662 9.25-20.662 20.662 0 11.411 9.25 20.662 20.662 20.662h360.429s-87.238 339.767-344.359 358.133c0 0-165.292 9.183-156.109-119.378 0 0 13.774-215.798 417.822-18.366 259.323 126.715 365.449 172.102 408.203 188.359 13.515 5.139 27.984-4.862 27.984-19.321V733.853a20.667 20.667 0 0 0-12.682-19.058c-84.18-35.303-563.358-222.037-708.177-191.761C74.448 557.324 59.408 656.185 64 729.649c6.874 109.98 197.432 169.884 293.853 128.561 94.052-40.308 253.633-80.616 355.165-423.475 3.916-13.223-6.033-26.487-19.824-26.487H523.145v-64.28H745.83c11.411-.001 20.662-9.252 20.662-20.663z"
  }));
}

var IconAlipay = /*#__PURE__*/React.forwardRef(IconAlipayComponent);
IconAlipay.defaultProps = {
  isIcon: true
};
IconAlipay.displayName = 'IconAlipay';
export default IconAlipay;